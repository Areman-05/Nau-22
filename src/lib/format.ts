export function formatPrice(eur: number, locale: "es" | "en" = "es"): string {
  return new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(eur);
}

export function formatDateRange(
  start: string,
  end: string,
  locale: "es" | "en" = "es",
): string {
  const opts: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const loc = locale === "es" ? "es-ES" : "en-GB";
  const s = new Date(start + "T12:00:00");
  const e = new Date(end + "T12:00:00");
  return `${s.toLocaleDateString(loc, opts)} — ${e.toLocaleDateString(loc, opts)}`;
}

export function availabilityLabel(
  availability: "available" | "reserved" | "sold",
  locale: "es" | "en" = "es",
): string {
  const map = {
    available: { es: "Disponible", en: "Available" },
    reserved: { es: "Reservada", en: "Reserved" },
    sold: { es: "Vendida", en: "Sold" },
  };
  return map[availability][locale];
}
