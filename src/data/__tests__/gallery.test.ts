import { describe, expect, it } from "vitest";
import {
  gallery,
  getGallery,
  getGalleryContactHref,
  getGalleryPhoneHref,
} from "../gallery";

describe("gallery", () => {
  it("exposes complete contact and address fields", () => {
    expect(getGallery()).toBe(gallery);
    expect(gallery.name).toBe("nau 22");
    expect(gallery.addressLine).toContain("Pujades");
    expect(gallery.postalCode).toMatch(/^\d{5}$/);
    expect(gallery.hours.es).toBeTruthy();
    expect(gallery.hours.en).toBeTruthy();
    expect(gallery.closed.es).toBeTruthy();
    expect(gallery.closed.en).toBeTruthy();
  });

  it("builds usable contact hrefs", () => {
    expect(getGalleryContactHref()).toBe("mailto:info@nau22.com");
    expect(getGalleryPhoneHref()).toBe("tel:+34931234567");
  });
});
