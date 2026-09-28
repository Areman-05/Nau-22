export type ArtworkType = "edition" | "unique";
export type Availability = "available" | "reserved" | "sold";
export type Medium =
  | "painting"
  | "sculpture"
  | "photography"
  | "works-on-paper"
  | "installation"
  | "mixed-media";

export type ExhibitionStatus = "current" | "upcoming" | "past";

export interface Artist {
  slug: string;
  name: string;
  birthYear: number;
  basedIn: string;
  bio: string;
  bioEn: string;
}

export interface Artwork {
  slug: string;
  title: string;
  artistSlug: string;
  year: number;
  medium: Medium;
  mediumLabel: string;
  dimensions: string;
  type: ArtworkType;
  /** Present for editions; null for unique / price-on-request */
  priceEur: number | null;
  editionSize: number | null;
  editionAvailable: number | null;
  availability: Availability;
  description: string;
  descriptionEn: string;
  provenance: string;
  images: {
    src: string;
    alt: string;
  }[];
  exhibitionSlugs: string[];
  featured?: boolean;
}

export interface Exhibition {
  slug: string;
  title: string;
  status: ExhibitionStatus;
  startDate: string;
  endDate: string;
  artistSlugs: string[];
  artworkSlugs: string[];
  curatorialText: string;
  curatorialTextEn: string;
  heroImage: {
    src: string;
    alt: string;
  };
}

export interface VisitSlot {
  id: string;
  label: string;
  time: string;
}

export type VisitMode = "exhibition" | "private";

export interface VisitBooking {
  mode: VisitMode;
  date: string;
  slotId: string;
  name: string;
  email: string;
  artworkSlugs: string[];
  notes: string;
}

export interface CartItem {
  artworkSlug: string;
  quantity: number;
}
