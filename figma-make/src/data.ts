export const LANGUAGES = ['ES', 'EN'];

const defaultBio1 = "Artista visual licenciado en la Universidad Nacional. Ha sido docente y cofundador de varios espacios culturales. Ha expuesto en ciudades como París, Bogotá, Medellín, Londres y Berlín, entre otras. Galardonado con premios de arte contemporáneo.";
const defaultBio2 = "Su obra explora la búsqueda de un lugar propio, el valor de la tierra y las formas de poder. Cuestiona cómo el territorio se convierte en un producto. Utiliza dibujo, técnicas de manufactura y tecnologías para crear instalaciones con materiales reutilizables.";

export const ARTISTS = [
  { id: 'alma-ruiz', name: 'Alma Ruiz', country: 'España', year: '1985', bio1: "Alma explora la intersección entre la cerámica tradicional ibérica y los procesos de extrusión digital.", bio2: "Sus vasijas colapsadas por algoritmos de estrés estructural cuestionan la durabilidad de la memoria artesanal frente a la producción masiva.", images: ["https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1604944983327-024844626154?w=800&h=800&fit=crop"] },
  { id: 'carmen-soto', name: 'Carmen Soto', country: 'México', year: '1990', bio1: "Carmen Soto revisita el muralismo a través de la pintura a gran escala en entornos cerrados, forzando la monumentalidad en espacios opresivos.", bio2: "Su paleta cromática extrae directamente los tonos de las antiguas zonas industriales latinoamericanas, creando atmósferas densas de las que el espectador no puede escapar.", images: ["https://images.unsplash.com/photo-1513364776144-60967f0f7f74?w=800&h=800&fit=crop"] },
  { id: 'colectivo-22', name: 'Colectivo 22@', country: 'España', year: '2020', bio1: "Grupo anónimo de arquitectos y artistas sonoros dedicados a archivar la transición del paisaje sonoro de Poblenou.", bio2: "Capturan frecuencias de demolición y maquinaria pesada, transformándolas en piezas escultóricas resonantes y música ambiental.", images: ["https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&h=800&fit=crop"] },
  { id: 'elena-rostova', name: 'Elena Rostova', country: 'Rusia', year: '1982', bio1: "Rostova investiga la delegación de la autoría. Construye brazos robóticos que pintan en vivo alimentándose de sus propios datos biométricos.", bio2: "Su obra plantea debates fundamentales sobre la identidad, la copia y el valor de la firma en la era de la inteligencia artificial.", images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop"] },
  { id: 'ismail-qasim', name: 'Ismail Qasim', country: 'Marruecos', year: '1979', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=800&h=800&fit=crop"] },
  { id: 'julien-dubois', name: 'Julien Dubois', country: 'Francia', year: '1988', bio1: "Dubois utiliza la pintura de acción clásica pero sustituye la brocha humana por brazos mecánicos programados con caos determinista.", bio2: "El resultado son lienzos violentos que parecen humanos pero están ejecutados con precisión milimétrica por máquinas ciegas.", images: ["https://images.unsplash.com/photo-1604944983327-024844626154?w=800&h=800&fit=crop"] },
  { id: 'kaito-tanaka', name: 'Kaito Tanaka', country: 'Japón', year: '1992', bio1: "Tanaka investiga la fricción entre la memoria industrial y la desmaterialización algorítmica.", bio2: "Utilizando datos topográficos del distrito 22@, genera volúmenes impresos en resinas biodegradables que luego interviene con pigmentos crudos.", images: ["https://images.unsplash.com/photo-1513364776144-60967f0f7f74?w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=800&fit=crop"] },
  { id: 'leonid-belyaev', name: 'Leonid Belyaev', country: 'Ucrania', year: '1981', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&h=800&fit=crop"] },
  { id: 'luna-aris', name: 'Luna Aris', country: 'Argentina', year: '1995', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop"] },
  { id: 'marc-vives', name: 'Marc Vives', country: 'España', year: '1976', bio1: "Vives esculpe con luz. Utiliza láseres de baja intensidad y vapor denso para crear volúmenes arquitectónicos efímeros.", bio2: "Su obra cuestiona la materialidad del espacio. Lo que parece un muro sólido es, en realidad, niebla y fotones que el espectador puede atravesar.", images: ["https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=800&h=800&fit=crop"] },
  { id: 'marina-silva', name: 'Marina Silva', country: 'Brasil', year: '1989', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1604944983327-024844626154?w=800&h=800&fit=crop"] },
  { id: 'oskar-lund', name: 'Oskar Lund', country: 'Suecia', year: '1984', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1513364776144-60967f0f7f74?w=800&h=800&fit=crop"] },
  { id: 'sara-lund', name: 'Sara Lund', country: 'Suecia', year: '1986', bio1: "Lund explora la historia textil del Poblenou a través de instalaciones a gran escala donde se entrelazan hilos de cobre y fibra óptica.", bio2: "Su obra reflexiona sobre la transmisión de la información, conectando el pasado de los telares mecánicos con el presente de los servidores de datos.", images: ["https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=800&fit=crop"] },
  { id: 'studio-manta', name: 'Studio Manta', country: 'Italia', year: '2015', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&h=800&fit=crop"] },
  { id: 'taro-yoko', name: 'Taro Yoko', country: 'Japón', year: '1970', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop"] },
  { id: 'vera-koch', name: 'Vera Koch', country: 'Alemania', year: '1991', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=800&h=800&fit=crop"] },
  { id: 'xavier-sole', name: 'Xavier Solé', country: 'España', year: '1983', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1604944983327-024844626154?w=800&h=800&fit=crop"] }
].sort((a, b) => a.name.localeCompare(b.name));

export const COLLABORATORS = [
  { id: 'bau-design', name: 'BAU Centre Universitari', country: 'España', year: '1989', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1513364776144-60967f0f7f74?w=800&h=800&fit=crop"] },
  { id: 'hangar', name: 'Hangar.org', country: 'España', year: '1997', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=800&fit=crop"] },
  { id: 'julia-spinola', name: 'Júlia Spínola (Curadora)', country: 'España', year: '1979', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&h=800&fit=crop"] },
  { id: 'macba', name: 'MACBA Programa Independiente', country: 'España', year: '1995', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop"] },
  { id: 'revista-texturas', name: 'Revista Texturas', country: 'España', year: '2010', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=800&h=800&fit=crop"] },
  { id: 'sonia-fernandez', name: 'Sonia Fernández (Crítica)', country: 'España', year: '1982', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1604944983327-024844626154?w=800&h=800&fit=crop"] },
  { id: 'studio-b', name: 'Studio B Arquitectura', country: 'España', year: '2018', bio1: defaultBio1, bio2: defaultBio2, images: ["https://images.unsplash.com/photo-1513364776144-60967f0f7f74?w=800&h=800&fit=crop"] }
].sort((a, b) => a.name.localeCompare(b.name));

export const EXHIBITIONS = [
  // --- CURRENT (4 Exhibitions to build the staggered layout) ---
  {
    id: 'current-1',
    status: 'current',
    title: "Geometrías Somáticas",
    artists: "Kaito Tanaka",
    date: "12 Oct — 28 Nov, 2026",
    location: "Main Space",
    image: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=1600&h=1200&fit=crop",
    curatorialText: "En su primera exposición individual, Kaito Tanaka presenta un cuerpo de trabajo que investiga la fricción entre la memoria industrial y la desmaterialización algorítmica.",
    works: []
  },
  {
    id: 'current-2',
    status: 'current',
    title: "Tejidos de la Memoria",
    artists: "Sara Lund",
    date: "05 Dic — 30 Ene, 2026",
    location: "Project Room",
    image: "https://images.unsplash.com/photo-1604944983327-024844626154?w=1600&h=1200&fit=crop",
    curatorialText: "Lund explora la historia textil a través de instalaciones a gran escala donde el hilo de cobre y la fibra óptica se entrelazan.",
    works: []
  },
  {
    id: 'current-3',
    status: 'current',
    title: "Luz Sólida",
    artists: "Marc Vives",
    date: "15 Sep — 10 Nov, 2026",
    location: "Basement",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1600&h=1200&fit=crop",
    curatorialText: "Una serie de esculturas lumínicas inmersivas que desafían la percepción espacial con láseres y vapor.",
    works: []
  },
  {
    id: 'current-4',
    status: 'current',
    title: "Fricción y Ruido",
    artists: "Colectivo 22@",
    date: "01 Oct — 30 Nov, 2026",
    location: "Annex",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1600&h=1200&fit=crop",
    curatorialText: "Instalación sonora que captura las frecuencias de demolición de antiguas naves para convertirlas en piezas escultóricas resonantes.",
    works: []
  },

  // --- PAST / ARCHIVE (From newest to oldest) ---
  { id: 'past-1', status: 'past', title: "Artefactos Post-Digitales", artists: "Elena Rostova", date: "Julio, 2026", location: "Main Space", image: "", curatorialText: "", works: [] },
  { id: 'past-2', status: 'past', title: "Materia Oscura", artists: "Julien Dubois", date: "Mayo, 2026", location: "Main Space", image: "", curatorialText: "", works: [] },
  { id: 'past-3', status: 'past', title: "Tensiones Ibéricas", artists: "Alma Ruiz", date: "Febrero, 2026", location: "Project Room", image: "", curatorialText: "", works: [] },
  { id: 'past-4', status: 'past', title: "El Espacio Opresivo", artists: "Carmen Soto", date: "Noviembre, 2025", location: "Basement", image: "", curatorialText: "", works: [] },
  { id: 'past-5', status: 'past', title: "Topografías Negadas", artists: "Taro Yoko", date: "Septiembre, 2025", location: "Main Space", image: "", curatorialText: "", works: [] },
  { id: 'past-6', status: 'past', title: "Sistemas Dinámicos", artists: "Vera Koch", date: "Junio, 2025", location: "Annex", image: "", curatorialText: "", works: [] },
  { id: 'past-7', status: 'past', title: "Ecos de Hormigón", artists: "Xavier Solé", date: "Marzo, 2025", location: "Main Space", image: "", curatorialText: "", works: [] },
  { id: 'past-8', status: 'past', title: "Residuos y Forma", artists: "Marina Silva", date: "Enero, 2025", location: "Project Room", image: "", curatorialText: "", works: [] },
  { id: 'past-9', status: 'past', title: "Rituales Contemporáneos", artists: "Luna Aris", date: "Octubre, 2024", location: "Main Space", image: "", curatorialText: "", works: [] },
  { id: 'past-10', status: 'past', title: "Desplazamiento", artists: "Ismail Qasim", date: "Julio, 2024", location: "Basement", image: "", curatorialText: "", works: [] },
  { id: 'past-11', status: 'past', title: "Monumentos Caídos", artists: "Leonid Belyaev", date: "Marzo, 2024", location: "Main Space", image: "", curatorialText: "", works: [] },
  { id: 'past-12', status: 'past', title: "Mecanismos", artists: "Oskar Lund", date: "Noviembre, 2023", location: "Annex", image: "", curatorialText: "", works: [] }
];

export const NEWS = [
  { 
    id: 'n1', 
    date: "15 Nov, 2026", 
    category: "PREMIO", 
    title: "Kaito Tanaka galardonado con el Premio Nacional de Artes Plásticas", 
    excerpt: "El jurado ha destacado su capacidad para materializar la fricción entre la memoria industrial y la era algorítmica. La ceremonia de entrega se realizará en el Ministerio de Cultura a principios del próximo mes.", 
    image: "https://images.unsplash.com/photo-1513364776144-60967f0f7f74?w=1200&h=800&fit=crop" 
  },
  { 
    id: 'n2', 
    date: "02 Nov, 2026", 
    category: "ADQUISICIÓN", 
    title: "El MACBA incorpora 'Somata I' a su colección permanente", 
    excerpt: "La pieza central de nuestra actual exposición pasará a formar parte de los fondos del museo barcelonés, consolidando el valor institucional de la obra.", 
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1200&h=800&fit=crop" 
  },
  { 
    id: 'n3', 
    date: "28 Oct, 2026", 
    category: "FERIA", 
    title: "Participación confirmada en Art Basel 2027, sector Statements", 
    excerpt: "Nau 22 presentará un proyecto inédito (solo project) de Alma Ruiz en la próxima edición de la feria en Suiza, enfocado en la cerámica de extrusión.", 
    image: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=1200&h=800&fit=crop" 
  },
  { 
    id: 'n4', 
    date: "10 Oct, 2026", 
    category: "PUBLICACIÓN", 
    title: "Lanzamiento del catálogo 'Ruina Industrial' volumen II", 
    excerpt: "Una coedición con la Revista Texturas que recopila ensayos críticos sobre el impacto de la gentrificación en la producción artística del distrito 22@.", 
    image: "" 
  },
  { 
    id: 'n5', 
    date: "05 Sep, 2026", 
    category: "INSTITUCIONAL", 
    title: "Ampliación de nuestros espacios de archivo en Poblenou", 
    excerpt: "La galería suma 200m2 dedicados exclusivamente a la conservación y estudio de obras de gran formato y videoinstalaciones.", 
    image: "" 
  },
  { 
    id: 'n6', 
    date: "12 Ago, 2026", 
    category: "ENTREVISTA", 
    title: "Marc Vives reflexiona sobre la escultura inmaterial", 
    excerpt: "En una extensa entrevista para la edición impresa de Artforum, el artista desgrana su proceso creativo basado en láseres y vapor de agua.", 
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&h=800&fit=crop" 
  }
];
