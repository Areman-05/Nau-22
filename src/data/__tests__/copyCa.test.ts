import { describe, expect, it } from "vitest";
import { artists } from "../artists";
import { collaborators } from "../collaborators";
import { copyCa } from "../copyCa";
import { exhibitions } from "../exhibitions";
import { news } from "../news";
import { milestones } from "../proyecto";
import { artistCopy, exhibitionCopy, newsCopy } from "@/lib/copy";
import { LOCALES } from "@/lib/locale";
import { ui } from "@/lib/ui";

describe("copyCa overlay", () => {
  it("covers every artist, collaborator, news item, exhibition and milestone", () => {
    for (const artist of artists) {
      expect(copyCa.artists[artist.slug as keyof typeof copyCa.artists], artist.slug).toBeTruthy();
    }
    for (const person of collaborators) {
      expect(
        copyCa.collaborators[person.slug as keyof typeof copyCa.collaborators],
        person.slug,
      ).toBeTruthy();
    }
    for (const item of news) {
      expect(copyCa.news[item.id as keyof typeof copyCa.news], item.id).toBeTruthy();
    }
    for (const exh of exhibitions) {
      expect(copyCa.exhibitions[exh.id as keyof typeof copyCa.exhibitions], exh.id).toBeTruthy();
    }
    for (const year of milestones) {
      const ca = copyCa.milestones[year.year as keyof typeof copyCa.milestones];
      expect(ca, year.year).toHaveLength(year.items.length);
      ca.forEach((item, i) => {
        expect(item.paragraphs.length).toBe(year.items[i].paragraphs.length);
      });
    }
  });

  it("returns distinct catalog copy per locale", () => {
    const artist = artists[0];
    const es = artistCopy(artist, "es");
    const en = artistCopy(artist, "en");
    const ca = artistCopy(artist, "ca");
    expect(es.bio).toBe(artist.bio);
    expect(en.bio).toBe(artist.bioEn);
    expect(ca.bio).not.toBe(es.bio);
    expect(ca.bio).not.toBe(en.bio);

    const item = news[0];
    expect(newsCopy(item, "ca").title).not.toBe(item.title);
    expect(newsCopy(item, "en").title).toBe(item.titleEn);

    const exh = exhibitions[0];
    expect(exhibitionCopy(exh, "ca").curatorialText).not.toBe(exh.curatorialText);
    expect(exhibitionCopy(exh, "ca").location).toBe("Sala principal");
    expect(exhibitionCopy(exh, "en").location).toBe("Main room");
  });
});

describe("ui dictionary", () => {
  it("keeps the same keys in es, en and ca", () => {
    const esKeys = Object.keys(ui.es).sort();
    for (const locale of LOCALES) {
      expect(Object.keys(ui[locale]).sort()).toEqual(esKeys);
    }
  });
});
