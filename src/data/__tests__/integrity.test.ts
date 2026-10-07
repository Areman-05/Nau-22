import { describe, expect, it } from "vitest";
import {
  assertDataIntegrity,
  collectIntegrityIssues,
} from "../integrity";
import * as catalog from "../index";

describe("data integrity", () => {
  it("passes the full catalog cross-checks", () => {
    const issues = collectIntegrityIssues();
    expect(issues).toEqual([]);
    expect(() => assertDataIntegrity()).not.toThrow();
  });

  it("exports a stable public catalog surface", () => {
    expect(catalog.artists.length).toBeGreaterThan(0);
    expect(catalog.exhibitions.length).toBeGreaterThan(0);
    expect(catalog.news.length).toBeGreaterThan(0);
    expect(catalog.collaborators.length).toBeGreaterThan(0);
    expect(catalog.milestones.length).toBeGreaterThan(0);
    expect(catalog.gallery.email).toContain("@");
    expect(typeof catalog.getArtist).toBe("function");
    expect(typeof catalog.getExhibition).toBe("function");
    expect(typeof catalog.getNews).toBe("function");
    expect(typeof catalog.getManifesto).toBe("function");
  });
});
