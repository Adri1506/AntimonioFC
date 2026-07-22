# Plan: F06 — Entradas

## Componentes
- **MatchCard.tsx** — Tarjeta de partido (rival, fecha, estadio, precio desde)
- **TicketModal.tsx** — Modal de compra con selectores y resumen
- **PurchaseConfirm.tsx** — Confirmación con QR simulado
- **PurchaseHistory.tsx** — Historial de compras del usuario
- **Pages**: TicketsPage.tsx (listado + compra)
- **Hooks**: useMatches.ts, useTickets.ts (React Query + mutations)

## Endpoints
- `GET /api/partidos?proximos=true` — Próximos partidos con precios
- `POST /api/entradas` — Crear compra (body: partidoId, sector, cantidad) [Auth required]
- `GET /api/mis-entradas` — Historial del usuario [Auth required]

## Data Flow
```
TicketsPage.tsx
├── Partidos[] (useMatches → GET /api/partidos)
├── [Click Comprar] → TicketModal
│   ├── Selector sector (Preferencia/General/Visita)
│   ├── Selector cantidad (1-10)
│   ├── Resumen con precios
│   └── [Confirmar] → POST /api/entradas → PurchaseConfirm
└── PurchaseHistory (GET /api/mis-entradas)
```

## Patrones Aplicados
- **State** — El flujo de compra tiene estados: selección → confirmación → éxito. Cada estado renderiza diferente UI. `use_when`: comportamiento varía según estado del proceso.
- **Strategy** — Cálculo de precios por sector (Preferencia $15, General $10, Visita $12) con posible descuento para socios. `use_when`: algoritmos intercambiables.
- **Proxy** — Auth middleware protege endpoints POST/GET de entradas. `use_when`: controlar acceso a recursos.

## Estructuras de Datos
- **Array** (O(n)) — Lista de partidos para renderizado
- **Map** (O(1)) — Precios por sector: `Map<'preferencia'|'general'|'visita', number>`
- **Queue** — Historial de compras ordenado por fecha (FIFO)

## Dependencias Externas
- qrcode.js o canvas API para QR simulado
- @tanstack/react-query (mutations para POST)

## Database Changes
- Modelo `Partido` (id, rival, fecha, estadio, competicion, local, precios JSON)
- Modelo `Entrada` (id, partidoId, usuarioId, sector, cantidad, total, fechaCompra, qrCode)
- Seed con 6-8 partidos ficticios
