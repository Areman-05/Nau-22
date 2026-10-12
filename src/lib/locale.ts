export type Locale = "es" | "en" | "ca";

export const LOCALES: Locale[] = ["es", "en", "ca"];

export function pick(locale: Locale, es: string, en: string, ca: string): string {
  if (locale === "en") return en;
  if (locale === "ca") return ca;
  return es;
}

export function pickList(locale: Locale, es: string[], en: string[], ca: string[]): string[] {
  if (locale === "en") return en;
  if (locale === "ca") return ca;
  return es;
}
