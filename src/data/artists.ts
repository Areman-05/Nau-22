import type { Artist } from "./types";

export const artists: Artist[] = [
  {
    slug: "marina-soler",
    name: "Marina Soler",
    birthYear: 1989,
    basedIn: "Barcelona",
    bio: "Marina Soler trabaja con pintura y pigmentos minerales recogidos en el litoral catalán. Su práctica examina la memoria industrial del Poblenou a través de superficies que oscilan entre lo geológico y lo arquitectónico.",
    bioEn:
      "Marina Soler works with painting and mineral pigments gathered along the Catalan coast. Her practice examines Poblenou’s industrial memory through surfaces that oscillate between the geological and the architectural.",
  },
  {
    slug: "joan-riera",
    name: "Joan Riera",
    birthYear: 1984,
    basedIn: "Barcelona / Marsella",
    bio: "Joan Riera desarrolla escultura a partir de restos de obra y estructuras metálicas reutilizadas. Sus piezas invitan a una lectura táctil del espacio postindustrial.",
    bioEn:
      "Joan Riera develops sculpture from construction remnants and reused metal structures. His pieces invite a tactile reading of post-industrial space.",
  },
  {
    slug: "aisha-benali",
    name: "Aisha Benali",
    birthYear: 1992,
    basedIn: "Barcelona",
    bio: "Fotógrafa y artista de imagen, Aisha Benali documenta umbrales urbanos — portales, naves, solares — con una atención casi ritual a la luz lateral.",
    bioEn:
      "Photographer and image-based artist Aisha Benali documents urban thresholds — doorways, warehouses, empty lots — with an almost ritual attention to side light.",
  },
  {
    slug: "teo-valles",
    name: "Teo Vallès",
    birthYear: 1990,
    basedIn: "Girona",
    bio: "Teo Vallès combina dibujo, transferencia y objetos encontrados. Su obra se sitúa entre el archivo personal y la crítica suave del consumo cultural.",
    bioEn:
      "Teo Vallès combines drawing, transfer techniques and found objects. His work sits between personal archive and a quiet critique of cultural consumption.",
  },
  {
    slug: "nora-kim",
    name: "Nora Kim",
    birthYear: 1995,
    basedIn: "Barcelona / Seúl",
    bio: "Nora Kim explora la instalación textil y el color como clima. Sus piezas suspendidas transforman la nave en una cámara de resonancia emocional.",
    bioEn:
      "Nora Kim explores textile installation and colour as climate. Her suspended pieces turn the warehouse into a chamber of emotional resonance.",
  },
  {
    slug: "pol-andreu",
    name: "Pol Andreu",
    birthYear: 1987,
    basedIn: "Barcelona",
    bio: "Pol Andreu pinta escenas nocturnas del 22@ donde la arquitectura tech y el vacío industrial conviven. Su paleta es seca, precisa, casi fotográfica.",
    bioEn:
      "Pol Andreu paints nocturnal scenes of 22@ where tech architecture and industrial emptiness coexist. His palette is dry, precise, almost photographic.",
  },
  {
    slug: "clara-montes",
    name: "Clara Montes",
    birthYear: 1991,
    basedIn: "València / Barcelona",
    bio: "Clara Montes produce ediciones y obras sobre papel que investigan la repetición, el error tipográfico y la materialidad de la impresión.",
    bioEn:
      "Clara Montes produces editions and works on paper that investigate repetition, typographic error and the materiality of print.",
  },
  {
    slug: "eliot-serra",
    name: "Eliot Serra",
    birthYear: 1986,
    basedIn: "Barcelona",
    bio: "Eliot Serra trabaja la escultura cerámica a gran escala. Sus volúmenes evocan moldes industriales y restos de producción textil.",
    bioEn:
      "Eliot Serra works large-scale ceramic sculpture. His volumes evoke industrial moulds and remnants of textile production.",
  },
];

export function getArtist(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}
