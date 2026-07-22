# Plan: F03 — Plantilla

## Componentes
- **PlayerCard.tsx** — Tarjeta de jugador (avatar, número, nombre, posición)
- **StaffCard.tsx** — Tarjeta de staff técnico
- **PlayerModal.tsx** — Modal de detalle con stats y biografía
- **PositionFilter.tsx** — Tabs de filtro por posición
- **Pages**: SquadPage.tsx (orquestador)
- **Hooks**: usePlayers.ts (React Query)

## Endpoints
- `GET /api/jugadores?posicion=DEL` — Lista con filtro opcional
- `GET /api/jugadores/:id` — Detalle de jugador

## Data Flow
```
SquadPage.tsx
├── PositionFilter (estado local: posicion seleccionada)
├── PlayerCard[] (usePlayers → GET /api/jugadores?posicion=X)
│   └── onClick → PlayerModal (GET /api/jugadores/:id)
└── StaffSection (data estática desde data/coachingStaff.ts)
```

## Patrones Aplicados
- **Iterator** — El filtrado por posición se implementa con iteración sobre el array de jugadores. React Query cachea la lista completa y el filtro se aplica del lado del servidor via query param, no en cliente. `use_when`: acceder secuencialmente sin exponer estructura interna.
- **Proxy** — PlayerModal actúa como proxy que controla el acceso a la información detallada del jugador, cargándola bajo demanda. `use_when`: carga perezosa de datos costosos.

## Estructuras de Datos
- **Array** (O(n)) — Lista de jugadores para renderizado en grid. Búsqueda secuencial aceptable para 22 elementos.
- **Map** (O(1)) — Mapeo de posición a jugadores para filtrado rápido del lado servidor: `Map<posicion, Jugador[]>`

## Dependencias Externas
- @tanstack/react-query (data fetching)
- shadcn/ui Dialog (modal)
- Imágenes: img/portero1.png, img/defensa2.png, ..., img/coach-dt.png (ya generadas)

## Database Changes
- Nuevo modelo `Jugador` en schema.prisma
- Nuevo modelo `StaffTecnico` en schema.prisma
- Seed con 22 jugadores + 4 staff
