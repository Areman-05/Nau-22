import { describe, expect, it } from "vitest";
import {
  exhibitions,
  getCurrentExhibition,
  getExhibition,
  getExhibitionIds,
  getExhibitionsByStatus,
  getExhibitionsForArtist,
  listExhibitions,
  requireExhibition,
} from "../exhibitions";

describe("exhibitions / programa", () => {
  it("lists exhibitions with unique ids", () => {
    const list = listExhibitions();
    expect(list.length).toBeGreaterThan(10);
    expect(list).toBe(exhibitions);
    const ids = getExhibitionIds();
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("resolves current, upcoming and past buckets", () => {
    const current = getExhibitionsByStatus("current");
    const upcoming = getExhibitionsByStatus("upcoming");
    const past = getExhibitionsByStatus("past");
    expect(current.length).toBeGreaterThan(0);
    expect(past.length).toBeGreaterThan(0);
    expect(current.every((e) => e.status === "current")).toBe(true);
    expect(upcoming.every((e) => e.status === "upcoming")).toBe(true);
    expect(getCurrentExhibition()?.status).toBe("current");
  });

  it("loads exhibition detail and artist reverse lookup", () => {
    const sample = exhibitions[0];
    expect(getExhibition(sample.id)?.title).toBe(sample.title);
    expect(requireExhibition(sample.id)).toEqual(sample);
    expect(() => requireExhibition("missing-show")).toThrow(/not found/i);

    const slug = sample.artistSlugs[0];
    if (slug) {
      expect(getExhibitionsForArtist(slug).some((e) => e.id === sample.id)).toBe(true);
    }
  });

  it("attaches works to every exhibition", () => {
    for (const exhibition of exhibitions) {
      expect(exhibition.works.length).toBeGreaterThan(0);
      for (const work of exhibition.works) {
        expect(work.title.trim()).not.toBe("");
        expect(work.year.trim()).not.toBe("");
      }
    }
  });
});
