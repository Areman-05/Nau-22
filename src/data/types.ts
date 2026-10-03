export interface PersonImage {
  src: string;
  alt: string;
}

export interface ArchiveWork {
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  image: string;
}

export interface Artist {
  slug: string;
  name: string;
  country: string;
  birthYear: number | string;
  basedIn: string;
  practice: string;
  practiceEn: string;
  bio: string;
  bioEn: string;
  bio2: string;
  bioEn2: string;
  images: PersonImage[];
}

export interface Collaborator {
  slug: string;
  name: string;
  country: string;
  year: string;
  role: string;
  roleEn: string;
  bio: string;
  bioEn: string;
  bio2: string;
  bioEn2: string;
  images: PersonImage[];
}

export type ExhibitionStatus = "current" | "upcoming" | "past";

export interface ExhibitionWork {
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  image?: string;
  available?: boolean;
  artist?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  image?: string;
  quote?: string;
  quoteEn?: string;
}

export interface Exhibition {
  id: string;
  status: ExhibitionStatus;
  title: string;
  artists: string;
  artistSlugs: string[];
  date: string;
  location: string;
  image: string;
  curatorialText: string;
  curatorialTextEn: string;
  works: ExhibitionWork[];
}
