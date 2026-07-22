# Tasks: F06 — Entradas

## T-001: Crear modelos Partido y Entrada + seed
- **Description**:
  - Agregar modelos Partido (id, rival, fecha, estadio, competicion, local: boolean, precios: JSON con precios por sector) y Entrada (id, partidoId, usuarioId, sector, cantidad, total, qrCode, fechaCompra) con relaciones a Usuario. Seed con 6-8 partidos ficticios (vs rivales chilenos).
  - **Pattern**: No aplica (modelado de datos)
  - **Data Structure**: Array — seed de partidos O(n); Map — precios por sector O(1)
- **Files**: `backend/prisma/schema.prisma`, `backend/prisma/seed.ts`
- **Acceptance**:
  - Modelos Partido y Entrada creados con relaciones en Prisma
  - Seed inserta 6-8 partidos con fechas futuras y precios {preferencia: 15, general: 10, visita: 12}
  - Seed incluye partidos de liga, copa y amistosos
- **Depends on**: T-003 de F00 (Scaffolding), T-001 de F09 (Auth - modelo Usuario)

## T-002: Implementar endpoints de partidos y entradas
- **Description**:
  - Crear matchRepository, matchService, matchController, matchRoutes: GET /api/partidos?proximos=true. ticketRepository, ticketService, ticketController, ticketRoutes: POST /api/entradas (crea compra, genera QR simulado con texto "ANTIMONIOFC-{id}-{fecha}"), GET /api/mis-entradas (requiere auth middleware JWT).
  - **Pattern**: Proxy — auth middleware protege endpoints (use_when: controlar acceso); Strategy — precios por sector (use_when: algoritmos intercambiables)
  - **Data Structure**: Map — precios por sector O(1); Array — historial de entradas O(n)
- **Files**: `backend/src/routes/matchRoutes.ts`, `backend/src/controllers/matchController.ts`, `backend/src/services/matchService.ts`, `backend/src/repositories/matchRepository.ts`, `backend/src/routes/ticketRoutes.ts`, `backend/src/controllers/ticketController.ts`, `backend/src/services/ticketService.ts`, `backend/src/repositories/ticketRepository.ts`
- **Acceptance**:
  - `GET /api/partidos?proximos=true` devuelve próximos partidos (fecha >= hoy)
  - `POST /api/entradas` con token válido crea entrada y devuelve QR
  - `POST /api/entradas` sin token devuelve 401
  - `GET /api/mis-entradas` devuelve historial del usuario autenticado
  - El QR simulado es string "ANTIMONIOFC-{partidoId}-{usuarioId}-{timestamp}"
- **Depends on**: T-001, T-004 de F09 (Auth middleware)

## T-003: Crear frontend de TicketsPage con compra
- **Description**:
  - Implementar TicketsPage.tsx con lista de partidos (MatchCard), TicketModal.tsx (selección sector/cantidad, resumen, confirmar), PurchaseConfirm.tsx (QR simulado con código). useMatches y useTickets hooks con React Query. Proteger ruta de compra: si no auth, redirect a /login?returnUrl=/entradas.
  - **Pattern**: State — flujo de compra como máquina de estados (use_when: comportamiento varía según estado); Strategy — cálculo de total (use_when: diferentes reglas de precio)
  - **Data Structure**: Array — partidos O(n)
- **Files**: `frontend/src/pages/TicketsPage.tsx`, `frontend/src/components/sections/MatchCard.tsx`, `frontend/src/components/sections/TicketModal.tsx`, `frontend/src/components/sections/PurchaseConfirm.tsx`, `frontend/src/hooks/useTickets.ts`, `frontend/src/services/ticketService.ts`, `frontend/src/types/ticket.ts`, `frontend/src/types/match.ts`
- **Acceptance**:
  - MatchCard muestra rival, fecha formato "Sáb 15 Jul 20:00", estadio, "Desde $10"
  - Click "Comprar" → modal con sectores radio, cantidad input (1-10), subtotal/total
  - Confirmar → POST /api/entradas → pantalla QR
  - Sin auth → redirect a /login con returnUrl
  - Sectores: Preferencia ($15), General ($10), Visita ($12)
  - Toast success en compra exitosa
- **Depends on**: T-002, T-003 de F09 (Auth frontend)

## T-004: Agregar historial de compras en perfil
- **Description**:
  - Crear PurchaseHistory.tsx para mostrar en Perfil del usuario. Tabla con columnas: partido, sector, cantidad, total, fecha, QR code (texto acortado). Estado empty: "Aún no has comprado entradas". Integrar en ProfilePage.
  - **Pattern**: No aplica (componente visual)
  - **Data Structure**: Array — historial ordenado por fecha O(n log n)
- **Files**: `frontend/src/components/sections/PurchaseHistory.tsx`
- **Acceptance**:
  - Historial muestra todas las compras del usuario ordenadas por fecha desc
  - Cada fila: rival, sector, cantidad, "$30.00", "15 Jul 2026"
  - Si no hay compras: mensaje "Aún no has comprado entradas" con CTA a /entradas
  - Integrado en la página de perfil del usuario
- **Depends on**: T-003, T-005 de F09 (perfil de usuario)
