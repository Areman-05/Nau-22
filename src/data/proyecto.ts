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
export const milestones: Milestone[] = [
{
    year: "2026",
    items: [
      {
        title: "Invitación Art Basel Statements 2027",
        titleEn: "Art Basel Statements 2027 invitation",
        paragraphs: [
          "En primavera se confirma la invitación al sector Statements de Art Basel 2027 con un solo project. No se trata de un stand comercial permanente ni de una presencia “porque toca”: es una propuesta curada desde Pujades 102, pensada a escala de sala y con un artista del roster cuyo trabajo resiste el ruido de feria sin diluirse.",
          "La decisión interna fue larga. Nau 22 había rechazado antes stands anuales fijos; aceptar Statements implica aceptar un marco internacional sin renunciar al criterio de la nave. El montaje se ensayará primero en Barcelona: si no funciona contra el hormigón de Pujades, no viaja.",
          "Para el proyecto, el logro no es “estar en Basilea”. Es demostrar que una galería del 22@ puede entrar en el circuito por invitación, con una sola idea fuerte, y volver a la nave sin haber convertido el programa en escaparate.",
        ],
        paragraphsEn: [
          "In spring the invitation to Art Basel 2027 Statements is confirmed with a solo project. It is not a permanent commercial booth or a presence “because it is time”: it is a proposal curated from Pujades 102, thought at room scale, with a roster artist whose work can withstand fair noise without dissolving.",
          "The internal decision took time. Nau 22 had previously refused fixed annual booths; accepting Statements means accepting an international frame without giving up the warehouse criterion. The install will be rehearsed first in Barcelona: if it does not work against Pujades concrete, it does not travel.",
          "For the project, the achievement is not “being in Basel”. It is proving that a 22@ gallery can enter the circuit by invitation, with one strong idea, and return to the warehouse without having turned the programme into a shop window.",
        ],
      },
      {
        title: "Temporada en sala",
        titleEn: "Floor season",
        paragraphs: [
          "Individuales y una colectiva de distrito; entrada libre; consulta de obra por correo. El patio solo se activa si la instalación lo pide.",
        ],
        paragraphsEn: [
          "Solos and one district group show; free entry; work enquiries by mail. The yard activates only if the installation asks for it.",
        ],
      },
      {
        title: "Préstamos a instituciones",
        titleEn: "Institutional loans",
        paragraphs: [
          "Tres piezas del archivo salen en préstamo largo: una a un museo universitario en Barcelona y dos a un centro de arte en el norte de Europa. No son ventas disfrazadas: son contratos, crating y conservación negociados desde Pujades.",
          "El protocolo de 2023 se pone a prueba a escala real. Por primera vez la galería gestiona transporte internacional sin intermediario de feria; el artista firma el estado de la obra al salir y al volver.",
        ],
        paragraphsEn: [
          "Three archive works leave on long loan: one to a university museum in Barcelona and two to an art centre in northern Europe. Not sales in disguise: contracts, crating and conservation negotiated from Pujades.",
          "The 2023 protocol is tested at real scale. For the first time the gallery manages international transport without a fair intermediary; the artist signs the condition report on departure and return.",
        ],
      },
    ],
  },
{
    year: "2025",
    items: [
      {
        title: "Temporada densa sin ampliar equipo",
        titleEn: "Dense season, same floor team",
        paragraphs: [
          "El programa crece en exigencia, no en headcount. Menos inauguraciones ruidosas, más tiempo de montaje, textos de sala más largos. Ampliar personal habría forzado un modelo de galería de calle; Nau 22 elige densificar contenido y proteger el silencio del edificio entre exposiciones.",
          "Al cierre, la agenda de visitas profesionales supera cualquier temporada anterior. El barrio sigue entrando en horario público; el circuito llega sin convertir la nave en showroom.",
        ],
        paragraphsEn: [
          "The programme grows in demand, not headcount. Fewer noisy openings, more install time, longer wall texts. Expanding staff would have forced a street-gallery model; Nau 22 densifies content and protects the building’s silence between shows.",
          "By year end the professional visit diary surpasses any previous season. The neighbourhood still enters in public hours; the circuit arrives without turning the warehouse into a showroom.",
        ],
      },
      {
        title: "Cierre de series históricas",
        titleEn: "Closing historical series",
        paragraphs: [
          "Se cierran dos series largas del roster — pintura mineral e instalación textil — con una exposición de balance, no con una retirada. Liberar muro y patio para lo que venía después.",
        ],
        paragraphsEn: [
          "Two long roster series close — mineral painting and textile installation — with a balance show, not a withdrawal. Freeing wall and yard for what came next.",
        ],
      },
      {
        title: "Journal como archivo vivo",
        titleEn: "Journal as living archive",
        paragraphs: [
          "El Journal supera las veinte entradas públicas y deja de parecer un blog de galería. Se publica con la misma seriedad que un texto de sala: notas de montaje, ensayos cortos sobre el 22@, crónicas de préstamo, conversaciones sin formato promoción.",
          "No hay lógica de oferta ni CTA de compra. Quien lo lee entiende el criterio aunque no haya pisado Pujades. En 2025 ya se cita en textos universitarios y en dossiers de préstamo: deja de ser accesorio y pasa a ser prueba escrita del proyecto.",
          "Esa densidad convierte la web en extensión del edificio. El rastro público del programa ya no depende solo del rumor de inauguraciones.",
        ],
        paragraphsEn: [
          "The Journal passes twenty public entries and stops looking like a gallery blog. It publishes with the same seriousness as a wall text: install notes, short essays on 22@, loan chronicles, conversations without promo format.",
          "No sales logic, no buy CTA. Whoever reads it understands the criterion without having set foot in Pujades. In 2025 it is already cited in university texts and loan dossiers: it stops being accessory and becomes written proof of the project.",
          "That density turns the site into an extension of the building. The programme’s public trace no longer depends only on opening-night rumour.",
        ],
      },
    ],
  },
{
    year: "2024",
    items: [
      {
        title: "Primera feria europea por invitación",
        titleEn: "First European fair by invitation",
        paragraphs: [
          "Primera presencia en feria europea bajo invitación: pocas piezas, mucho aire, el mismo criterio que en Pujades. No se firma stand anual; se acepta una vez y se evalúa después.",
          "Tipografía de cartela idéntica a la de la nave, sin logo hinchado ni luz de joyería. El retorno a Barcelona confirma la regla: el circuito sirve si la nave sigue siendo el centro. Si la feria obliga a cambiar el programa, no se repite.",
          "Varios comisarios que conocían Nau 22 solo de oídas entran ahí por primera vez. La feria funciona como puerta, no como destino.",
        ],
        paragraphsEn: [
          "First presence at a European fair by invitation: few pieces, much air, the same criterion as in Pujades. No annual booth; accepted once and evaluated after.",
          "Caption typography identical to the warehouse, no swollen logo or jewellery lighting. The return to Barcelona confirms the rule: the circuit serves if the warehouse remains the centre. If the fair forces a programme change, it is not repeated.",
          "Several curators who knew Nau 22 only by hearsay enter there for the first time. The fair works as a door, not a destination.",
        ],
      },
      {
        title: "Residencia Besòs",
        titleEn: "Besòs residency",
        paragraphs: [
          "Tres semanas en horno compartido del Besòs; las piezas vuelven a ras de suelo, sin peana, a la sombra del patio.",
        ],
        paragraphsEn: [
          "Three weeks in a shared kiln in Besòs; the pieces return at floor level, without plinths, in the yard’s shadow.",
        ],
      },
      {
        title: "Ensayo textil del Poblenou",
        titleEn: "Poblenou textile essay",
        paragraphs: [
          "Primer ensayo largo de la galería: telares, naves, cierre industrial y su eco en la programación actual — hilo, cobre, fibra. Se edita en pliego corto para sala y en versión ampliada para el Journal.",
          "No es catálogo de venta: es herramienta de lectura para visitantes e instituciones. Con él, Nau 22 asume voz propia más allá de la cartela.",
        ],
        paragraphsEn: [
          "The gallery’s first long essay: looms, warehouses, industrial closure and their echo in the current programme — thread, copper, fibre. Edited as a short floor booklet and an expanded Journal version.",
          "Not a sales catalogue: a reading tool for visitors and institutions. With it, Nau 22 assumes a voice beyond the caption.",
        ],
      },
      {
        title: "Archivo de sala +80",
        titleEn: "Floor archive 80+",
        paragraphs: [
          "Más de ochenta fichas documentadas en Pujades: foto, medidas, materiales, historial, estado. El visitante no ve el archivo; ve cartelas precisas y respuestas rápidas a instituciones.",
        ],
        paragraphsEn: [
          "More than eighty records documented at Pujades: photo, measurements, materials, history, condition. The visitor does not see the archive; they see precise captions and fast answers to institutions.",
        ],
      },
    ],
  },
{
    year: "2023",
    items: [
      {
        title: "Cuatro individuales, dos colectivas",
        titleEn: "Four solos, two group shows",
        paragraphs: [
          "Primer año con ritmo estable: cuatro individuales y dos colectivas sin cancelaciones. Nau 22 deja de leerse como pop-up y pasa a citarse como espacio de referencia del 22@.",
          "Las colectivas no son relleno — sonido y demolición; pintura y cartografía —. El público local empieza a volver con el ritmo de la temporada, no solo el día de inauguración.",
        ],
        paragraphsEn: [
          "First year with a steady rhythm: four solos and two group shows without cancellations. Nau 22 stops reading as a pop-up and starts being cited as a 22@ reference space.",
          "Group shows are not filler — sound and demolition; painting and cartography —. Local audiences begin returning with the season’s rhythm, not only on opening day.",
        ],
      },
      {
        title: "Protocolo de préstamo",
        titleEn: "Loan protocol",
        paragraphs: [
          "Plantillas de contrato, crating, luz, humedad, plazos. Protege al artista y evita que la galería se convierta en almacén ajeno.",
        ],
        paragraphsEn: [
          "Contract templates, crating, light, humidity, deadlines. Protects the artist and keeps the gallery from becoming someone else’s storeroom.",
        ],
      },
      {
        title: "Entrada en colecciones",
        titleEn: "Collection acquisitions",
        paragraphs: [
          "Piezas de sala entran en colecciones públicas y privadas sin feria intermedia. El trato se cierra en Pujades: obra en contexto, conversación con el artista, papeles claros.",
          "Confirma que el modelo sin e-commerce no impide circulación seria. La obra se mueve porque se ha visto bien montada.",
        ],
        paragraphsEn: [
          "Floor works enter public and private collections without an intermediary fair. Deals close at Pujades: work in context, talk with the artist, clear paperwork.",
          "Confirms that a model without e-commerce does not block serious circulation. The work moves because it was seen well installed.",
        ],
      },
    ],
  },
{
    year: "2022",
    items: [
      {
        title: "Segunda sala y patio",
        titleEn: "Second room and yard",
        paragraphs: [
          "Reforma parcial: segunda sala con forjado usable y patio de descarga como instalación exterior controlada. Obra mínima — no se diseña un look de galería — pero cambia la capacidad del programa.",
          "A partir de aquí pueden convivir una individual intensa y una pieza de patio. El eco se gestiona con puertas, no con paneles. El hormigón sigue a la vista.",
          "El edificio deja de ser un solo gesto y pasa a instrumento con registros: sala principal, sala menor, patio. Arquitectura de uso tan curatorial como constructiva.",
        ],
        paragraphsEn: [
          "Partial renovation: a second room with a usable floor plate and the loading yard as controlled outdoor installation. Minimal works — no designed gallery look — but the programme’s capacity changes.",
          "From here an intense solo and a yard piece can coexist. Echo is managed with doors, not panels. Concrete stays visible.",
          "The building stops being a single gesture and becomes an instrument with registers: main room, smaller room, yard. Architecture of use as curatorial as it is constructive.",
        ],
      },
      {
        title: "Roster internacional",
        titleEn: "International roster",
        paragraphs: [
          "Artistas de São Paulo, Járkov y Lyon. Cada incorporación se prueba primero en Pujades; el criterio no cambia, cambia la geografía.",
        ],
        paragraphsEn: [
          "Artists from São Paulo, Kharkiv and Lyon. Each addition is tested first in Pujades; the criterion does not change, the geography does.",
        ],
      },
      {
        title: "Primera colaboración museística",
        titleEn: "First museum collaboration",
        paragraphs: [
          "Préstamo corto y visita de estudiantes con un museo universitario en Barcelona. Ellos traen marco académico; nosotros, el edificio. De esa visita salen dos textos que alimentan el Journal.",
          "Queda abierto un canal que años después sostiene préstamos más largos. La institución entra sin que la galería se disfrace de museo.",
        ],
        paragraphsEn: [
          "A short loan and student visit with a university museum in Barcelona. They bring an academic frame; we bring the building. Two texts from that visit feed the Journal.",
          "A channel opens that later sustains longer loans. The institution enters without the gallery dressing up as a museum.",
        ],
      },
    ],
  },
];
