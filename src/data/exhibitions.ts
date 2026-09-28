import type { Exhibition } from "./types";

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80`;

export const exhibitions: Exhibition[] = [
  {
    slug: "materia-en-espera",
    title: "Materia en espera",
    status: "current",
    startDate: "2026-09-12",
    endDate: "2026-11-15",
    artistSlugs: [
      "marina-soler",
      "joan-riera",
      "nora-kim",
      "aisha-benali",
    ],
    artworkSlugs: [
      "sediment-04",
      "sediment-study-ii",
      "viga-07",
      "umbral-nocturno",
      "clima-rojo",
      "pieza-de-anclaje",
      "camara-de-eco",
      "horizonte-bajo",
    ],
    curatorialText:
      "Materia en espera reúne prácticas que trabajan con restos, pigmentos y estructuras del Poblenou industrial. La exposición propone la nau como cámara de resonancia: un espacio donde el material no concluido —la viga, el textil, el umbral— adquiere presencia coleccionable sin perder su condición de proceso.",
    curatorialTextEn:
      "Materia en espera brings together practices that work with remnants, pigments and structures from industrial Poblenou. The exhibition proposes the warehouse as a resonance chamber: a space where unfinished material —beam, textile, threshold— gains collectible presence without losing its process condition.",
    heroImage: {
      src: u("photo-1518998053901-5348d3961a04"),
      alt: "Vista de instalación — Materia en espera",
    },
  },
  {
    slug: "ediciones-nau",
    title: "Ediciones Nau",
    status: "upcoming",
    startDate: "2026-11-28",
    endDate: "2027-01-18",
    artistSlugs: ["clara-montes", "teo-valles", "aisha-benali", "marina-soler"],
    artworkSlugs: [
      "error-de-placa",
      "nota-al-margen",
      "portal-serie-a",
      "registro-tipografico",
      "transferencia-08",
      "luz-de-abril",
      "sediment-study-ii",
    ],
    curatorialText:
      "Una selección de ediciones limitadas pensada para coleccionistas que buscan acceso a la escena de Nau 22 con precios transparentes. Tipografía, fotografía y obra sobre papel.",
    curatorialTextEn:
      "A selection of limited editions for collectors seeking access to the Nau 22 scene with transparent pricing. Typography, photography and works on paper.",
    heroImage: {
      src: u("photo-1452860606245-782097b45bb9"),
      alt: "Ediciones Nau — vista previa",
    },
  },
  {
    slug: "luces-de-nave",
    title: "Luces de nave",
    status: "past",
    startDate: "2026-05-08",
    endDate: "2026-07-20",
    artistSlugs: ["aisha-benali", "pol-andreu"],
    artworkSlugs: [
      "umbral-nocturno",
      "22-noche",
      "portal-serie-a",
      "solar-vacío",
      "fachada-fria",
      "luz-de-abril",
    ],
    curatorialText:
      "Diálogo entre fotografía y pintura nocturna del 22@. La luz artificial, el vacío y la fachada como motivos de una ciudad en transición.",
    curatorialTextEn:
      "A dialogue between photography and nocturnal painting of 22@. Artificial light, emptiness and façade as motifs of a city in transition.",
    heroImage: {
      src: u("photo-1497366216548-37526070297c"),
      alt: "Luces de nave — instalación",
    },
  },
  {
    slug: "archivo-abierto",
    title: "Archivo abierto",
    status: "past",
    startDate: "2026-01-16",
    endDate: "2026-03-29",
    artistSlugs: ["teo-valles", "eliot-serra", "nora-kim", "marina-soler"],
    artworkSlugs: [
      "archivo-disperso-3",
      "molde-iii",
      "estructura-blanda",
      "linea-de-costa",
      "registro-tipografico",
    ],
    curatorialText:
      "Una muestra que trató el archivo no como depósito cerrado sino como material vivo: moldes, collages y pinturas en conversación.",
    curatorialTextEn:
      "A show that treated the archive not as a closed deposit but as living material: moulds, collages and paintings in conversation.",
    heroImage: {
      src: u("photo-1460661419201-fd4cecdf8a8b"),
      alt: "Archivo abierto — instalación",
    },
  },
];

export function getExhibition(slug: string): Exhibition | undefined {
  return exhibitions.find((e) => e.slug === slug);
}

export function getCurrentExhibition(): Exhibition | undefined {
  return exhibitions.find((e) => e.status === "current");
}

export function getExhibitionsByStatus(status: Exhibition["status"]): Exhibition[] {
  return exhibitions.filter((e) => e.status === status);
}
