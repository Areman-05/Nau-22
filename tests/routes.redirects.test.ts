import { describe, expect, it } from "vitest";
import nextConfig from "../next.config";

describe("static export", () => {
  it("exports HTML for GitHub Pages", () => {
    expect(nextConfig.output).toBe("export");
    expect(nextConfig.trailingSlash).toBe(true);
    expect(nextConfig.images?.unoptimized).toBe(true);
  });
});
