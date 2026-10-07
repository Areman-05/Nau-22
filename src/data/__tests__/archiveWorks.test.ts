import { describe, expect, it } from "vitest";
import { artists } from "../artists";
import {
  getArchiveTitleSlugs,
  getArchiveWorks,
  hasCuratedArchive,
} from "../archiveWorks";

describe("archive works", () => {
  it("returns works for every artist", () => {
    for (const artist of artists) {
      const works = getArchiveWorks(artist);
      expect(works.length).toBeGreaterThan(0);
      for (const work of works) {
        expect(work.title.trim()).not.toBe("");
        expect(work.image.trim()).not.toBe("");
        expect(work.year.trim()).not.toBe("");
      }
    }
  });

  it("marks curated archive slugs that exist on the roster", () => {
    const slugs = getArchiveTitleSlugs();
    expect(slugs.length).toBeGreaterThan(5);
    for (const slug of slugs) {
      expect(hasCuratedArchive(slug)).toBe(true);
      expect(artists.some((a) => a.slug === slug)).toBe(true);
    }
  });
});
