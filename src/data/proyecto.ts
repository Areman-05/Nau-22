export type Achievement = {
  title: string;
  titleEn: string;
  paragraphs: string[];
  paragraphsEn: string[];
};

export type Milestone = {
  year: string;
  items: Achievement[];
};

export const manifestoLead = {
  es: "No somos un cubo blanco flotante. Somos una nave en el 22@ que decide qué se mira y cómo se mira.",
  en: "We are not a floating white cube. We are a warehouse in 22@ that decides what is looked at and how.",
};

export const manifestoBody = {
  es: [
    "Nau 22 ocupa una antigua estructura industrial en Carrer de Pujades, en el corazón del distrito 22@. El edificio no se rehabilitó para parecer una galería de Eixample: se dejó como nave. Pilares a la vista, forjado alto, eco que no se ahoga con paneles acústicos. Esa decisión no es estética de escaparate; es el marco desde el que se programa. Quien entra entiende, antes de leer una cartela, que el espacio tiene historia productiva y que la exposición se monta contra esa memoria, no a pesar de ella.",
    "El proyecto nace de una fricción deliberada: entre la ruina industrial del Poblenou y la sala limpia que el arte contemporáneo suele exigir. No resolvemos esa tensión con pintura blanca y suelo de resina brillante. La mantenemos. El hormigón manchado, la luz que entra desigual por los lucernarios, el ruido lejano de grúas del 22@ — todo eso forma parte de la lectura. La obra no se aísla del barrio; el barrio entra en la sala como condición de visión.",
    "La programación es exposición, no comercio. No hay e-commerce, no hay carrito, no hay feria permanente en la puerta. Representamos prácticas contemporáneas — pintura de gesto urbano, instalación, archivo, sonido ligado al territorio — con rigor curatorial y con un ritmo que no se pliega al calendario de ferias internacionales. Cuando salimos al circuito, lo hacemos por invitación y con una propuesta concreta, no con un stand que hay que renovar cada año.",
    "Tampoco vendemos un equipo. No hay página de “quiénes somos” con retratos y cargos. El proyecto se explica por el edificio, por el programa y por los artistas que pasan por Pujades 102. Quien quiere entender Nau 22, entra, mira y pregunta por obra. Horarios, metro y correo están en Proyecto, en Visitar: datos de uso, no marketing de visita.",
    "En ocho años hemos pasado de conversaciones en naves a medias a un espacio de referencia del 22@, con préstamos a instituciones, un journal público, un archivo de sala y una temporada que se sostiene sin ampliar el ruido. La historia del edificio y del programa — fechas, logros, decisiones — está en Proyecto; este texto es solo la actitud con la que se mira.",
  ],
  en: [
    "Nau 22 occupies a former industrial structure on Carrer de Pujades, in the heart of the 22@ district. The building was not refurbished to look like an Eixample gallery: it was left as a warehouse. Pillars exposed, high floor plate, an echo that is not smothered with acoustic panels. That decision is not shop-window aesthetics; it is the frame from which we programme. Whoever enters understands, before reading a caption, that the space has a productive history and that the exhibition is installed against that memory, not despite it.",
    "The project is born of a deliberate friction: between Poblenou’s industrial ruin and the clean room that contemporary art usually demands. We do not resolve that tension with white paint and a glossy resin floor. We keep it. Stained concrete, uneven light through the skylights, the distant noise of 22@ cranes — all of that is part of the reading. The work is not isolated from the neighbourhood; the neighbourhood enters the room as a condition of seeing.",
    "The programme is exhibition, not commerce. There is no e-commerce, no cart, no permanent fair at the door. We represent contemporary practices — urban-gesture painting, installation, archive, sound tied to territory — with curatorial rigour and a pace that does not fold to the international fair calendar. When we enter the circuit, we do so by invitation and with a concrete proposal, not with a booth that must be renewed every year.",
    "Nor do we sell a team. There is no “about us” page with portraits and job titles. The project explains itself through the building, the programme and the artists who pass through Pujades 102. Whoever wants to understand Nau 22 comes in, looks, and asks about work. Hours, metro and mail sit under Project, in Visit: use data, not visit marketing.",
    "In eight years we have gone from conversations in half-empty warehouses to a reference space in 22@, with institutional loans, a public journal, a floor archive and a season that holds without adding noise. The story of the building and programme — dates, achievements, decisions — lives under Project; this text is only the attitude with which we look.",
  ],
};

export const historyIntro = {
  title: { es: "De la idea a la nave", en: "From idea to warehouse" },
  paragraphs: {
    es: [
      "Esta cronología se lee al revés a propósito: de 2026 hacia 2018. Empezamos por lo que la galería es hoy — préstamos, temporada, invitaciones al circuito — y bajamos hasta las conversaciones en naves vacías donde aún no había nombre ni contrato. No es nostalgia: es método. Entender Nau 22 exige ver qué se ha consolidado y, después, de dónde salió la obstinación de no convertir la nave en tienda.",
      "Tampoco es una lista de premios hinchada. Cada bloque resume decisiones, obras, publicaciones y aperturas que dejaron huella en el edificio o en el programa. Algunos logros son públicos y visibles (una temporada, una feria, un ensayo). Otros son internos pero decisivos: un protocolo de préstamo, la negativa al e-commerce, el criterio escrito del roster. Sin esos, la sala no sostendría lo que se ve ahora.",
      "El hilo es siempre el mismo: Pujades 102, el 22@, y una idea de exposición que antepone el espacio al circuito. Lo demás — artistas, colectivas, journal, archivo — crece alrededor de esa idea, no al revés.",
    ],
    en: [
      "This timeline is read backwards on purpose: from 2026 toward 2018. We start with what the gallery is today — loans, season, invitations into the circuit — and move down to conversations in empty warehouses where there was not yet a name or a lease. It is not nostalgia: it is method. Understanding Nau 22 means seeing what has been consolidated and, then, where the stubborn refusal to turn the warehouse into a shop came from.",
      "Nor is it an inflated prize list. Each block summarises decisions, works, publications and openings that left a mark on the building or the programme. Some achievements are public and visible (a season, a fair, an essay). Others are internal but decisive: a loan protocol, the refusal of e-commerce, the written roster criterion. Without those, the room would not sustain what is seen now.",
      "The thread is always the same: Pujades 102, 22@, and an idea of exhibition that puts space before circuit. Everything else — artists, group shows, journal, archive — grows around that idea, not the other way around.",
    ],
  },
};

/** Actual → antiguo. Longitudes mixtas a propósito (1 / 2 / 3 párrafos). */
export const milestones: Milestone[] = [];
