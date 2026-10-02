import type { Collaborator } from "./types";
import { paint, works } from "./media";

export const collaborators: Collaborator[] = [
  {
    slug: "bau-design",
    name: "BAU Centre Universitari",
    country: "España",
    year: "1989",
    role: "Centro de diseño",
    roleEn: "Design school",
    bio: "BAU es escuela de diseño en Barcelona. Con Nau 22 comparte estudiantes en prácticas de montaje y una línea de investigación sobre espacio expositivo: cómo se mira cuando el cubo blanco está dentro de una nave.",
    bioEn:
      "BAU is a design school in Barcelona. With Nau 22 it shares exhibition-install interns and a research line on display space: how looking changes when the white cube sits inside a warehouse.",
    bio2:
      "La colaboración no es patrocinio de marca: son talleres puntuales, visitas de curso y algún dispositivo de sala diseñado en el máster.",
    bioEn2:
      "The collaboration is not brand sponsorship: it is occasional workshops, course visits and the odd room device designed in the master’s programme.",
    images: works("BAU Centre Universitari", [paint.stormW, paint.nov3]),
  },
  {
    slug: "hangar",
    name: "Hangar.org",
    country: "España",
    year: "1997",
    role: "Centro de producción",
    roleEn: "Production centre",
    bio: "Hangar, en Can Ricart, es el vecino de producción. Varios artistas del roster de Nau 22 han pasado por sus residencias. La relación es de préstamo de taller, no de programación conjunta permanente.",
    bioEn:
      "Hangar, in Can Ricart, is the production neighbour. Several artists on the Nau 22 roster have passed through its residencies. The relationship is studio loan, not a permanent joint programme.",
    bio2:
      "Cuando una pieza necesita maquinaria o tiempo de ensayo, el puente suele ser Hangar. Luego la obra vuelve a la nau para mostrarse en silencio.",
    bioEn2:
      "When a piece needs machinery or rehearsal time, the bridge is often Hangar. Then the work returns to the warehouse to be shown in silence.",
    images: works("Hangar.org", [paint.gray, paint.shadow]),
  },
  {
    slug: "julia-spinola",
    name: "Júlia Spínola",
    country: "España",
    year: "1979",
    role: "Curadora invitada",
    roleEn: "Guest curator",
    bio: "Júlia Spínola escribe y comisaría con una atención casi escultórica al texto de sala. Ha trabajado exposiciones independientes en Barcelona y Madrid. En Nau 22 entra por proyecto, no como curadora residente.",
    bioEn:
      "Júlia Spínola writes and curates with an almost sculptural attention to wall text. She has worked independent exhibitions in Barcelona and Madrid. At Nau 22 she comes in by project, not as a resident curator.",
    bio2:
      "Sus textos evitan la jerga. Prefiere una frase que se pueda leer de pie, en voz baja, delante de la obra.",
    bioEn2:
      "Her texts avoid jargon. She prefers a sentence that can be read standing, under the breath, in front of the work.",
    images: works("Júlia Spínola", [paint.ink, paint.untitled]),
  },
  {
    slug: "macba",
    name: "MACBA Programa Independiente",
    country: "España",
    year: "1995",
    role: "Programa público",
    roleEn: "Public programme",
    bio: "El vínculo con MACBA no es de sede satélite. Es un programa independiente de visitas y conversaciones que a veces cruza el Raval con Poblenou: grupos pequeños, sin mediación de feria.",
    bioEn:
      "The link with MACBA is not a satellite venue. It is an independent programme of visits and conversations that sometimes crosses from the Raval to Poblenou: small groups, without fair mediation.",
    bio2:
      "Una o dos veces al año un grupo del programa llega a la nau. No hay logo en la puerta. Hay una hora y un texto corto.",
    bioEn2:
      "Once or twice a year a group from the programme reaches the warehouse. There is no logo on the door. There is a time and a short text.",
    images: works("MACBA Programa Independiente", [paint.ovali, paint.grigia]),
  },
  {
    slug: "revista-texturas",
    name: "Revista Texturas",
    country: "España",
    year: "2010",
    role: "Publicación",
    roleEn: "Publication",
    bio: "Texturas es una revista de papel sobre prácticas contemporáneas en el Mediterráneo. Nau 22 ha aparecido en dos números: uno sobre naves y otro sobre sonido. La revista no es media partner; es archivo impreso.",
    bioEn:
      "Texturas is a paper magazine on contemporary practices in the Mediterranean. Nau 22 has appeared in two issues: one on warehouses and one on sound. The magazine is not a media partner; it is a printed archive.",
    bio2:
      "Los ejemplares se dejan en la mesa de la entrada durante las inauguraciones. No se venden en la galería.",
    bioEn2:
      "Copies are left on the entrance table during openings. They are not sold in the gallery.",
    images: works("Revista Texturas", [paint.codes, paint.field]),
  },
  {
    slug: "sonia-fernandez",
    name: "Sonia Fernández",
    country: "España",
    year: "1982",
    role: "Crítica de arte",
    roleEn: "Art critic",
    bio: "Sonia Fernández escribe crítica en prensa cultural y en textos independientes. Ha seguido el 22@ desde antes de que el distrito tuviera nombre de marca. Su interés es cómo se mira el arte cuando el barrio cambia de precio.",
    bioEn:
      "Sonia Fernández writes criticism in the cultural press and in independent texts. She has followed 22@ since before the district had a brand name. Her interest is how art is looked at when the neighbourhood changes price.",
    bio2:
      "De vez en cuando firma la hoja de sala. El tono es seco, sin adjetivos de feria.",
    bioEn2:
      "From time to time she signs the room sheet. The tone is dry, without fairground adjectives.",
    images: works("Sonia Fernández", [paint.bw2, paint.bw3]),
  },
  {
    slug: "studio-b",
    name: "Studio B Arquitectura",
    country: "España",
    year: "2018",
    role: "Arquitectura",
    roleEn: "Architecture",
    bio: "Studio B interviene lo mínimo en la nau: luz, suelo, un banco. Fundado en 2018 en Poblenou, entiende la galería como una habitación más del edificio industrial, no como un showroom.",
    bioEn:
      "Studio B intervenes as little as possible in the warehouse: light, floor, a bench. Founded in 2018 in Poblenou, it understands the gallery as another room in the industrial building, not as a showroom.",
    bio2:
      "El criterio es no tapar el hormigón. Si hay que pintar, se pinta un paño, no la nave.",
    bioEn2:
      "The rule is not to cover the concrete. If something must be painted, a bay is painted, not the warehouse.",
    images: works("Studio B Arquitectura", [paint.composit, paint.linee]),
  },
].sort((a, b) => a.name.localeCompare(b.name, "es"));

export function getCollaborator(slug: string): Collaborator | undefined {
  return collaborators.find((c) => c.slug === slug);
}
