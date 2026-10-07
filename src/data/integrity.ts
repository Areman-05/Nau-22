import { artists } from "./artists";
import { getArchiveTitleSlugs, getArchiveWorks } from "./archiveWorks";
import { collaborators } from "./collaborators";
import { exhibitions } from "./exhibitions";
import { listExhibitionWorkIds } from "./exhibitionWorks";
import { gallery } from "./gallery";
import { news } from "./news";
import { milestones } from "./proyecto";

export type IntegrityIssue = {
  code: string;
  message: string;
};

function uniqueOrDupes(values: string[]): string[] {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) dupes.add(value);
    seen.add(value);
  }
  return [...dupes];
}

/** Cross-entity checks for the content catalog (the app's data backend). */
export function collectIntegrityIssues(): IntegrityIssue[] {
  const issues: IntegrityIssue[] = [];

  const artistSlugs = artists.map((a) => a.slug);
  const artistSlugSet = new Set(artistSlugs);
  const exhibitionIds = exhibitions.map((e) => e.id);
  const exhibitionIdSet = new Set(exhibitionIds);
  const newsIds = news.map((n) => n.id);
  const collaboratorSlugs = collaborators.map((c) => c.slug);

  for (const slug of uniqueOrDupes(artistSlugs)) {
    issues.push({ code: "artist.duplicate_slug", message: `Duplicate artist slug: ${slug}` });
  }
  for (const id of uniqueOrDupes(exhibitionIds)) {
    issues.push({ code: "exhibition.duplicate_id", message: `Duplicate exhibition id: ${id}` });
  }
  for (const id of uniqueOrDupes(newsIds)) {
    issues.push({ code: "news.duplicate_id", message: `Duplicate news id: ${id}` });
  }
  for (const slug of uniqueOrDupes(collaboratorSlugs)) {
    issues.push({
      code: "collaborator.duplicate_slug",
      message: `Duplicate collaborator slug: ${slug}`,
    });
  }

  for (const artist of artists) {
    if (!artist.name.trim()) {
      issues.push({ code: "artist.empty_name", message: `Artist ${artist.slug} has empty name` });
    }
    if (!artist.images.length) {
      issues.push({
        code: "artist.no_images",
        message: `Artist ${artist.slug} has no images`,
      });
    }
    if (!artist.bio.trim() || !artist.bioEn.trim()) {
      issues.push({
        code: "artist.missing_bio",
        message: `Artist ${artist.slug} is missing bilingual bio`,
      });
    }
  }

  for (const exhibition of exhibitions) {
    if (!exhibition.title.trim()) {
      issues.push({
        code: "exhibition.empty_title",
        message: `Exhibition ${exhibition.id} has empty title`,
      });
    }
    if (!exhibition.image.trim()) {
      issues.push({
        code: "exhibition.missing_image",
        message: `Exhibition ${exhibition.id} has no image`,
      });
    }
    if (!exhibition.curatorialText.trim() || !exhibition.curatorialTextEn.trim()) {
      issues.push({
        code: "exhibition.missing_text",
        message: `Exhibition ${exhibition.id} is missing bilingual curatorial text`,
      });
    }
    if (!exhibition.works.length) {
      issues.push({
        code: "exhibition.no_works",
        message: `Exhibition ${exhibition.id} has no works`,
      });
    }
    for (const slug of exhibition.artistSlugs) {
      if (!artistSlugSet.has(slug)) {
        issues.push({
          code: "exhibition.unknown_artist",
          message: `Exhibition ${exhibition.id} references unknown artist: ${slug}`,
        });
      }
    }
  }

  for (const workId of listExhibitionWorkIds()) {
    if (!exhibitionIdSet.has(workId)) {
      issues.push({
        code: "works.orphan_key",
        message: `exhibitionWorks has orphan key: ${workId}`,
      });
    }
  }

  for (const slug of getArchiveTitleSlugs()) {
    if (!artistSlugSet.has(slug)) {
      issues.push({
        code: "archive.orphan_slug",
        message: `Archive titles reference unknown artist: ${slug}`,
      });
    }
  }

  for (const artist of artists) {
    const works = getArchiveWorks(artist);
    if (!works.length) {
      issues.push({
        code: "archive.empty",
        message: `Artist ${artist.slug} has empty archive`,
      });
    }
  }

  for (const item of news) {
    if (!item.title.trim() || !item.titleEn.trim()) {
      issues.push({
        code: "news.missing_title",
        message: `News ${item.id} is missing bilingual title`,
      });
    }
    if (!item.excerpt.trim() || !item.excerptEn.trim()) {
      issues.push({
        code: "news.missing_excerpt",
        message: `News ${item.id} is missing bilingual excerpt`,
      });
    }
  }

  for (const collaborator of collaborators) {
    if (!collaborator.images.length) {
      issues.push({
        code: "collaborator.no_images",
        message: `Collaborator ${collaborator.slug} has no images`,
      });
    }
  }

  const years = milestones.map((m) => m.year);
  for (const year of uniqueOrDupes(years)) {
    issues.push({
      code: "proyecto.duplicate_year",
      message: `Duplicate proyecto year: ${year}`,
    });
  }
  for (let i = 1; i < years.length; i += 1) {
    if (Number(years[i - 1]) < Number(years[i])) {
      issues.push({
        code: "proyecto.year_order",
        message: `Proyecto years must be newest-first: ${years[i - 1]} before ${years[i]}`,
      });
      break;
    }
  }
  for (const milestone of milestones) {
    if (!milestone.items.length) {
      issues.push({
        code: "proyecto.empty_year",
        message: `Proyecto year ${milestone.year} has no achievements`,
      });
    }
    for (const item of milestone.items) {
      if (!item.paragraphs.length || !item.paragraphsEn.length) {
        issues.push({
          code: "proyecto.empty_achievement",
          message: `Achievement "${item.title}" in ${milestone.year} has empty body`,
        });
      }
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gallery.email)) {
    issues.push({ code: "gallery.email", message: `Invalid gallery email: ${gallery.email}` });
  }
  if (!gallery.addressLine.trim() || !gallery.postalCode.trim()) {
    issues.push({ code: "gallery.address", message: "Gallery address is incomplete" });
  }

  return issues;
}

export function assertDataIntegrity(): void {
  const issues = collectIntegrityIssues();
  if (issues.length) {
    const detail = issues.map((i) => `- [${i.code}] ${i.message}`).join("\n");
    throw new Error(`Data integrity failed:\n${detail}`);
  }
}
