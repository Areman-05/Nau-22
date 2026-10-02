import type { Artist } from "./types";
import { paint, works } from "./media";

export const artists: Artist[] = [
  {
    slug: "alma-ruiz",
    name: "Alma Ruiz",
    country: "España",
    birthYear: 1985,
    basedIn: "Barcelona",
    practice: "Pintura y pigmento mineral",
    practiceEn: "Painting and mineral pigment",
    bio: "Alma Ruiz trabaja el lienzo como un corte geológico. Recoge óxidos y arenas del litoral catalán y los sedimenta en capas que recuerdan fachadas a medio derribo. Su pintura no ilustra el Poblenou: lo compacta.",
    bioEn:
      "Alma Ruiz treats the canvas as a geological cut. She gathers oxides and sands from the Catalan coast and settles them in layers that recall façades mid-demolition. Her painting does not illustrate Poblenou: it compresses it.",
    bio2:
      "Ha expuesto en Barcelona, Marsella y Lisboa. En Nau 22 ha presentado series de gran formato donde el ocre y el gris hormigón se disputan el plano, sin figura y sin título narrativo.",
    bioEn2:
      "She has shown in Barcelona, Marseille and Lisbon. At Nau 22 she has presented large-format series where ochre and concrete grey contest the plane, without figure and without a narrative title.",
    images: works("Alma Ruiz", [paint.red, paint.ochre, paint.sand, paint.afterglow, paint.nov1]),
  },
  {
    slug: "carmen-soto",
    name: "Carmen Soto",
    country: "México",
    birthYear: 1990,
    basedIn: "Barcelona / Ciudad de México",
    practice: "Pintura y fotografía de umbral",
    practiceEn: "Painting and threshold photography",
    bio: "Carmen Soto documenta umbrales: puertas de naves, rejas, lucernarios. Nacida en Ciudad de México, llega a Poblenou con una mirada de umbral — ni interior ni calle — y fotografía la luz que entra de lado, nunca de frente.",
    bioEn:
      "Carmen Soto documents thresholds: warehouse doors, grilles, skylights. Born in Mexico City, she arrives in Poblenou with a threshold gaze — neither interior nor street — and photographs light that enters from the side, never head-on.",
    bio2:
      "Sus copias pigmentadas sobre papel de algodón se presentan sin marco, a la medida de la pared. Trabaja series cortas, a menudo de tres o cinco imágenes, pensadas para verse en sala y no en pantalla.",
    bioEn2:
      "Her pigment prints on cotton paper are shown unframed, sized to the wall. She works in short series, often three or five images, meant to be seen in the room and not on a screen.",
    images: works("Carmen Soto", [paint.bw1, paint.shadow, paint.gray]),
  },
  {
    slug: "colectivo-22",
    name: "Colectivo 22@",
    country: "España",
    birthYear: 2020,
    basedIn: "Poblenou",
    practice: "Pintura sonora e instalación",
    practiceEn: "Sound painting and installation",
    bio: "Colectivo 22@ se forma en 2020 entre artistas y técnicos de sonido del barrio. Graban demoliciones, grúas y ventilaciones de naves, y las convierten en piezas ambientales que ocupan la sala como si fuera otra máquina.",
    bioEn:
      "Colectivo 22@ formed in 2020 among artists and sound technicians from the neighbourhood. They record demolitions, cranes and warehouse ventilation, and turn them into ambient pieces that occupy the room as if it were another machine.",
    bio2:
      "No firman obras individuales: cada montaje es un mapa de frecuencias del distrito. En Nau 22 han ocupado el sótano con altavoces a baja altura, para que el cuerpo reciba el sonido antes que el oído.",
    bioEn2:
      "They do not sign individual works: each installation is a frequency map of the district. At Nau 22 they have occupied the basement with speakers at low height, so the body receives the sound before the ear.",
    images: works("Colectivo 22@", [paint.uruk, paint.britto, paint.red]),
  },
  {
    slug: "elena-rostova",
    name: "Elena Rostova",
    country: "Rusia",
    birthYear: 1982,
    basedIn: "Barcelona",
    practice: "Pintura y procesos robóticos",
    practiceEn: "Painting and robotic processes",
    bio: "Elena Rostova alimenta brazos robóticos con datos biométricos — pulso, sueño, desplazamiento — para que pinten sobre lino. El gesto no es suyo del todo, y esa duda es el tema: quién firma cuando el cuerpo se vuelve dataset.",
    bioEn:
      "Elena Rostova feeds robotic arms with biometric data — pulse, sleep, displacement — so they paint on linen. The gesture is not entirely hers, and that doubt is the subject: who signs when the body becomes a dataset.",
    bio2:
      "Formada en San Petersburgo y afincada en Barcelona desde 2016, ha mostrado en Berlín y en espacios independientes del 22@. Sus lienzos se leen mejor de cerca: la línea mecánica deja un temblor humano.",
    bioEn2:
      "Trained in Saint Petersburg and based in Barcelona since 2016, she has shown in Berlin and in independent 22@ spaces. Her canvases read better up close: the mechanical line still carries a human tremor.",
    images: works("Elena Rostova", [paint.drip, paint.layer, paint.squares, paint.codes]),
  },
  {
    slug: "ismail-qasim",
    name: "Ismail Qasim",
    country: "Marruecos",
    birthYear: 1979,
    basedIn: "Barcelona / Tánger",
    practice: "Dibujo y pintura cartográfica",
    practiceEn: "Drawing and cartographic painting",
    bio: "Ismail Qasim traza mapas que no sirven para orientarse. Superpone planos de Tánger y del Poblenou hasta que las calles se vuelven un tejido. El dibujo es preciso; la geografía, deliberadamente falsa.",
    bioEn:
      "Ismail Qasim draws maps that cannot be used for orientation. He overlays plans of Tangier and Poblenou until the streets become a weave. The drawing is precise; the geography, deliberately false.",
    bio2:
      "Trabaja a lápiz, tinta y recorte sobre papel de gran formato. Ha sido residente en Hangar y ha mostrado en Casablanca y Barcelona. En sala, las hojas se leen como muros, no como láminas.",
    bioEn2:
      "He works in pencil, ink and collage on large-format paper. He has been a resident at Hangar and has shown in Casablanca and Barcelona. In the room, the sheets read as walls, not as plates.",
    images: works("Ismail Qasim", [paint.horiz, paint.move, paint.linee]),
  },
  {
    slug: "julien-dubois",
    name: "Julien Dubois",
    country: "Francia",
    birthYear: 1988,
    basedIn: "Barcelona",
    practice: "Collage y pintura de archivo",
    practiceEn: "Collage and archive painting",
    bio: "Julien Dubois corta catálogos industriales, tickets y negativos de mercadillo. El collage no es nostalgia: es una forma de inventario. Cada pieza parece un cajón abierto a medias.",
    bioEn:
      "Julien Dubois cuts industrial catalogues, tickets and flea-market negatives. Collage is not nostalgia: it is a form of inventory. Each piece looks like a half-open drawer.",
    bio2:
      "Llegó de Lyon en 2019. Publica pliegos de artista en ediciones muy cortas y monta vitrinas bajas, a altura de mesa, para forzar una lectura lenta.",
    bioEn2:
      "He arrived from Lyon in 2019. He publishes artist booklets in very short editions and installs low vitrines, table-height, to force a slow reading.",
    images: works("Julien Dubois", [paint.neo, paint.joy, paint.daisy, paint.meme, paint.vice]),
  },
  {
    slug: "kaito-tanaka",
    name: "Kaito Tanaka",
    country: "Japón",
    birthYear: 1992,
    basedIn: "Barcelona",
    practice: "Pintura, volumen y resina",
    practiceEn: "Painting, volume and resin",
    bio: "Tanaka investiga la fricción entre la memoria industrial y la desmaterialización algorítmica.",
    bioEn:
      "Tanaka investigates the friction between industrial memory and algorithmic dematerialisation.",
    bio2:
      "Utilizando datos topográficos del distrito 22@, genera volúmenes impresos en resinas biodegradables que luego interviene con pigmentos crudos.",
    bioEn2:
      "Using topographic data from 22@, he generates volumes printed in biodegradable resins which he then works with raw pigments.",
    images: works("Kaito Tanaka", [paint.abstract, paint.pour1, paint.dimension, paint.paint61]),
  },
  {
    slug: "leonid-belyaev",
    name: "Leonid Belyaev",
    country: "Ucrania",
    birthYear: 1981,
    basedIn: "Barcelona",
    practice: "Pintura, cerámica y metal",
    practiceEn: "Painting, ceramics and metal",
    bio: "Leonid Belyaev cuece volúmenes que parecen moldes de fábrica textil. El esmalte es mate, casi ceniza. El metal aparece como costura, no como estructura.",
    bioEn:
      "Leonid Belyaev fires volumes that look like moulds from a textile factory. The glaze is matte, almost ash. Metal appears as a seam, not as structure.",
    bio2:
      "De Járkov a Barcelona en 2022. Trabaja en hornos compartidos del Besòs. Las piezas piden suelo, no peana: peso bajo, sombra amplia.",
    bioEn2:
      "From Kharkiv to Barcelona in 2022. He works in shared kilns in Besòs. The pieces ask for the floor, not a plinth: low weight, wide shadow.",
    images: works("Leonid Belyaev", [paint.nov4, paint.nov5]),
  },
  {
    slug: "luna-aris",
    name: "Luna Aris",
    country: "Argentina",
    birthYear: 1995,
    basedIn: "Barcelona",
    practice: "Pintura y textil",
    practiceEn: "Painting and textile",
    bio: "Luna Aris cuelga paños teñidos a mano hasta que la nave cambia de clima. El color no es superficie: es atmósfera. Trabaja el rojo óxido y el crudo como si fueran temperatura.",
    bioEn:
      "Luna Aris hangs hand-dyed cloths until the warehouse changes climate. Colour is not surface: it is atmosphere. She works oxide red and raw cloth as if they were temperature.",
    bio2:
      "Formada en Buenos Aires, llegó con una residencia breve y se quedó. En Nau 22 ha usado la altura original de la cubierta: el visitante entra debajo de la obra, no delante.",
    bioEn2:
      "Trained in Buenos Aires, she arrived on a short residency and stayed. At Nau 22 she has used the original roof height: the visitor enters under the work, not in front of it.",
    images: works("Luna Aris", [paint.splash, paint.colorMix, paint.fathers, paint.storm, paint.yellow]),
  },
  {
    slug: "marc-vives",
    name: "Marc Vives",
    country: "España",
    birthYear: 1976,
    basedIn: "Barcelona",
    practice: "Pintura lumínica",
    practiceEn: "Light painting",
    bio: "Marc Vives esculpe con luz y vapor. En la oscuridad de la antigua fábrica, un haz se vuelve muro. No hay objeto que fotografiar bien: hay que estar.",
    bioEn:
      "Marc Vives sculpts with light and vapour. In the darkness of the former factory, a beam becomes a wall. There is no object that photographs well: you have to be there.",
    bio2:
      "Lleva más de dos décadas en la escena local, a menudo fuera del cubo blanco. En Nau 22 vuelve al sótano, el espacio más industrial del recinto, y pide visita en horario de tarde.",
    bioEn2:
      "He has been on the local scene for more than two decades, often outside the white cube. At Nau 22 he returns to the basement, the most industrial space on site, and asks for afternoon visits.",
    images: works("Marc Vives", [paint.canvas, paint.pour2, paint.ringlet]),
  },
  {
    slug: "marina-silva",
    name: "Marina Silva",
    country: "Brasil",
    birthYear: 1989,
    basedIn: "Barcelona",
    practice: "Pintura figurativa y vídeo",
    practiceEn: "Figurative painting and video",
    bio: "Marina Silva pinta cuerpos a escala 1:1 y luego los filma en la misma sala. La pintura no es boceto del vídeo: son dos tiempos del mismo gesto. El visitante ve primero el lienzo y después su doble en movimiento.",
    bioEn:
      "Marina Silva paints bodies at 1:1 scale and then films them in the same room. The painting is not a sketch for the video: they are two times of the same gesture. The visitor sees the canvas first, then its moving double.",
    bio2:
      "De São Paulo a Barcelona en 2018. Interesa el desfase entre piel pintada y piel grabada. En exposiciones colectivas suele pedir una sala pequeña, casi camerino.",
    bioEn2:
      "From São Paulo to Barcelona in 2018. She is interested in the lag between painted skin and recorded skin. In group shows she usually asks for a small room, almost a dressing room.",
    images: works("Marina Silva", [paint.alien, paint.blueRise, paint.shrew, paint.britto]),
  },
  {
    slug: "oskar-lund",
    name: "Oskar Lund",
    country: "Suecia",
    birthYear: 1984,
    basedIn: "Barcelona",
    practice: "Pintura y fotografía analógica",
    practiceEn: "Painting and analogue photography",
    bio: "Oskar Lund dispara en 4×5 y revela en un cuarto improvisado en Poblenou. Le interesa el grano como clima, no como estilo. Las copias son densas, casi nocturnas a pleno día.",
    bioEn:
      "Oskar Lund shoots 4×5 and develops in an improvised darkroom in Poblenou. He is interested in grain as climate, not as style. The prints are dense, almost nocturnal in full daylight.",
    bio2:
      "Hermano de práctica — no de sangre — de Sara Lund, con quien ha compartido taller. Sus series evitan el retrato: prefiere muros, agua y cielo corto.",
    bioEn2:
      "A sibling in practice — not by blood — of Sara Lund, with whom he has shared a studio. His series avoid portraiture: he prefers walls, water and a short sky.",
    images: works("Oskar Lund", [paint.bw2, paint.bw3]),
  },
  {
    slug: "sara-lund",
    name: "Sara Lund",
    country: "Suecia",
    birthYear: 1986,
    basedIn: "Barcelona",
    practice: "Pintura e hilo de cobre",
    practiceEn: "Painting and copper thread",
    bio: "Sara Lund teje cobre y fibra óptica como si fueran urdimbre de fábrica. Parte de la historia textil de Poblenou y llega a los servidores: transmisión, no adorno.",
    bioEn:
      "Sara Lund weaves copper and fibre optic as if they were mill warp. She starts from Poblenou’s textile history and arrives at servers: transmission, not ornament.",
    bio2:
      "Próxima individual en Nau 22. Trabaja a escala de sala: el visitante camina entre hilos tensados. El sonido de la pieza es el del propio material al circular el aire.",
    bioEn2:
      "Upcoming solo at Nau 22. She works at room scale: the visitor walks between taut threads. The sound of the piece is the material itself as air moves through it.",
    images: works("Sara Lund", [paint.greenY, paint.greenW, paint.sky, paint.island, paint.field]),
  },
  {
    slug: "studio-manta",
    name: "Studio Manta",
    country: "Italia",
    birthYear: 2015,
    basedIn: "Barcelona / Milán",
    practice: "Pintura y espacialidad",
    practiceEn: "Painting and spatial practice",
    bio: "Studio Manta es un dúo de Milán que trata el espacio de exposición como mueble. No ilustran la obra de otros: construyen dispositivos — bancos, mamparas, luces — que se leen como pieza.",
    bioEn:
      "Studio Manta is a Milan duo that treats the exhibition space as furniture. They do not illustrate other people’s work: they build devices — benches, screens, lights — that read as pieces.",
    bio2:
      "Han colaborado con galerías independientes en Italia y Cataluña. En Nau 22 el encargo suele ser invisible a primera vista: se nota cuando te sientas o cuando la luz cae de otro modo.",
    bioEn2:
      "They have collaborated with independent galleries in Italy and Catalonia. At Nau 22 the commission is often invisible at first glance: you notice it when you sit, or when the light falls differently.",
    images: works("Studio Manta", [paint.ovali, paint.grigia, paint.composit]),
  },
  {
    slug: "taro-yoko",
    name: "Taro Yoko",
    country: "Japón",
    birthYear: 1970,
    basedIn: "Kioto / Barcelona",
    practice: "Pintura y obra sobre papel",
    practiceEn: "Painting and works on paper",
    bio: "Taro Yoko dibuja con una economía casi caligráfica. Una línea, un corte, un margen. Es el artista más veterano del programa: no busca actualidad, busca precisión.",
    bioEn:
      "Taro Yoko draws with an almost calligraphic economy. One line, one cut, one margin. He is the most senior artist in the programme: he is not looking for currency, he is looking for precision.",
    bio2:
      "Divide el año entre Kioto y estancias cortas en Barcelona. Las obras viajan enrolladas. En sala se tensan como piel, con muy poca sombra.",
    bioEn2:
      "He splits the year between Kyoto and short stays in Barcelona. Works travel rolled. In the room they are stretched like skin, with very little shadow.",
    images: works("Taro Yoko", [paint.untitled, paint.ink]),
  },
  {
    slug: "vera-koch",
    name: "Vera Koch",
    country: "Alemania",
    birthYear: 1991,
    basedIn: "Barcelona",
    practice: "Pintura y serigrafía",
    practiceEn: "Painting and screenprint",
    bio: "Vera Koch convierte el error de placa en motivo. El desajuste entre capas no se corrige: se edita. Cada ejemplar de una serie es un accidente controlado.",
    bioEn:
      "Vera Koch turns plate error into motif. The misregister between layers is not corrected: it is edited. Each impression in a series is a controlled accident.",
    bio2:
      "Formada en Leipzig, imprime en un taller del Rec. Las ediciones son cortas y se muestran en parrilla, para que el ojo compare lo que debería ser idéntico.",
    bioEn2:
      "Trained in Leipzig, she prints in a workshop in El Rec. Editions are short and shown in a grid, so the eye can compare what should have been identical.",
    images: works("Vera Koch", [paint.colorful, paint.purple, paint.pion, paint.redit]),
  },
  {
    slug: "xavier-sole",
    name: "Xavier Solé",
    country: "España",
    birthYear: 1983,
    basedIn: "Barcelona",
    practice: "Pintura nocturna del 22@",
    practiceEn: "Nocturnal painting of 22@",
    bio: "Xavier Solé pinta el distrito de noche: luces frías, solares, grúas. Paleta seca, casi fotográfica, sin gente. El 22@ aparece como paisaje después del cierre.",
    bioEn:
      "Xavier Solé paints the district at night: cold lights, empty lots, cranes. Dry palette, almost photographic, without people. 22@ appears as a landscape after closing time.",
    bio2:
      "Pinta en panel, formatos medios, pensados para pared de sala y no para feria. El título suele ser una dirección o un cruce.",
    bioEn2:
      "He paints on panel, mid-size formats, meant for a gallery wall and not a fair booth. Titles are often an address or a crossing.",
    images: works("Xavier Solé", [paint.paintClose, paint.dragon, paint.uruk, paint.thing, paint.nov2]),
  },
].sort((a, b) => a.name.localeCompare(b.name, "es"));

export function getArtist(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}
