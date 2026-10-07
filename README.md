# Nau 22

Sitio web de una galería de exposiciones contemporáneas en una nave de Poblenou (22@, Barcelona). No es un marketplace ni un feed: es el programa, los artistas y el criterio de la sala, en una interfaz white box pensada para mirar — no para competir con la obra.

El diseño se definió en Figma y se llevó a Next.js. Este README cubre el producto y la intención de UI/UX. El detalle de proceso y decisiones irá en la ficha del porfolio.

No hay venta online. La consulta de obra es por correo.

## La idea en una frase

Una web de sala: ver qué hay colgado, quién lo hace y cómo llegar a la nau — sin carrito, sin métricas vacías y sin que la interfaz se ponga delante de la pieza.

## Para quién es

- Quien entra a ver **qué hay en sala**: exposición actual, archivo de programa y ficha de muestra.
- Quien busca **artistas y colaboradores** como índice, no como tienda: lista, ficha, obras, exposiciones relacionadas.
- Quien lee el **Journal** como dossier (prensa, ferias, adquisiciones), no como blog de oferta.
- Quien quiere entender el **proyecto**: manifiesto, historia de la nave y cómo visitar (dirección, horario).
- Quien espera **honestidad de galería urbana**: web secundaria, la pieza primero, datos de visita a mano.

## Qué hace la web

**Inicio**  
Marca, claim del 22@ y lo que está en sala. Debajo, artistas destacados y el Journal reciente. El primer gesto debería ser “qué se puede ver ahora”.

**Programa**  
Exposiciones actuales y archivo por años. Cada ficha abre vista, texto de sala, obras y consulta. Es el corazón del sitio.

**Artistas**  
Índice numerado (y colaboradores en la misma pantalla). El detalle muestra bio, selección de estudio y exposiciones en Nau 22.

**Noticias (Journal)**  
Destacado + archivo. Publicaciones, ferias, notas de prensa. Complementa al programa; no lo sustituye.

**Proyecto**  
Criterio e historia de la nave, manifiesto en página propia, y **Visitar** (dirección y horario). El menú apunta a `#visitar` para no inventar una quinta sección de “info”.

**Consulta**  
Formulario discreto que abre el correo con contexto (obra, artista, exposición). Sin checkout.

## Por qué esta web y no “otra de galería”

- Un solo viaje: de “qué hay hoy” a “quién es el artista” a “cómo voy a Pujades” — sin e-commerce ni viewing room comercial.
- Cada ruta una pregunta: Inicio (hoy), Programa (qué se expone), Artistas (quién), Journal (qué se publica), Proyecto (qué es la nau y cómo visitar).
- White box: campo blanco, menú que se retira, tipografía de sala. La UI no es el espectáculo.
- Referencias de nicho (galerías urbanas tipo Bombon y pares de Londres / Nueva York): archivo + programa + visita, no dashboard de producto.

## UI y UX

**Principio:** claridad antes que espectáculo. La pieza y el programa mandan; el chrome (menú, títulos de sección, hovers) debe parecer pared, no campaña.

**Flujo**

```
Home → Programa | Artistas | Journal | Proyecto
         │           │          │         │
         ▼           ▼          ▼         ▼
    Ficha expo   Ficha persona  Artículo  Manifiesto
    → obras                  → obras     → Visitar
```

- Header mínimo (wordmark + menú). Las secciones viven dentro, no en una barra permanente.
- Fichas con retroceso predecible (índice de exposiciones, etc.).
- Footer con ubicación, horario, contacto e idioma (ES / EN; CAT previsto).
- Estados y copy en dos idiomas; el tono es de cartela, no de marketing.

**Patrones**

- Tipografía escalonada: serif de display (Cormorant Garamond), sans de lectura (Montserrat), mono de etiquetas de sala.
- Paleta blanco / negro / azul institucional.
- Imagen a escala de sala; listas de artistas como índice, no como cards de catálogo.
- Consultar como gesto secundario, no como CTA de venta.

## Cómo verla

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)

```bash
npm test        # catálogo e integridad de datos
npm run typecheck
```

## Nota técnica (corta)

Front en Next.js (App Router), React y Tailwind. El contenido vive en `src/data` (artistas, programa, obras, journal, proyecto). Sin backend propio ni CMS. Más arquitectura, tests y proceso: ficha de porfolio.
