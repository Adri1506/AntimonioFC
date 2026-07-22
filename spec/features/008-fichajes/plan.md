# Plan: F08 — Fichajes

## Componentes
- **TransferCard.tsx** — Tarjeta de fichaje (avatar, nombre, tipo, club, fecha, operación)
- **TransferTimeline.tsx** — Timeline vertical con línea central y cards alternadas
- **TransferFilter.tsx** — Filtro: Todos | Altas | Bajas
- **MarketSummary.tsx** — Resumen del mercado (totales)
- **Pages**: TransfersPage.tsx
- **Hooks**: useTransfers.ts (React Query)

## Endpoints
- `GET /api/fichajes?tipo=ALTA|BAJA` — Lista con filtro opcional

## Data Flow
```
TransfersPage.tsx
├── MarketSummary (totales calculados del array)
├── TransferFilter (estado: tipo seleccionado)
└── TransferTimeline (useTransfers → GET /api/fichajes?tipo=X)
    └── TransferCard[] (render alternado izq/der)
```

## Patrones Aplicados
- **Iterator** — Recorrido de fichajes para renderizar timeline. `use_when`: acceder secuencialmente a colección.
- **Observer** — React Query para actualización de lista al cambiar filtro. `use_when`: cambios requieren actualizar UI.

## Estructuras de Datos
- **Array** (O(n)) — Lista de fichajes ordenada por fecha
- **Map** (O(1)) — Agrupación altas/bajas para resumen: `Map<'ALTA'|'BAJA', Fichaje[]>`

## Dependencias Externas
- @tanstack/react-query
- Lucide Icons (iconos de flechas, +, -)

## Database Changes
- Modelo `Fichaje` (id, jugadorId, tipo, fecha, clubOrigen, clubDestino, tipoOperacion, monto)
- Relación con Jugador (para nombre y avatar)
- Seed con 8-10 fichajes
