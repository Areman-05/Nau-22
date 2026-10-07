import type { GalleryConfig } from "./types";

export const gallery: GalleryConfig = {
  name: "nau 22",
  tagline: "Galería contemporánea · Poblenou",
  taglineEn: "Contemporary gallery · Poblenou",
  addressLine: "Carrer de Pujades, 102",
  postalCode: "08005",
  neighborhood: "Poblenou, 22@",
  city: "Barcelona, España",
  email: "info@nau22.com",
  phone: "+34 93 123 45 67",
  instagram: "https://instagram.com/nau22gallery",
  hours: {
    es: "Miércoles — Sábado · 12:00 — 20:00",
    en: "Wednesday — Saturday · 12:00 — 20:00",
  },
  closed: {
    es: "Dom — Mar cerrado",
    en: "Sun — Tue closed",
  },
};

export function getGallery(): GalleryConfig {
  return gallery;
}

export function getGalleryContactHref(): string {
  return `mailto:${gallery.email}`;
}

export function getGalleryPhoneHref(): string {
  return `tel:${gallery.phone.replace(/\s/g, "")}`;
}
