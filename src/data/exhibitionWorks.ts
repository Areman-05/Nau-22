import type { ExhibitionWork } from "./types";
import { paint } from "./media";

function piece(
  title: string,
  medium: string,
  dimensions: string,
  year: string,
  image: string,
  available = true,
  artist?: string,
): ExhibitionWork {
  return { title, medium, dimensions, year, image, available, artist };
}

export const exhibitionWorks: Record<string, ExhibitionWork[]> = {
  "current-1": [
    piece("Somata I", "Óleo y resina sobre lienzo", "120 × 80 cm", "2026", paint.abstract),
    piece("Desplazamiento", "Acrílico y grafito", "110 × 75 cm", "2026", paint.pour1),
    piece("Corte topográfico", "Pigmento sobre panel", "60 × 40 cm", "2025", paint.dimension, false),
    piece("Fricción 03", "Resina y óleo", "180 × 140 cm", "2026", paint.paint61),
  ],
  "current-2": [
    piece("Urdimbre de cobre", "Acrílico e hilo", "Dimensiones variables", "2026", paint.greenY),
    piece("Telar / servidor", "Pintura sobre tela", "200 × 150 cm", "2025", paint.greenW),
    piece("Cobre 03", "Pigmento sobre lino", "120 × 100 cm", "2024", paint.sky),
    piece("Transmisión", "Óleo", "180 × 140 cm", "2026", paint.island),
    piece("Nudo de fibra", "Acrílico", "40 × 40 cm", "2023", paint.field, false),
  ],
  "current-3": [
    piece("Luz sólida", "Acrílico sobre lienzo", "200 × 150 cm", "2026", paint.canvas),
    piece("Haz", "Óleo", "120 × 100 cm", "2025", paint.pour2),
  ],
  "current-4": [
    piece("Frecuencia de demolición", "Pintura e instalación", "Dimensiones variables", "2026", paint.uruk, true, "Colectivo 22@"),
    piece("Canal 04", "Acrílico sobre lino", "180 × 140 cm", "2026", paint.britto, true, "Colectivo 22@"),
    piece("Pujades de noche", "Acrílico sobre panel", "120 × 100 cm", "2025", paint.dragon, true, "Xavier Solé"),
    piece("Cruce sordo", "Óleo", "110 × 75 cm", "2026", paint.thing, false, "Xavier Solé"),
    piece("Mapa de grúas", "Tinta y acrílico", "200 × 150 cm", "2024", paint.move, true, "Ismail Qasim"),
  ],
  "past-1": [
    piece("Autorretrato biométrico", "Acrílico sobre lino", "200 × 150 cm", "2026", paint.drip, false),
    piece("Delegación", "Pintura generada", "180 × 140 cm", "2025", paint.layer),
    piece("Pulso", "Acrílico robótico", "120 × 100 cm", "2024", paint.squares),
  ],
  "past-2": [
    piece("Cajón abierto", "Collage sobre lienzo", "120 × 100 cm", "2026", paint.neo),
    piece("Catálogo industrial", "Pintura y objeto", "80 × 60 cm", "2025", paint.joy),
    piece("Negativo de mercadillo", "Transferencia", "40 × 40 cm", "2024", paint.daisy, false),
    piece("Pieza de cajón", "Acrílico", "110 × 75 cm", "2023", paint.meme),
  ],
  "past-3": [
    piece("Sedimento 04", "Pigmento mineral sobre lino", "200 × 150 cm", "2026", paint.red),
    piece("Capa ocre", "Óleo y arena", "180 × 140 cm", "2025", paint.sand),
    piece("Cal y óxido", "Acrílico sobre lienzo", "120 × 100 cm", "2024", paint.afterglow),
    piece("Fachada compacta", "Pigmento sobre lino", "160 × 130 cm", "2026", paint.nov1),
    piece("Corte geológico", "Pintura sobre panel", "90 × 70 cm", "2023", paint.ochre, false),
  ],
  "past-4": [
    piece("Umbral nocturno", "Óleo sobre lino", "180 × 140 cm", "2025", paint.bw1),
    piece("Luz de lado", "Acrílico", "120 × 100 cm", "2024", paint.shadow),
    piece("Portal Serie A", "Pintura sobre algodón", "200 × 150 cm", "2025", paint.gray),
  ],
  "past-5": [
    piece("Una línea", "Tinta y acrílico", "120 × 100 cm", "2025", paint.untitled),
    piece("Un corte", "Pintura sobre papel", "80 × 60 cm", "2024", paint.ink),
  ],
  "past-6": [
    piece("Error de placa", "Acrílico y serigrafía", "120 × 100 cm", "2025", paint.colorful),
    piece("Desajuste", "Pintura", "110 × 75 cm", "2026", paint.purple),
    piece("Accidente controlado", "Acrílico", "90 × 70 cm", "2024", paint.pion, false),
    piece("Registro 12", "Óleo", "180 × 140 cm", "2025", paint.redit),
  ],
  "past-7": [
    piece("22@ noche", "Acrílico sobre panel", "120 × 100 cm", "2025", paint.paintClose),
    piece("Solar vacío", "Óleo", "110 × 75 cm", "2025", paint.uruk),
    piece("Después del cierre", "Panel", "180 × 140 cm", "2024", paint.nov2),
  ],
  "past-8": [
    piece("Cuerpo 1:1", "Óleo sobre lienzo", "200 × 150 cm", "2025", paint.alien),
    piece("Camerino", "Acrílico", "120 × 100 cm", "2024", paint.blueRise),
    piece("Piel grabada", "Óleo", "180 × 140 cm", "2025", paint.shrew, false),
    piece("Doble", "Pintura y vídeo", "Dimensiones variables", "2024", paint.britto),
  ],
  "past-9": [
    piece("Clima rojo", "Acrílico y textil", "Dimensiones variables", "2024", paint.splash),
    piece("Temperatura", "Óleo", "180 × 140 cm", "2024", paint.colorMix),
    piece("Rojo óxido", "Pigmento sobre lino", "120 × 100 cm", "2023", paint.fathers),
  ],
  "past-10": [
    piece("Mapa inútil I", "Tinta y acrílico", "200 × 150 cm", "2024", paint.horiz),
    piece("Tánger / Poblenou", "Pintura y recorte", "180 × 140 cm", "2024", paint.linee),
  ],
  "past-11": [
    piece("Molde III", "Pintura y cerámica", "40 × 40 × 40 cm", "2024", paint.nov4),
    piece("Crisol", "Óleo y metal", "Dimensiones variables", "2023", paint.nov5),
  ],
  "past-12": [
    piece("Grano como clima", "Óleo sobre lino", "120 × 100 cm", "2023", paint.bw2),
    piece("Muro", "Pintura y copia", "110 × 75 cm", "2023", paint.bw3),
    piece("Cielo corto", "Acrílico", "80 × 60 cm", "2022", paint.veil, false),
  ],
  "past-13": [
    piece("Resina cruda", "Acrílico y resina", "180 × 140 cm", "2025", paint.pour1),
    piece("Volumen II", "Óleo sobre lienzo", "120 × 100 cm", "2025", paint.dimension),
    piece("Estudio A", "Pigmento", "60 × 40 cm", "2024", paint.cubes),
  ],
  "past-14": [
    piece("Urdimbre", "Acrílico e hilo", "200 × 150 cm", "2025", paint.greenW),
    piece("Nudo", "Pintura sobre tela", "120 × 100 cm", "2024", paint.sky),
  ],
  "past-15": [
    piece("Vapor", "Acrílico", "180 × 140 cm", "2024", paint.pour2),
    piece("Fotones", "Óleo", "90 × 70 cm", "2024", paint.canvas),
    piece("Atravesar", "Pintura y luz", "Dimensiones variables", "2023", paint.ember),
  ],
  "past-16": [
    piece("Máquina de barrio", "Pintura e instalación", "Dimensiones variables", "2024", paint.flux, true, "Colectivo 22@"),
    piece("Altavoz bajo", "Acrílico sobre lino", "160 × 130 cm", "2024", paint.ringlet, true, "Colectivo 22@"),
    piece("Ceniza de grúa", "Óleo y metal", "40 × 40 × 40 cm", "2023", paint.nov4, false, "Leonid Belyaev"),
    piece("Molde de nave", "Pintura y cerámica", "Dimensiones variables", "2023", paint.nov5, true, "Leonid Belyaev"),
  ],
  "past-17": [
    piece("Dataset 01", "Acrílico robótico", "200 × 150 cm", "2025", paint.layer, true, "Elena Rostova"),
    piece("Firma ausente", "Lino y datos", "180 × 140 cm", "2025", paint.codes, true, "Elena Rostova"),
    piece("Corte algorítmico", "Óleo y resina", "120 × 100 cm", "2024", paint.abstract, true, "Kaito Tanaka"),
    piece("Somata estudio", "Pigmento sobre panel", "60 × 40 cm", "2025", paint.paint61, false, "Kaito Tanaka"),
  ],
  "past-18": [
    piece("Inventario Besòs", "Collage sobre madera", "120 × 100 cm", "2025", paint.joy, true, "Julien Dubois"),
    piece("Ticket industrial", "Pintura y objeto", "40 × 40 cm", "2024", paint.vice, true, "Julien Dubois"),
    piece("Grano de muelle", "Óleo sobre lino", "110 × 75 cm", "2024", paint.bw2, true, "Oskar Lund"),
    piece("Cielo corto II", "Acrílico", "80 × 60 cm", "2023", paint.bw3, false, "Oskar Lund"),
    piece("Cajón 07", "Acrílico", "90 × 70 cm", "2025", paint.daisy, true, "Julien Dubois"),
  ],
  "past-19": [
    piece("Óxido y cal", "Pigmento sobre lino", "200 × 150 cm", "2024", paint.afterglow),
    piece("Capa ocre II", "Óleo y arena", "180 × 140 cm", "2024", paint.sand),
    piece("Sedimento 02", "Acrílico", "120 × 100 cm", "2023", paint.nov1),
  ],
  "past-20": [
    piece("Umbrales", "Óleo", "180 × 140 cm", "2024", paint.shadow),
    piece("Reja", "Acrílico sobre algodón", "120 × 100 cm", "2024", paint.gray),
  ],
  "past-21": [
    piece("Mampara", "Acrílico sobre panel", "200 × 150 cm", "2026", paint.ovali),
    piece("Cuando te sientas", "Óleo", "120 × 100 cm", "2025", paint.grigia),
    piece("Paño de luz", "Pintura", "180 × 140 cm", "2026", paint.composit, false),
  ],
  "past-22": [
    piece("Habitar", "Acrílico", "160 × 130 cm", "2023", paint.grigia),
    piece("Banco", "Pintura y dispositivo", "Dimensiones variables", "2023", paint.composit),
  ],
  "past-23": [
    piece("Margen", "Tinta y acrílico", "80 × 60 cm", "2023", paint.ink),
    piece("Piel tensada", "Pintura sobre papel", "120 × 100 cm", "2022", paint.untitled),
  ],
  "past-24": [
    piece("Registro", "Acrílico y serigrafía", "120 × 100 cm", "2024", paint.purple),
    piece("Placa 09", "Pintura", "90 × 70 cm", "2024", paint.pion),
    piece("Desajuste II", "Óleo", "110 × 75 cm", "2023", paint.redit),
  ],
  "past-25": [
    piece("Noche 22@", "Acrílico sobre panel", "180 × 140 cm", "2023", paint.dragon),
    piece("Cruce", "Óleo", "120 × 100 cm", "2023", paint.uruk),
    piece("Pujades 102", "Acrílico", "110 × 75 cm", "2022", paint.thing),
    piece("Solar II", "Panel", "90 × 70 cm", "2023", paint.paintClose, false),
  ],
  "past-26": [
    piece("Cartografías", "Tinta y acrílico", "200 × 150 cm", "2023", paint.move),
    piece("Geografía falsa", "Óleo sobre papel", "180 × 140 cm", "2023", paint.horiz),
    piece("Tejido de calles", "Pintura y recorte", "160 × 130 cm", "2022", paint.linee),
  ],
  "past-27": [
    piece("Ceniza", "Pintura y cerámica", "Dimensiones variables", "2023", paint.nov5),
    piece("Costura", "Óleo y metal", "40 × 40 × 40 cm", "2023", paint.nov4),
  ],
  "past-28": [
    piece("Clima", "Acrílico y textil", "Dimensiones variables", "2023", paint.colorMix),
    piece("Paño suspendido", "Pintura sobre tela", "200 × 150 cm", "2023", paint.fathers),
    piece("Debajo", "Óleo", "120 × 100 cm", "2022", paint.yellow),
    piece("Temperatura II", "Pigmento", "90 × 70 cm", "2023", paint.splash, false),
  ],
  "past-29": [
    piece("Piel 1:1", "Óleo sobre lienzo", "200 × 150 cm", "2023", paint.blueRise),
    piece("Camerino II", "Acrílico", "120 × 100 cm", "2023", paint.alien),
  ],
  "past-30": [
    piece("Grano", "Óleo sobre lino", "120 × 100 cm", "2023", paint.bw3),
    piece("Muro corto", "Pintura", "110 × 75 cm", "2023", paint.veil),
    piece("Agua", "Acrílico", "80 × 60 cm", "2022", paint.tide),
  ],
};

export function listExhibitionWorkIds(): string[] {
  return Object.keys(exhibitionWorks);
}

export function getExhibitionWorks(id: string): ExhibitionWork[] {
  return exhibitionWorks[id] ?? [];
}
