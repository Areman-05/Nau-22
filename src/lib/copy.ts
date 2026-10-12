import { copyCa } from "@/data/copyCa";
import type {
  Achievement,
  Artist,
  Collaborator,
  Exhibition,
  Milestone,
  NewsItem,
} from "@/data/types";
import { pick, pickList } from "./locale";
import type { Locale } from "./locale";

const LOCATIONS: Record<string, Record<Locale, string>> = {
  "Sala principal": { es: "Sala principal", en: "Main room", ca: "Sala principal" },
  Sótano: { es: "Sótano", en: "Basement", ca: "Soterrani" },
  Anexo: { es: "Anexo", en: "Annex", ca: "Annex" },
  "Project Room": { es: "Project Room", en: "Project Room", ca: "Project Room" },
};

const MONTHS: Array<[string, Record<Locale, string>]> = [
  ["Noviembre", { es: "Noviembre", en: "November", ca: "Novembre" }],
  ["Septiembre", { es: "Septiembre", en: "September", ca: "Setembre" }],
  ["Diciembre", { es: "Diciembre", en: "December", ca: "Desembre" }],
  ["Febrero", { es: "Febrero", en: "February", ca: "Febrer" }],
  ["Enero", { es: "Enero", en: "January", ca: "Gener" }],
  ["Marzo", { es: "Marzo", en: "March", ca: "Març" }],
  ["Abril", { es: "Abril", en: "April", ca: "Abril" }],
  ["Mayo", { es: "Mayo", en: "May", ca: "Maig" }],
  ["Junio", { es: "Junio", en: "June", ca: "Juny" }],
  ["Julio", { es: "Julio", en: "July", ca: "Juliol" }],
  ["Agosto", { es: "Agosto", en: "August", ca: "Agost" }],
  ["Octubre", { es: "Octubre", en: "October", ca: "Octubre" }],
  ["Ene", { es: "Ene", en: "Jan", ca: "Gen" }],
  ["Feb", { es: "Feb", en: "Feb", ca: "Feb" }],
  ["Mar", { es: "Mar", en: "Mar", ca: "Març" }],
  ["Abr", { es: "Abr", en: "Apr", ca: "Abr" }],
  ["Dic", { es: "Dic", en: "Dec", ca: "Des" }],
  ["Oct", { es: "Oct", en: "Oct", ca: "Oct" }],
  ["Nov", { es: "Nov", en: "Nov", ca: "Nov" }],
  ["Sep", { es: "Sep", en: "Sep", ca: "Set" }],
  ["Ago", { es: "Ago", en: "Aug", ca: "Ago" }],
  ["Jul", { es: "Jul", en: "Jul", ca: "Jul" }],
  ["Jun", { es: "Jun", en: "Jun", ca: "Juny" }],
];

export function localizeDate(date: string, locale: Locale): string {
  if (locale === "es") return date;
  let out = date;
  for (const [token, map] of MONTHS) {
    out = out.replace(new RegExp(`\\b${token}\\b`, "g"), map[locale]);
  }
  return out;
}

export function localizeLocation(location: string, locale: Locale): string {
  return LOCATIONS[location]?.[locale] ?? location;
}

export function artistCopy(artist: Artist, locale: Locale) {
  const ca = copyCa.artists[artist.slug as keyof typeof copyCa.artists];
  return {
    practice: pick(locale, artist.practice, artist.practiceEn, ca?.practice ?? artist.practice),
    bio: pick(locale, artist.bio, artist.bioEn, ca?.bio ?? artist.bio),
    bio2: pick(locale, artist.bio2, artist.bioEn2, ca?.bio2 ?? artist.bio2),
  };
}

export function collaboratorCopy(person: Collaborator, locale: Locale) {
  const ca = copyCa.collaborators[person.slug as keyof typeof copyCa.collaborators];
  return {
    role: pick(locale, person.role, person.roleEn, ca?.role ?? person.role),
    bio: pick(locale, person.bio, person.bioEn, ca?.bio ?? person.bio),
    bio2: pick(locale, person.bio2, person.bioEn2, ca?.bio2 ?? person.bio2),
  };
}

export function newsCopy(item: NewsItem, locale: Locale) {
  const ca = copyCa.news[item.id as keyof typeof copyCa.news];
  return {
    category: pick(locale, item.category, item.categoryEn, ca?.category ?? item.category),
    title: pick(locale, item.title, item.titleEn, ca?.title ?? item.title),
    excerpt: pick(locale, item.excerpt, item.excerptEn, ca?.excerpt ?? item.excerpt),
    quote: item.quote
      ? pick(
          locale,
          item.quote,
          item.quoteEn ?? item.quote,
          ca && "quote" in ca ? ca.quote : item.quote,
        )
      : undefined,
  };
}

export function exhibitionCopy(exh: Exhibition, locale: Locale) {
  const ca = copyCa.exhibitions[exh.id as keyof typeof copyCa.exhibitions];
  return {
    curatorialText: pick(locale, exh.curatorialText, exh.curatorialTextEn, ca ?? exh.curatorialText),
    location: localizeLocation(exh.location, locale),
    date: localizeDate(exh.date, locale),
  };
}

export function achievementCopy(item: Achievement, year: string, index: number, locale: Locale) {
  const ca = copyCa.milestones[year as keyof typeof copyCa.milestones]?.[index];
  return {
    title: pick(locale, item.title, item.titleEn, ca?.title ?? item.title),
    paragraphs: pickList(
      locale,
      item.paragraphs,
      item.paragraphsEn,
      ca?.paragraphs ? [...ca.paragraphs] : item.paragraphs,
    ),
  };
}

export function milestoneItems(milestone: Milestone, locale: Locale) {
  return milestone.items.map((item, index) => achievementCopy(item, milestone.year, index, locale));
}

const COUNTRIES: Record<string, Record<Locale, string>> = {
  España: { es: "España", en: "Spain", ca: "Espanya" },
  México: { es: "México", en: "Mexico", ca: "Mèxic" },
  Rusia: { es: "Rusia", en: "Russia", ca: "Rússia" },
  Marruecos: { es: "Marruecos", en: "Morocco", ca: "Marroc" },
  Francia: { es: "Francia", en: "France", ca: "França" },
  Japón: { es: "Japón", en: "Japan", ca: "Japó" },
  Ucrania: { es: "Ucrania", en: "Ukraine", ca: "Ucraïna" },
  Argentina: { es: "Argentina", en: "Argentina", ca: "Argentina" },
  Brasil: { es: "Brasil", en: "Brazil", ca: "Brasil" },
  Suecia: { es: "Suecia", en: "Sweden", ca: "Suècia" },
  Italia: { es: "Italia", en: "Italy", ca: "Itàlia" },
  Alemania: { es: "Alemania", en: "Germany", ca: "Alemanya" },
};

export function localizeCountry(country: string, locale: Locale) {
  return COUNTRIES[country]?.[locale] ?? country;
}

export function galleryCity(locale: Locale) {
  return pick(locale, "Barcelona, España", "Barcelona, Spain", "Barcelona, Espanya");
}
