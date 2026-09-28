export const gallery = {
  name: "Nau 22",
  tagline: "Galería contemporánea · Poblenou",
  taglineEn: "Contemporary gallery · Poblenou",
  address: "Carrer de Llull 148, local 2",
  postalCode: "08005",
  city: "Barcelona",
  email: "visita@nau22.gallery",
  phone: "+34 93 000 22 22",
  instagram: "https://instagram.com/nau22gallery",
  metro: "L4 — Llacuna / Poblenou",
  hours: {
    es: "Jueves a sábado · 16:00–20:00 · y con cita",
    en: "Thursday to Saturday · 16:00–20:00 · and by appointment",
  },
  about: {
    es: "Nau 22 ocupa una antigua nave de talleres en el eje industrial de Poblenou. El proyecto nace de la convicción de que el coleccionismo contemporáneo puede ser cercano, culto y sin ruido: un espacio donde la obra se mira con tiempo y se adquiere con criterio.",
    en: "Nau 22 occupies a former workshop warehouse on Poblenou’s industrial axis. The project is built on the belief that contemporary collecting can be close, cultured and quiet: a space where work is seen with time and acquired with judgement.",
  },
  history: {
    es: "La nave formó parte de un complejo textil reconvertido a lo largo de las últimas décadas. Conservamos la altura original, la luz lateral y el hormigón visto. En 2024 abrimos como galería con un programa de emergentes y mid-career vinculados a la escena urbana mediterránea.",
    en: "The warehouse was part of a textile complex converted over recent decades. We keep the original height, side light and exposed concrete. In 2024 we opened as a gallery with a programme of emerging and mid-career artists linked to the Mediterranean urban scene.",
  },
  responseTime: {
    es: "Respondemos en 24–48 horas laborables.",
    en: "We reply within 24–48 business hours.",
  },
};

export const visitSlots = [
  { id: "16-00", label: "16:00", time: "16:00" },
  { id: "17-00", label: "17:00", time: "17:00" },
  { id: "18-00", label: "18:00", time: "18:00" },
  { id: "19-00", label: "19:00", time: "19:00" },
];

export const mediumLabels: Record<string, { es: string; en: string }> = {
  painting: { es: "Pintura", en: "Painting" },
  sculpture: { es: "Escultura", en: "Sculpture" },
  photography: { es: "Fotografía", en: "Photography" },
  "works-on-paper": { es: "Obra sobre papel", en: "Works on paper" },
  installation: { es: "Instalación", en: "Installation" },
  "mixed-media": { es: "Técnica mixta", en: "Mixed media" },
};
