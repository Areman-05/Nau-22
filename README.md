# Nau 22

Galería contemporánea ficticia pero realista en Poblenou (Barcelona). Escaparate editorial + comercio dual: ediciones comprables online y piezas únicas por cita privada.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Rutas

- `/` — Home
- `/exposiciones` · `/exposiciones/[slug]`
- `/obras` · `/obras/[slug]`
- `/artistas` · `/artistas/[slug]`
- `/visitar` — cita exposición / visita privada
- `/la-nau`
- `/carrito` · `/checkout`
- `/confirmacion/compra` · `/confirmacion/cita`

## Stack

Next.js (App Router), TypeScript, Tailwind v4 + CSS propio, datos mock en `src/data`.
