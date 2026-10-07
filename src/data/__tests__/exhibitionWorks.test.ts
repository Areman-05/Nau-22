import { describe, expect, it } from "vitest";
import { getExhibitionIds } from "../exhibitions";
import {
  exhibitionWorks,
  getExhibitionWorks,
  listExhibitionWorkIds,
} from "../exhibitionWorks";

describe("exhibition works", () => {
  it("keys align with exhibition ids", () => {
    const exhibitionIds = new Set(getExhibitionIds());
    const workIds = listExhibitionWorkIds();
    expect(workIds.length).toBeGreaterThan(10);
    for (const id of workIds) {
      expect(exhibitionIds.has(id)).toBe(true);
      expect(getExhibitionWorks(id)).toBe(exhibitionWorks[id]);
      expect(getExhibitionWorks(id).length).toBeGreaterThan(0);
    }
  });

  it("keeps work records with media and year", () => {
    for (const works of Object.values(exhibitionWorks)) {
      for (const work of works) {
        expect(work.title.trim()).not.toBe("");
        expect(work.medium.trim()).not.toBe("");
        expect(work.year.trim()).not.toBe("");
        expect(work.image?.trim()).toBeTruthy();
      }
    }
  });
});
