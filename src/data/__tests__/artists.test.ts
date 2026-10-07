import { describe, expect, it } from "vitest";
import {
  artists,
  getArtist,
  getArtistSlugs,
  listArtists,
  requireArtist,
} from "../artists";

describe("artists", () => {
  it("lists a non-empty roster sorted by name", () => {
    const list = listArtists();
    expect(list.length).toBeGreaterThan(5);
    expect(list).toBe(artists);
    const names = list.map((a) => a.name);
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b, "es")));
  });

  it("resolves artists by slug and fails loudly for unknowns", () => {
    const first = artists[0];
    expect(getArtist(first.slug)?.name).toBe(first.name);
    expect(requireArtist(first.slug)).toEqual(first);
    expect(getArtist("no-such-artist")).toBeUndefined();
    expect(() => requireArtist("no-such-artist")).toThrow(/not found/i);
  });

  it("keeps unique slugs and bilingual practice fields", () => {
    const slugs = getArtistSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const artist of artists) {
      expect(artist.practice.trim()).not.toBe("");
      expect(artist.practiceEn.trim()).not.toBe("");
      expect(artist.images.length).toBeGreaterThan(0);
    }
  });
});
