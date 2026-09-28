export type Locale = "es" | "en";

const dict = {
  nav: {
    exhibitions: { es: "Exposiciones", en: "Exhibitions" },
    works: { es: "Obras", en: "Works" },
    artists: { es: "Artistas", en: "Artists" },
    visit: { es: "Visitar", en: "Visit" },
    space: { es: "La Nau", en: "The Space" },
    cart: { es: "Carrito", en: "Cart" },
  },
  cta: {
    viewExhibition: { es: "Ver exposición", en: "View exhibition" },
    availableWorks: { es: "Obras disponibles", en: "Available works" },
    addToCart: { es: "Añadir al carrito", en: "Add to cart" },
    bookPrivate: { es: "Citar visita privada", en: "Book private viewing" },
    bookExhibition: { es: "Reservar visita a la exposición", en: "Book exhibition visit" },
    seeInRoom: { es: "Ver en sala (cita)", en: "See in room (appointment)" },
    inquire: { es: "Consultar", en: "Inquire" },
    checkout: { es: "Finalizar compra", en: "Checkout" },
    continueShopping: { es: "Seguir mirando", en: "Continue browsing" },
    confirmVisit: { es: "Confirmar cita", en: "Confirm appointment" },
  },
  labels: {
    edition: { es: "Edición", en: "Edition" },
    unique: { es: "Única", en: "Unique" },
    priceOnRequest: { es: "Consultar / cita", en: "Inquire / visit" },
    nowInRoom: { es: "Ahora en sala", en: "Now on view" },
    available: { es: "Disponibles", en: "Available" },
    current: { es: "Actual", en: "Current" },
    upcoming: { es: "Próxima", en: "Upcoming" },
    past: { es: "Pasadas", en: "Past" },
    pickup: { es: "Recogida en galería", en: "Gallery pickup" },
    shipping: { es: "Envío asegurado", en: "Insured shipping" },
  },
} as const;

export type DictKey = keyof typeof dict;

export function t(
  section: keyof typeof dict,
  key: string,
  locale: Locale,
): string {
  const entry = (dict[section] as Record<string, { es: string; en: string }>)[key];
  if (!entry) return key;
  return entry[locale];
}

export { dict };
