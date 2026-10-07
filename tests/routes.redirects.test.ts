import { describe, expect, it } from "vitest";
import nextConfig from "../next.config";

describe("route redirects", () => {
  it("points legacy commerce and info paths to current sections", async () => {
    const redirects = await nextConfig.redirects?.();
    expect(redirects).toBeTruthy();
    const map = new Map((redirects ?? []).map((r) => [r.source, r.destination]));

    expect(map.get("/exposiciones")).toBe("/programa");
    expect(map.get("/obras")).toBe("/programa");
    expect(map.get("/carrito")).toBe("/");
    expect(map.get("/checkout")).toBe("/");
    expect(map.get("/visitar")).toBe("/proyecto");
    expect(map.get("/la-nau")).toBe("/proyecto");
    expect(map.get("/info")).toBe("/proyecto");
    expect(map.get("/miembros")).toBe("/artistas");
  });
});
