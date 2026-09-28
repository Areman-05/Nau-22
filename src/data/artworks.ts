import type { Artwork } from "./types";

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const artworks: Artwork[] = [
  {
    slug: "sediment-04",
    title: "Sediment 04",
    artistSlug: "marina-soler",
    year: 2025,
    medium: "painting",
    mediumLabel: "Óleo y pigmento mineral sobre lino",
    dimensions: "140 × 110 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "available",
    description:
      "Capa tras capa de pigmento ocre y gris hormigón. Sediment 04 retiene la memoria de una fachada derruida en Pere IV.",
    descriptionEn:
      "Layer upon layer of ochre and concrete-grey pigment. Sediment 04 holds the memory of a demolished façade on Pere IV.",
    provenance: "Adquirida directamente al artista. Certificado de autenticidad emitido por Nau 22.",
    images: [
      { src: u("photo-1541961017774-22349e4a1262"), alt: "Sediment 04 — vista frontal" },
      { src: u("photo-1577083552431-6e5fd01988d8"), alt: "Sediment 04 — detalle de superficie" },
      { src: u("photo-1518998053901-5348d3961a04"), alt: "Sediment 04 — instalada en sala" },
    ],
    exhibitionSlugs: ["materia-en-espera"],
    featured: true,
  },
  {
    slug: "sediment-study-ii",
    title: "Sediment Study II",
    artistSlug: "marina-soler",
    year: 2025,
    medium: "works-on-paper",
    mediumLabel: "Pigmento y grafito sobre papel Arches",
    dimensions: "42 × 30 cm",
    type: "edition",
    priceEur: 680,
    editionSize: 12,
    editionAvailable: 7,
    availability: "available",
    description:
      "Estudio de pigmentación vinculado a la serie Sediment. Cada ejemplar presenta variaciones mínimas de densidad.",
    descriptionEn:
      "Pigment study linked to the Sediment series. Each impression carries minimal density variations.",
    provenance: "Edición limitada de 12. Certificado numerado.",
    images: [
      { src: u("photo-1579783902614-a3fb3927b6a5"), alt: "Sediment Study II" },
      { src: u("photo-1513364776144-60967b0f800f"), alt: "Sediment Study II — detalle" },
    ],
    exhibitionSlugs: ["materia-en-espera"],
    featured: true,
  },
  {
    slug: "viga-07",
    title: "Viga 07",
    artistSlug: "joan-riera",
    year: 2024,
    medium: "sculpture",
    mediumLabel: "Acero recuperado y hormigón",
    dimensions: "180 × 45 × 40 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "available",
    description:
      "Una viga encontrada en una nave de Llull, reequilibrada y fundida con un bloque de hormigón vertido in situ.",
    descriptionEn:
      "A beam found in a warehouse on Llull, rebalanced and fused with a block of concrete poured in situ.",
    provenance: "Producción en residencia en Nau 22, 2024.",
    images: [
      { src: u("photo-1515405295579-ba7b45403062"), alt: "Viga 07" },
      { src: u("photo-1464983953574-0892a716854b"), alt: "Viga 07 — detalle" },
    ],
    exhibitionSlugs: ["materia-en-espera"],
    featured: true,
  },
  {
    slug: "umbral-nocturno",
    title: "Umbral nocturno",
    artistSlug: "aisha-benali",
    year: 2025,
    medium: "photography",
    mediumLabel: "Impresión pigmentada sobre Hahnemühle",
    dimensions: "80 × 100 cm",
    type: "edition",
    priceEur: 1200,
    editionSize: 5,
    editionAvailable: 3,
    availability: "available",
    description:
      "Portal de una antigua fábrica textil fotografiado al crepúsculo. La luz lateral convierte el umbral en un espacio de tránsito simbólico.",
    descriptionEn:
      "A former textile factory doorway photographed at dusk. Side light turns the threshold into a symbolic passage.",
    provenance: "Edición de 5 + 1 P.A. Firmada y numerada al dorso.",
    images: [
      { src: u("photo-1497366216548-37526070297c"), alt: "Umbral nocturno" },
      { src: u("photo-1486406146926-c627a92ad1ab"), alt: "Umbral nocturno — contexto urbano" },
    ],
    exhibitionSlugs: ["materia-en-espera", "luces-de-nave"],
    featured: true,
  },
  {
    slug: "archivo-disperso-3",
    title: "Archivo disperso #3",
    artistSlug: "teo-valles",
    year: 2024,
    medium: "mixed-media",
    mediumLabel: "Collage, transferencia y objeto encontrado",
    dimensions: "60 × 45 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "available",
    description:
      "Fragmentos de catálogos industriales y notas personales ensamblados en una composición que resiste la lectura lineal.",
    descriptionEn:
      "Fragments of industrial catalogues and personal notes assembled into a composition that resists linear reading.",
    provenance: "Colección del artista. Primera exhibición en Nau 22.",
    images: [
      { src: u("photo-1459908676235-d5f02a50184b"), alt: "Archivo disperso #3" },
      { src: u("photo-1460661419201-fd4cecdf8a8b"), alt: "Archivo disperso #3 — detalle" },
    ],
    exhibitionSlugs: ["archivo-abierto"],
  },
  {
    slug: "clima-rojo",
    title: "Clima rojo",
    artistSlug: "nora-kim",
    year: 2025,
    medium: "installation",
    mediumLabel: "Textil teñido y estructura de acero",
    dimensions: "Dimensiones variables",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "available",
    description:
      "Paños teñidos a mano suspendidos en la altura de la nau. El color actúa como atmósfera más que como superficie.",
    descriptionEn:
      "Hand-dyed cloths suspended in the height of the warehouse. Colour acts as atmosphere rather than surface.",
    provenance: "Instalación site-specific. Disponible para adquisición con reinstalación supervisada.",
    images: [
      { src: u("photo-1563089145-599997674d42"), alt: "Clima rojo" },
      { src: u("photo-1550684848-fac1c5b4e853"), alt: "Clima rojo — detalle textil" },
    ],
    exhibitionSlugs: ["materia-en-espera"],
    featured: true,
  },
  {
    slug: "22-noche",
    title: "22@ noche",
    artistSlug: "pol-andreu",
    year: 2025,
    medium: "painting",
    mediumLabel: "Acrílico sobre panel",
    dimensions: "100 × 70 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "available",
    description:
      "Una esquina del distrito tecnológico vista desde el vacío de un solar. Luces frías, asfalto, silencio.",
    descriptionEn:
      "A corner of the tech district seen from an empty lot. Cold lights, asphalt, silence.",
    provenance: "Directo del estudio del artista.",
    images: [
      { src: u("photo-1519502330808-aed53caa5dc0"), alt: "22@ noche" },
      { src: u("photo-1477959858617-67f85cf4f1df"), alt: "22@ noche — detalle" },
    ],
    exhibitionSlugs: ["luces-de-nave"],
  },
  {
    slug: "error-de-placa",
    title: "Error de placa",
    artistSlug: "clara-montes",
    year: 2025,
    medium: "works-on-paper",
    mediumLabel: "Serigrafía sobre papel",
    dimensions: "50 × 40 cm",
    type: "edition",
    priceEur: 420,
    editionSize: 20,
    editionAvailable: 14,
    availability: "available",
    description:
      "Serie tipográfica donde el error de registro se convierte en el motivo central de la composición.",
    descriptionEn:
      "Typographic series where registration error becomes the central motif of the composition.",
    provenance: "Edición de 20. Firmada y numerada.",
    images: [
      { src: u("photo-1515405295579-ba7b45403062", 1200), alt: "Error de placa" },
      { src: u("photo-1509631179647-0177331693ae"), alt: "Error de placa — detalle" },
    ],
    exhibitionSlugs: ["ediciones-nau"],
    featured: true,
  },
  {
    slug: "molde-iii",
    title: "Molde III",
    artistSlug: "eliot-serra",
    year: 2024,
    medium: "sculpture",
    mediumLabel: "Cerámica esmaltada",
    dimensions: "55 × 40 × 35 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "reserved",
    description:
      "Volumen cerámico inspirado en moldes de la industria textil del Poblenou. Esmalte mate color ceniza.",
    descriptionEn:
      "Ceramic volume inspired by moulds from Poblenou’s textile industry. Matte ash glaze.",
    provenance: "Reservada. Consultar disponibilidad.",
    images: [
      { src: u("photo-1610701596007-11502861dcfa"), alt: "Molde III" },
      { src: u("photo-1565193566173-7a0ee3dbe261"), alt: "Molde III — detalle" },
    ],
    exhibitionSlugs: ["archivo-abierto"],
  },
  {
    slug: "linea-de-costa",
    title: "Línea de costa",
    artistSlug: "marina-soler",
    year: 2023,
    medium: "painting",
    mediumLabel: "Óleo sobre lino",
    dimensions: "90 × 120 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "sold",
    description: "Obra temprana de la serie litoral. Vendida en 2024.",
    descriptionEn: "Early work from the coastal series. Sold in 2024.",
    provenance: "Colección privada, Barcelona.",
    images: [
      { src: u("photo-1549887534-1541e9326642"), alt: "Línea de costa" },
    ],
    exhibitionSlugs: ["archivo-abierto"],
  },
  {
    slug: "portal-serie-a",
    title: "Portal (Serie A)",
    artistSlug: "aisha-benali",
    year: 2024,
    medium: "photography",
    mediumLabel: "Impresión pigmentada",
    dimensions: "40 × 50 cm",
    type: "edition",
    priceEur: 480,
    editionSize: 15,
    editionAvailable: 9,
    availability: "available",
    description:
      "Primera edición de la serie Portal. Imagen íntima de un acceso lateral a naves del 22@.",
    descriptionEn:
      "First edition from the Portal series. Intimate image of a side entrance to 22@ warehouses.",
    provenance: "Edición de 15. Firmada.",
    images: [
      { src: u("photo-1486718448742-163732cd1544"), alt: "Portal Serie A" },
    ],
    exhibitionSlugs: ["luces-de-nave", "ediciones-nau"],
    featured: true,
  },
  {
    slug: "estructura-blanda",
    title: "Estructura blanda",
    artistSlug: "nora-kim",
    year: 2024,
    medium: "mixed-media",
    mediumLabel: "Textil y madera",
    dimensions: "120 × 80 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "available",
    description:
      "Pieza mural donde el textil se comporta como arquitectura blanda. Tonalidades óxido y crudo.",
    descriptionEn:
      "Wall piece where textile behaves as soft architecture. Oxide and raw tonalities.",
    provenance: "Directo del estudio.",
    images: [
      { src: u("photo-1558618666-fcd25c85f82e"), alt: "Estructura blanda" },
    ],
    exhibitionSlugs: ["archivo-abierto"],
  },
  {
    slug: "solar-vacío",
    title: "Solar vacío",
    artistSlug: "pol-andreu",
    year: 2024,
    medium: "painting",
    mediumLabel: "Óleo sobre lienzo",
    dimensions: "130 × 95 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "available",
    description:
      "Un solar entre grúas y fachadas nuevas. La pintura registra la pausa antes de la especulación.",
    descriptionEn:
      "An empty lot between cranes and new façades. The painting records the pause before speculation.",
    provenance: "Directo del artista.",
    images: [
      { src: u("photo-1449824913935-59a10b8d2000"), alt: "Solar vacío" },
    ],
    exhibitionSlugs: ["luces-de-nave"],
  },
  {
    slug: "nota-al-margen",
    title: "Nota al margen",
    artistSlug: "teo-valles",
    year: 2025,
    medium: "works-on-paper",
    mediumLabel: "Tinta y collage sobre papel",
    dimensions: "35 × 28 cm",
    type: "edition",
    priceEur: 350,
    editionSize: 25,
    editionAvailable: 18,
    availability: "available",
    description:
      "Edición de dibujos con anotaciones marginales tomadas de diarios de obra.",
    descriptionEn:
      "Edition of drawings with marginal notes taken from construction-site diaries.",
    provenance: "Edición de 25.",
    images: [
      { src: u("photo-1513364776144-60967b0f800f", 1000), alt: "Nota al margen" },
    ],
    exhibitionSlugs: ["ediciones-nau"],
    featured: true,
  },
  {
    slug: "pieza-de-anclaje",
    title: "Pieza de anclaje",
    artistSlug: "joan-riera",
    year: 2025,
    medium: "sculpture",
    mediumLabel: "Hierro y resina",
    dimensions: "70 × 50 × 30 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "available",
    description:
      "Anclaje industrial reinterpretado como objeto autónomo. Peso, equilibrio, oxidación controlada.",
    descriptionEn:
      "Industrial anchor reinterpreted as an autonomous object. Weight, balance, controlled oxidation.",
    provenance: "Producción 2025.",
    images: [
      { src: u("photo-1558618047-f4b511a6a0a3"), alt: "Pieza de anclaje" },
    ],
    exhibitionSlugs: ["materia-en-espera"],
  },
  {
    slug: "registro-tipografico",
    title: "Registro tipográfico",
    artistSlug: "clara-montes",
    year: 2024,
    medium: "works-on-paper",
    mediumLabel: "Litografía",
    dimensions: "60 × 45 cm",
    type: "edition",
    priceEur: 550,
    editionSize: 10,
    editionAvailable: 4,
    availability: "available",
    description:
      "Litografía basada en planchas de imprenta recuperadas de una antigua editorial en el Eixample.",
    descriptionEn:
      "Lithograph based on printing plates recovered from a former Eixample publishing house.",
    provenance: "Edición de 10.",
    images: [
      { src: u("photo-1452860606245-782097b45bb9"), alt: "Registro tipográfico" },
    ],
    exhibitionSlugs: ["ediciones-nau", "archivo-abierto"],
  },
  {
    slug: "camara-de-eco",
    title: "Cámara de eco",
    artistSlug: "nora-kim",
    year: 2025,
    medium: "installation",
    mediumLabel: "Textil y sonido",
    dimensions: "Dimensiones variables",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "available",
    description:
      "Instalación con capas textiles y una pista sonora de ambiente industrial grabada en la nau.",
    descriptionEn:
      "Installation with textile layers and an industrial ambient soundtrack recorded in the warehouse.",
    provenance: "Site-specific. Consultar condiciones de adquisición.",
    images: [
      { src: u("photo-1515405295579-ba7b45403062", 1400), alt: "Cámara de eco" },
    ],
    exhibitionSlugs: ["materia-en-espera"],
  },
  {
    slug: "fachada-fria",
    title: "Fachada fría",
    artistSlug: "pol-andreu",
    year: 2023,
    medium: "painting",
    mediumLabel: "Acrílico sobre lino",
    dimensions: "80 × 60 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "sold",
    description: "Vendida en feria Art Nou 2024.",
    descriptionEn: "Sold at Art Nou 2024.",
    provenance: "Colección privada.",
    images: [
      { src: u("photo-1487958449943-2429e8be8625"), alt: "Fachada fría" },
    ],
    exhibitionSlugs: ["luces-de-nave"],
  },
  {
    slug: "crisol",
    title: "Crisol",
    artistSlug: "eliot-serra",
    year: 2025,
    medium: "sculpture",
    mediumLabel: "Cerámica y metal",
    dimensions: "45 × 45 × 40 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "available",
    description:
      "Forma híbrida entre utensilio industrial y recipiente ritual. Esmalte negro mate.",
    descriptionEn:
      "Hybrid form between industrial utensil and ritual vessel. Matte black glaze.",
    provenance: "Directo del artista.",
    images: [
      { src: u("photo-1610701596007-11502861dcfa", 1200), alt: "Crisol" },
    ],
    exhibitionSlugs: [],
  },
  {
    slug: "transferencia-08",
    title: "Transferencia 08",
    artistSlug: "teo-valles",
    year: 2025,
    medium: "mixed-media",
    mediumLabel: "Transferencia sobre madera",
    dimensions: "50 × 40 cm",
    type: "edition",
    priceEur: 390,
    editionSize: 8,
    editionAvailable: 5,
    availability: "available",
    description:
      "Serie de transferencias a partir de negativos encontrados en mercadillos del Raval.",
    descriptionEn:
      "Series of transfers from negatives found at Raval flea markets.",
    provenance: "Edición de 8.",
    images: [
      { src: u("photo-1460661419201-fd4cecdf8a8b", 1100), alt: "Transferencia 08" },
    ],
    exhibitionSlugs: ["ediciones-nau"],
  },
  {
    slug: "horizonte-bajo",
    title: "Horizonte bajo",
    artistSlug: "marina-soler",
    year: 2025,
    medium: "painting",
    mediumLabel: "Óleo sobre panel",
    dimensions: "70 × 100 cm",
    type: "unique",
    priceEur: null,
    editionSize: null,
    editionAvailable: null,
    availability: "available",
    description:
      "Horizonte industrial visto desde el interior de la nau. Gris, óxido y un trazo de luz marina.",
    descriptionEn:
      "Industrial horizon seen from inside the warehouse. Grey, oxide and a stroke of sea light.",
    provenance: "Directo del artista.",
    images: [
      { src: u("photo-1506905925346-21bda4d32df4"), alt: "Horizonte bajo" },
    ],
    exhibitionSlugs: ["materia-en-espera"],
  },
  {
    slug: "luz-de-abril",
    title: "Luz de abril",
    artistSlug: "aisha-benali",
    year: 2025,
    medium: "photography",
    mediumLabel: "Impresión pigmentada",
    dimensions: "60 × 75 cm",
    type: "edition",
    priceEur: 750,
    editionSize: 7,
    editionAvailable: 6,
    availability: "available",
    description:
      "Luz de tarde entrando por los ventanales altos de Nau 22. Parte de la serie Luces de nave.",
    descriptionEn:
      "Afternoon light entering through Nau 22’s high windows. Part of the Luces de nave series.",
    provenance: "Edición de 7.",
    images: [
      { src: u("photo-1497366811353-6870744d04b2"), alt: "Luz de abril" },
    ],
    exhibitionSlugs: ["luces-de-nave", "ediciones-nau"],
    featured: true,
  },
];

export function getArtwork(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getArtworksByArtist(artistSlug: string): Artwork[] {
  return artworks.filter((a) => a.artistSlug === artistSlug);
}

export function getAvailableArtworks(): Artwork[] {
  return artworks.filter((a) => a.availability !== "sold");
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured && a.availability === "available");
}

export function canPurchase(artwork: Artwork): boolean {
  return (
    artwork.type === "edition" &&
    artwork.priceEur !== null &&
    artwork.availability === "available" &&
    (artwork.editionAvailable ?? 0) > 0
  );
}

export function requiresVisit(artwork: Artwork): boolean {
  return artwork.type === "unique" && artwork.availability === "available";
}
