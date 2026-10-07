import type { ArchiveWork, Artist } from "./types";

const ARCHIVE_IMAGES = [
  "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80",
];

const DIMS = [
  "120 × 100 cm",
  "Dimensiones variables",
  "40 × 40 × 40 cm",
  "200 × 150 × 50 cm",
  "180 × 140 cm",
];

function pad(artist: Artist, items: Omit<ArchiveWork, "image" | "dimensions">[]): ArchiveWork[] {
  return items.map((item, i) => ({
    ...item,
    dimensions: DIMS[i % DIMS.length],
    image: artist.images[i]?.src ?? ARCHIVE_IMAGES[i % ARCHIVE_IMAGES.length],
  }));
}

const TITLES: Record<string, Omit<ArchiveWork, "image" | "dimensions">[]> = {
  "alma-ruiz": [
    { title: "Sedimento 04", year: "2025", medium: "Pigmento mineral sobre lino" },
    { title: "Capa ocre", year: "2026", medium: "Óleo y arena" },
    { title: "Corte geológico", year: "2024", medium: "Pintura sobre panel" },
    { title: "Fachada compacta", year: "2026", medium: "Pigmento sobre lino" },
    { title: "Cal y óxido", year: "2023", medium: "Acrílico sobre lienzo" },
  ],
  "carmen-soto": [
    { title: "Umbral nocturno", year: "2025", medium: "Óleo sobre lino" },
    { title: "Luz de lado", year: "2026", medium: "Pintura y fotografía" },
    { title: "Portal Serie A", year: "2024", medium: "Acrílico sobre algodón" },
  ],
  "colectivo-22": [
    { title: "Frecuencia de demolición", year: "2025", medium: "Pintura e instalación" },
    { title: "Archivo 22@", year: "2026", medium: "Acrílico y audio" },
    { title: "Baja altura", year: "2024", medium: "Pigmento sobre lino" },
  ],
  "elena-rostova": [
    { title: "Autorretrato biométrico 01", year: "2026", medium: "Acrílico sobre lino" },
    { title: "Delegación", year: "2025", medium: "Pintura generada" },
    { title: "Firma ausente", year: "2026", medium: "Lino y datos" },
    { title: "Pulso", year: "2024", medium: "Acrílico robótico" },
  ],
  "ismail-qasim": [
    { title: "Mapa inútil I", year: "2025", medium: "Tinta y acrílico" },
    { title: "Tánger / Poblenou", year: "2026", medium: "Pintura y recorte" },
    { title: "Geografía falsa", year: "2024", medium: "Óleo sobre papel" },
  ],
  "julien-dubois": [
    { title: "Cajón abierto", year: "2025", medium: "Collage sobre lienzo" },
    { title: "Inventario", year: "2026", medium: "Pintura y objeto" },
    { title: "Negativo de mercadillo", year: "2024", medium: "Transferencia" },
    { title: "Catálogo industrial", year: "2026", medium: "Collage sobre madera" },
    { title: "Pieza de cajón", year: "2023", medium: "Acrílico" },
  ],
  "kaito-tanaka": [
    { title: "Estudio sobre volumen I", year: "2025", medium: "Óleo sobre lienzo" },
    { title: "Sin título (Desplazamiento)", year: "2026", medium: "Pintura e instalación" },
    { title: "Topografía digital", year: "2026", medium: "Acrílico y resina" },
    { title: "Fricción material", year: "2024", medium: "Pigmento sobre panel" },
  ],
  "leonid-belyaev": [
    { title: "Molde III", year: "2025", medium: "Pintura y cerámica" },
    { title: "Crisol", year: "2026", medium: "Óleo y metal" },
  ],
  "luna-aris": [
    { title: "Clima rojo", year: "2025", medium: "Acrílico y textil" },
    { title: "Paño suspendido", year: "2026", medium: "Pintura sobre tela" },
    { title: "Temperatura", year: "2024", medium: "Óleo" },
    { title: "Debajo de la obra", year: "2026", medium: "Acrílico" },
    { title: "Rojo óxido", year: "2023", medium: "Pigmento sobre lino" },
  ],
  "marc-vives": [
    { title: "Muro de vapor", year: "2026", medium: "Pintura y luz" },
    { title: "Luz sólida", year: "2025", medium: "Acrílico sobre lienzo" },
    { title: "Fotones", year: "2024", medium: "Óleo" },
  ],
  "marina-silva": [
    { title: "Cuerpo 1:1", year: "2025", medium: "Óleo sobre lienzo" },
    { title: "Doble en movimiento", year: "2026", medium: "Pintura y vídeo" },
    { title: "Camerino", year: "2024", medium: "Acrílico" },
    { title: "Piel grabada", year: "2026", medium: "Óleo" },
  ],
  "oskar-lund": [
    { title: "Grano como clima", year: "2025", medium: "Óleo sobre lino" },
    { title: "Muro", year: "2026", medium: "Pintura y copia" },
  ],
  "sara-lund": [
    { title: "Urdimbre de cobre", year: "2025", medium: "Acrílico y hilo" },
    { title: "Tejidos de la memoria", year: "2026", medium: "Pintura sobre tela" },
    { title: "Telar / servidor", year: "2024", medium: "Óleo" },
    { title: "Transmisión", year: "2026", medium: "Acrílico" },
    { title: "Cobre 03", year: "2023", medium: "Pigmento sobre lino" },
  ],
  "studio-manta": [
    { title: "Banco", year: "2025", medium: "Pintura y dispositivo" },
    { title: "Mampara", year: "2026", medium: "Acrílico sobre panel" },
    { title: "Cuando te sientas", year: "2024", medium: "Óleo" },
  ],
  "taro-yoko": [
    { title: "Una línea", year: "2025", medium: "Tinta y acrílico" },
    { title: "Un corte", year: "2024", medium: "Pintura sobre papel" },
  ],
  "vera-koch": [
    { title: "Error de placa", year: "2025", medium: "Acrílico y serigrafía" },
    { title: "Desajuste", year: "2026", medium: "Pintura" },
    { title: "Registro", year: "2024", medium: "Óleo" },
    { title: "Accidente controlado", year: "2026", medium: "Acrílico" },
  ],
  "xavier-sole": [
    { title: "22@ noche", year: "2025", medium: "Acrílico sobre panel" },
    { title: "Solar vacío", year: "2026", medium: "Óleo" },
    { title: "Cruce", year: "2024", medium: "Pintura" },
    { title: "Después del cierre", year: "2026", medium: "Panel" },
    { title: "Pujades 102", year: "2023", medium: "Acrílico" },
  ],
};

export function getArchiveTitleSlugs(): string[] {
  return Object.keys(TITLES);
}

export function getArchiveWorks(artist: Artist): ArchiveWork[] {
  const titles = TITLES[artist.slug];
  if (titles) return pad(artist, titles);
  return artist.images.map((img, i) => ({
    title: `${artist.name} — ${String(i + 1).padStart(2, "0")}`,
    year: String(artist.birthYear),
    medium: artist.practice,
    dimensions: DIMS[i % DIMS.length],
    image: img.src,
  }));
}

export function hasCuratedArchive(slug: string): boolean {
  return Boolean(TITLES[slug]?.length);
}
