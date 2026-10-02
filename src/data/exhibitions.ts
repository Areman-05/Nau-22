import type { Exhibition } from "./types";
import { paint } from "./media";
import { exhibitionWorks } from "./exhibitionWorks";

const img = {
  kaito: paint.abstract,
  kaito2: paint.pour1,
  sara: paint.greenY,
  sara2: paint.greenW,
  marc: paint.canvas,
  marc2: paint.pour2,
  colectivo: paint.grit,
  colectivo2: paint.flux,
  elena: paint.drip,
  elena2: paint.layer,
  julien: paint.neo,
  julien2: paint.joy,
  alma: paint.red,
  alma2: paint.ochre,
  carmen: paint.bw1,
  carmen2: paint.shadow,
  taro: paint.untitled,
  taro2: paint.ink,
  vera: paint.colorful,
  vera2: paint.purple,
  xavier: paint.paintClose,
  xavier2: paint.dragon,
  marina: paint.alien,
  marina2: paint.blueRise,
  luna: paint.splash,
  luna2: paint.colorMix,
  ismail: paint.horiz,
  ismail2: paint.move,
  leonid: paint.nov4,
  leonid2: paint.nov5,
  oskar: paint.bw2,
  oskar2: paint.bw3,
  manta: paint.ovali,
  manta2: paint.grigia,
};

const rawExhibitions: Exhibition[] = [
  {
    id: "current-1",
    status: "current",
    title: "Geometrías Somáticas",
    artists: "Kaito Tanaka",
    artistSlugs: ["kaito-tanaka"],
    date: "12 Oct — 28 Nov, 2026",
    location: "Sala principal",
    image: img.kaito,
    curatorialText:
      "En su primera exposición individual en Barcelona, Kaito Tanaka presenta un cuerpo de trabajo que investiga la fricción entre la memoria industrial y la desmaterialización algorítmica. Utilizando datos topográficos del propio distrito 22@, Tanaka genera volúmenes que se imprimen en resinas biodegradables y posteriormente se intervienen con pigmentos minerales crudos.",
    curatorialTextEn:
      "In his first solo exhibition in Barcelona, Kaito Tanaka presents a body of work that investigates the friction between industrial memory and algorithmic dematerialisation.",
    works: [
      {
        title: "Somata I",
        medium: "Resina, grafito, acero",
        dimensions: "120 × 80 × 40 cm",
        year: "2026",
        image: img.kaito,
        available: true,
      },
      {
        title: "Somata II",
        medium: "Resina, óxido de hierro",
        dimensions: "110 × 75 × 45 cm",
        year: "2026",
        image: img.kaito2,
        available: true,
      },
      {
        title: "Estudio Topográfico A",
        medium: "Impresión pigmentada sobre papel de algodón",
        dimensions: "60 × 40 cm",
        year: "2026",
        image: img.kaito2,
        available: false,
      },
    ],
  },
  {
    id: "current-2",
    status: "current",
    title: "Tejidos de la Memoria",
    artists: "Sara Lund",
    artistSlugs: ["sara-lund"],
    date: "05 Dic — 30 Ene, 2026",
    location: "Project Room",
    image: img.sara,
    curatorialText:
      "Lund explora la historia textil del Poblenou a través de instalaciones a gran escala donde el hilo de cobre y la fibra óptica se entrelazan. Una reflexión sobre la transmisión de la información desde los telares mecánicos hasta los servidores de datos actuales.",
    curatorialTextEn:
      "Lund explores Poblenou’s textile history through large-scale installations where copper thread and fibre optic intertwine.",
    works: [],
  },
  {
    id: "current-3",
    status: "current",
    title: "Luz Sólida",
    artists: "Marc Vives",
    artistSlugs: ["marc-vives"],
    date: "15 Sep — 10 Nov, 2026",
    location: "Sótano",
    image: img.marc,
    curatorialText:
      "Una serie de esculturas lumínicas inmersivas que desafían la percepción espacial. Vives utiliza láseres de baja intensidad y vapor denso para esculpir muros tangibles dentro de la oscuridad arquitectónica de la antigua fábrica.",
    curatorialTextEn:
      "A series of immersive light sculptures that challenge spatial perception with lasers and vapour.",
    works: [],
  },
  {
    id: "current-4",
    status: "current",
    title: "Fricción y Ruido",
    artists: "Colectivo 22@, Xavier Solé, Ismail Qasim",
    artistSlugs: ["colectivo-22", "xavier-sole", "ismail-qasim"],
    date: "01 Oct — 30 Nov, 2026",
    location: "Anexo",
    image: img.colectivo,
    curatorialText:
      "Tres prácticas en la misma nave: el colectivo pinta frecuencias de demolición, Solé el distrito de noche y Qasim mapas que no orientan. El ruido no es tema: es el material que comparte el 22@.",
    curatorialTextEn:
      "Three practices in the same warehouse: the collective paints demolition frequencies, Solé the district at night and Qasim maps that do not orient.",
    works: [],
  },
  {
    id: "past-1",
    status: "past",
    title: "Artefactos Post-Digitales",
    artists: "Elena Rostova",
    artistSlugs: ["elena-rostova"],
    date: "Julio, 2026",
    location: "Sala principal",
    image: img.elena,
    curatorialText:
      "Rostova expuso una serie de lienzos generados por brazos robóticos alimentados con sus propios datos biométricos. La exposición supuso un cuestionamiento directo a la autoría en la era de la inteligencia artificial.",
    curatorialTextEn:
      "Rostova showed canvases generated by robotic arms fed with her own biometric data.",
    works: [
      {
        title: "Autorretrato Biométrico 01",
        medium: "Acrílico sobre lino (robótico)",
        dimensions: "200 × 150 cm",
        year: "2026",
        image: img.elena,
        available: false,
      },
    ],
  },
  {
    id: "past-2",
    status: "past",
    title: "Materia Oscura",
    artists: "Julien Dubois",
    artistSlugs: ["julien-dubois"],
    date: "Mayo, 2026",
    location: "Sala principal",
    image: img.julien,
    curatorialText:
      "Dubois reunió collages y objetos de mercadillo industrial del Besòs. La sala funcionó como inventario: cada pieza era un negativo de algo que ya no se fabrica.",
    curatorialTextEn:
      "Dubois gathered collages and industrial flea-market objects from Besòs. The room worked as an inventory.",
    works: [],
  },
  {
    id: "past-3",
    status: "past",
    title: "Tensiones Ibéricas",
    artists: "Alma Ruiz",
    artistSlugs: ["alma-ruiz"],
    date: "Febrero, 2026",
    location: "Project Room",
    image: img.alma,
    curatorialText:
      "Pigmento mineral y arena del litoral compactados en capas. Ruiz trató el lienzo como un corte geológico del Poblenou.",
    curatorialTextEn:
      "Mineral pigment and coastal sand compacted in layers. Ruiz treated the canvas as a geological cut of Poblenou.",
    works: [],
  },
  {
    id: "past-4",
    status: "past",
    title: "El Espacio Opresivo",
    artists: "Carmen Soto",
    artistSlugs: ["carmen-soto"],
    date: "Noviembre, 2025",
    location: "Sótano",
    image: img.carmen,
    curatorialText:
      "Muralismo a escala de sótano: Soto forzó la monumentalidad en un recinto bajo, sin salida visual.",
    curatorialTextEn:
      "Muralism at basement scale: Soto forced monumentality into a low enclosure with no visual exit.",
    works: [],
  },
  {
    id: "past-5",
    status: "past",
    title: "Topografías Negadas",
    artists: "Taro Yoko",
    artistSlugs: ["taro-yoko"],
    date: "Septiembre, 2025",
    location: "Sala principal",
    image: img.taro,
    curatorialText:
      "Una línea, un corte, un margen. Yoko redujo el dibujo a lo mínimo para tensar el papel como si fuera piel.",
    curatorialTextEn:
      "A line, a cut, a margin. Yoko reduced drawing to the minimum to tension paper as if it were skin.",
    works: [],
  },
  {
    id: "past-6",
    status: "past",
    title: "Sistemas Dinámicos",
    artists: "Vera Koch",
    artistSlugs: ["vera-koch"],
    date: "Junio, 2025",
    location: "Anexo",
    image: img.vera,
    curatorialText:
      "Serigrafías donde el desajuste de placa no se corrige: Koch archiva el accidente como método.",
    curatorialTextEn:
      "Screenprints where plate misregistration is not corrected: Koch archives the accident as method.",
    works: [],
  },
  {
    id: "past-7",
    status: "past",
    title: "Ecos de Hormigón",
    artists: "Xavier Solé",
    artistSlugs: ["xavier-sole"],
    date: "Marzo, 2025",
    location: "Sala principal",
    image: img.xavier,
    curatorialText:
      "Pintura nocturna del 22@: solares, cruces y el silencio después del cierre de naves.",
    curatorialTextEn:
      "Nocturnal painting of 22@: empty lots, crossings and the silence after warehouses close.",
    works: [],
  },
  {
    id: "past-8",
    status: "past",
    title: "Residuos y Forma",
    artists: "Marina Silva",
    artistSlugs: ["marina-silva"],
    date: "Enero, 2025",
    location: "Project Room",
    image: img.marina,
    curatorialText:
      "Cuerpo a escala 1:1 entre pintura y vídeo. Silva duplicó el gesto hasta que la piel pareció grabada.",
    curatorialTextEn:
      "Body at 1:1 scale between painting and video. Silva duplicated the gesture until skin seemed recorded.",
    works: [],
  },
  {
    id: "past-9",
    status: "past",
    title: "Rituales Contemporáneos",
    artists: "Luna Aris",
    artistSlugs: ["luna-aris"],
    date: "Octubre, 2024",
    location: "Sala principal",
    image: img.luna,
    curatorialText:
      "Textiles teñidos y suspendidos como clima. Aris pidió al espectador pasar por debajo de la obra.",
    curatorialTextEn:
      "Dyed textiles suspended as climate. Aris asked the viewer to walk underneath the work.",
    works: [],
  },
  {
    id: "past-10",
    status: "past",
    title: "Desplazamiento",
    artists: "Ismail Qasim",
    artistSlugs: ["ismail-qasim"],
    date: "Julio, 2024",
    location: "Sótano",
    image: img.ismail,
    curatorialText:
      "Mapas inútiles entre Tánger y Poblenou. Qasim dibujó geografías que no sirven para orientarse.",
    curatorialTextEn:
      "Useless maps between Tangier and Poblenou. Qasim drew geographies that cannot orient you.",
    works: [],
  },
  {
    id: "past-11",
    status: "past",
    title: "Monumentos Caídos",
    artists: "Leonid Belyaev",
    artistSlugs: ["leonid-belyaev"],
    date: "Marzo, 2024",
    location: "Sala principal",
    image: img.leonid,
    curatorialText:
      "Cerámica y metal a ras de suelo: moldes de fábrica textil esmaltados en ceniza.",
    curatorialTextEn:
      "Ceramics and metal at floor level: textile-factory moulds glazed in ash.",
    works: [],
  },
  {
    id: "past-12",
    status: "past",
    title: "Mecanismos",
    artists: "Oskar Lund",
    artistSlugs: ["oskar-lund"],
    date: "Noviembre, 2023",
    location: "Anexo",
    image: img.oskar,
    curatorialText:
      "Copia analógica 4×5 donde el grano se comporta como clima. Lund fotografió muros y cielos cortos.",
    curatorialTextEn:
      "4×5 analogue copies where grain behaves like weather. Lund photographed walls and short skies.",
    works: [],
  },
  {
    id: "past-13",
    status: "past",
    title: "Resina cruda",
    artists: "Kaito Tanaka",
    artistSlugs: ["kaito-tanaka"],
    date: "Agosto, 2025",
    location: "Anexo",
    image: img.kaito2,
    curatorialText:
      "Antes de las geometrías somáticas, Tanaka mostró lienzos intervenidos con resina y pigmento: el volumen todavía era pintura.",
    curatorialTextEn:
      "Before the somatic geometries, Tanaka showed canvases worked with resin and pigment: volume was still painting.",
    works: [],
  },
  {
    id: "past-14",
    status: "past",
    title: "Urdimbre",
    artists: "Sara Lund",
    artistSlugs: ["sara-lund"],
    date: "Febrero, 2025",
    location: "Sala principal",
    image: img.sara2,
    curatorialText:
      "Primera individual de Lund en la nau: cobre y acrílico tensados como si el cuadro fuera un telar.",
    curatorialTextEn:
      "Lund’s first solo in the warehouse: copper and acrylic tensioned as if the painting were a loom.",
    works: [],
  },
  {
    id: "past-15",
    status: "past",
    title: "Vapor",
    artists: "Marc Vives",
    artistSlugs: ["marc-vives"],
    date: "Noviembre, 2024",
    location: "Project Room",
    image: img.marc2,
    curatorialText:
      "Estudios de luz sobre lienzo: el vapor todavía se podía pintar antes de ocupar el sótano.",
    curatorialTextEn:
      "Light studies on canvas: vapour could still be painted before occupying the basement.",
    works: [],
  },
  {
    id: "past-16",
    status: "past",
    title: "Máquina de barrio",
    artists: "Colectivo 22@, Leonid Belyaev",
    artistSlugs: ["colectivo-22", "leonid-belyaev"],
    date: "Enero, 2024",
    location: "Sótano",
    image: img.colectivo2,
    curatorialText:
      "Pintura colectiva a partir de frecuencias de obra: cada lienzo era un canal de la nave.",
    curatorialTextEn:
      "Collective painting from construction frequencies: each canvas was a channel of the warehouse.",
    works: [],
  },
  {
    id: "past-17",
    status: "past",
    title: "Dataset",
    artists: "Elena Rostova, Kaito Tanaka",
    artistSlugs: ["elena-rostova", "kaito-tanaka"],
    date: "Marzo, 2025",
    location: "Project Room",
    image: img.elena2,
    curatorialText:
      "Serie corta de lienzos donde el gesto robótico aún se corregía a mano. El dataset no firmaba solo.",
    curatorialTextEn:
      "A short series of canvases where the robotic gesture was still corrected by hand.",
    works: [],
  },
  {
    id: "past-18",
    status: "past",
    title: "Inventario Besòs",
    artists: "Julien Dubois, Oskar Lund",
    artistSlugs: ["julien-dubois", "oskar-lund"],
    date: "Febrero, 2025",
    location: "Anexo",
    image: img.julien2,
    curatorialText:
      "Collages sobre tabla y pintura de catálogo. Dubois abrió el cajón un año antes de Materia Oscura.",
    curatorialTextEn:
      "Collages on board and catalogue painting. Dubois opened the drawer a year before Dark Matter.",
    works: [],
  },
  {
    id: "past-19",
    status: "past",
    title: "Óxido y cal",
    artists: "Alma Ruiz",
    artistSlugs: ["alma-ruiz"],
    date: "Septiembre, 2024",
    location: "Sala principal",
    image: img.alma2,
    curatorialText:
      "Cinco lienzos de gran formato. Ruiz compactó fachada y litoral en capas que se leen de cerca.",
    curatorialTextEn:
      "Five large-format canvases. Ruiz compacted façade and shoreline in layers that read up close.",
    works: [],
  },
  {
    id: "past-20",
    status: "past",
    title: "Umbrales",
    artists: "Carmen Soto",
    artistSlugs: ["carmen-soto"],
    date: "Abril, 2024",
    location: "Project Room",
    image: img.carmen2,
    curatorialText:
      "Pintura de puertas y lucernarios. Soto ensayó el umbral en tres cuadros, sin marco.",
    curatorialTextEn:
      "Paintings of doors and skylights. Soto rehearsed the threshold in three unframed canvases.",
    works: [],
  },
  {
    id: "past-21",
    status: "past",
    title: "Dispositivos",
    artists: "Studio Manta",
    artistSlugs: ["studio-manta"],
    date: "Abril, 2026",
    location: "Sala principal",
    image: img.manta,
    curatorialText:
      "El dúo trató el cuadro como mueble: tres pinturas que funcionan como mampara, banco y paño de luz.",
    curatorialTextEn:
      "The duo treated the painting as furniture: three works that function as screen, bench and light cloth.",
    works: [],
  },
  {
    id: "past-22",
    status: "past",
    title: "Habitar",
    artists: "Studio Manta",
    artistSlugs: ["studio-manta"],
    date: "Octubre, 2023",
    location: "Anexo",
    image: img.manta2,
    curatorialText:
      "Primera colaboración con Nau 22: pintura espacial a escala de sala, casi invisible hasta que te sientas.",
    curatorialTextEn:
      "First collaboration with Nau 22: spatial painting at room scale, almost invisible until you sit.",
    works: [],
  },
  {
    id: "past-23",
    status: "past",
    title: "Margen",
    artists: "Taro Yoko",
    artistSlugs: ["taro-yoko"],
    date: "Enero, 2023",
    location: "Project Room",
    image: img.taro2,
    curatorialText:
      "Dos obras sobre papel tensadas como piel. Yoko redujo el gesto a una línea y un corte.",
    curatorialTextEn:
      "Two works on paper stretched like skin. Yoko reduced the gesture to a line and a cut.",
    works: [],
  },
  {
    id: "past-24",
    status: "past",
    title: "Registro",
    artists: "Vera Koch",
    artistSlugs: ["vera-koch"],
    date: "Marzo, 2024",
    location: "Anexo",
    image: img.vera2,
    curatorialText:
      "Pintura y serigrafía donde el desajuste se edita, no se corrige. Edición corta en parrilla.",
    curatorialTextEn:
      "Painting and screenprint where misregister is edited, not corrected. A short edition in a grid.",
    works: [],
  },
  {
    id: "past-25",
    status: "past",
    title: "Noche 22@",
    artists: "Xavier Solé",
    artistSlugs: ["xavier-sole"],
    date: "Septiembre, 2023",
    location: "Sala principal",
    image: img.xavier2,
    curatorialText:
      "Cinco paneles de cruces y solares. Solé pintó el distrito después del cierre, sin gente.",
    curatorialTextEn:
      "Five panels of crossings and empty lots. Solé painted the district after closing, without people.",
    works: [],
  },
  {
    id: "past-26",
    status: "past",
    title: "Cartografías",
    artists: "Ismail Qasim",
    artistSlugs: ["ismail-qasim"],
    date: "Diciembre, 2023",
    location: "Project Room",
    image: img.ismail2,
    curatorialText:
      "Tres mapas pintados que no orientan. Qasim superpuso Tánger y Poblenou hasta que las calles se tejieron.",
    curatorialTextEn:
      "Three painted maps that do not orient. Qasim overlaid Tangier and Poblenou until the streets became a weave.",
    works: [],
  },
  {
    id: "past-27",
    status: "past",
    title: "Ceniza",
    artists: "Leonid Belyaev",
    artistSlugs: ["leonid-belyaev"],
    date: "Junio, 2023",
    location: "Anexo",
    image: img.leonid2,
    curatorialText:
      "Dos piezas a ras de suelo: pintura, cerámica y metal esmaltados en ceniza.",
    curatorialTextEn:
      "Two floor-level pieces: painting, ceramics and metal glazed in ash.",
    works: [],
  },
  {
    id: "past-28",
    status: "past",
    title: "Clima",
    artists: "Luna Aris",
    artistSlugs: ["luna-aris"],
    date: "Mayo, 2023",
    location: "Sala principal",
    image: img.luna2,
    curatorialText:
      "Cinco lienzos teñidos como temperatura. Aris pidió al visitante entrar debajo del color.",
    curatorialTextEn:
      "Five canvases dyed as temperature. Aris asked the visitor to enter under the colour.",
    works: [],
  },
  {
    id: "past-29",
    status: "past",
    title: "Piel 1:1",
    artists: "Marina Silva",
    artistSlugs: ["marina-silva"],
    date: "Agosto, 2023",
    location: "Sótano",
    image: img.marina2,
    curatorialText:
      "Cuerpos pintados a escala real. Silva ensayó el doble en movimiento un año antes de Residuos y Forma.",
    curatorialTextEn:
      "Bodies painted at 1:1. Silva rehearsed the moving double a year before Waste and Form.",
    works: [],
  },
  {
    id: "past-30",
    status: "past",
    title: "Grano",
    artists: "Oskar Lund",
    artistSlugs: ["oskar-lund"],
    date: "Junio, 2023",
    location: "Project Room",
    image: img.oskar2,
    curatorialText:
      "Dos cuadros densos, casi nocturnos a pleno día. Lund trató el grano como clima, no como estilo.",
    curatorialTextEn:
      "Two dense paintings, almost nocturnal in full daylight. Lund treated grain as climate, not as style.",
    works: [],
  },
];

export const exhibitions: Exhibition[] = rawExhibitions.map((exh) => ({
  ...exh,
  works: exhibitionWorks[exh.id] ?? exh.works,
}));

export function getExhibition(id: string): Exhibition | undefined {
  return exhibitions.find((e) => e.id === id);
}

export function getCurrentExhibition(): Exhibition | undefined {
  return exhibitions.find((e) => e.status === "current");
}

export function getExhibitionsByStatus(status: Exhibition["status"]): Exhibition[] {
  return exhibitions.filter((e) => e.status === status);
}
