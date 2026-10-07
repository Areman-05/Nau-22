import { describe, expect, it } from "vitest";
import { paint, unsplash, works } from "../media";

describe("media helpers", () => {
  it("builds unsplash urls", () => {
    expect(unsplash("1541961017774-22349e4a1262", 800)).toContain(
      "images.unsplash.com/photo-1541961017774-22349e4a1262",
    );
    expect(unsplash("1541961017774-22349e4a1262", 800)).toContain("w=800");
  });

  it("builds person image sets from paint pool", () => {
    const images = works("Test Artist", [paint.abstract, paint.pour1]);
    expect(images).toHaveLength(2);
    expect(images[0].alt).toContain("Test Artist");
    expect(images[0].src).toBeTruthy();
  });

  it("exposes a non-empty paint pool", () => {
    expect(Object.keys(paint).length).toBeGreaterThan(10);
    for (const src of Object.values(paint)) {
      expect(typeof src).toBe("string");
      expect(src.length).toBeGreaterThan(10);
    }
  });
});
