# Tasks: F08 — Fichajes

## T-001: Crear modelo Fichaje + seed + endpoints
- **Description**:
  - Agregar modelo Fichaje (id, jugadorId, tipo: ALTA|BAJA, fecha, clubOrigen, clubDestino, tipoOperacion: TRASPASO|CESION|FIN_CONTRATO, monto) con relación a Jugador. Seed con 8-10 fichajes. Endpoints: GET /api/fichajes con filtro tipo, GET /api/fichajes/resumen (totales).
  - **Pattern**: Facade — TransferService expone API simplificada (use_when: simplificar subsistema)
  - **Data Structure**: Array — fichajes ordenados por fecha O(n log n); Map — resumen por tipo O(1)
- **Files**: `backend/prisma/schema.prisma`, `backend/prisma/seed.ts`, `backend/src/routes/transferRoutes.ts`, `backend/src/controllers/transferController.ts`, `backend/src/services/transferService.ts`, `backend/src/repositories/transferRepository.ts`
- **Acceptance**:
  - `GET /api/fichajes` devuelve todos los fichajes ordenados por fecha desc
  - `GET /api/fichajes?tipo=ALTA` devuelve solo altas
  - `GET /api/fichajes/resumen` devuelve { totalAltas, totalBajas, inversionTotal }
  - Cada fichaje incluye datos del jugador (nombre, numero, posicion, foto)
- **Depends on**: T-001 de F03 (modelo Jugador)

## T-002: Crear frontend de TransfersPage con timeline
- **Description**:
  - Implementar TransfersPage.tsx con MarketSummary (cards de resumen), TransferFilter (tabs Todos|Altas|Bajas), TransferTimeline (línea vertical central con cards alternadas izquierda/derecha), TransferCard (avatar, nombre, badge ALTA/BAJA, club, fecha, tipo). useTransfers hook. Estados: loading (skeleton), error, empty.
  - **Pattern**: Iterator — recorrido de fichajes para timeline (use_when: acceso secuencial); Observer — React Query para filtros (use_when: cambios actualizan UI)
  - **Data Structure**: Array — fichajes filtrados O(n)
- **Files**: `frontend/src/pages/TransfersPage.tsx`, `frontend/src/components/sections/TransferTimeline.tsx`, `frontend/src/components/sections/TransferCard.tsx`, `frontend/src/components/sections/TransferFilter.tsx`, `frontend/src/components/sections/MarketSummary.tsx`, `frontend/src/hooks/useTransfers.ts`, `frontend/src/services/transferService.ts`, `frontend/src/types/transfer.ts`
- **Acceptance**:
  - Timeline vertical con línea central y cards alternadas (izquierda/par, derecha/impar)
  - Altas con badge verde "ALTA" y borde izquierdo verde
  - Bajas con badge rojo "BAJA" y borde izquierdo rojo
  - MarketSummary: "8 fichajes • 5 altas • 3 bajas • $2.5M invertidos"
  - Filtros: Todos (activo default), Altas, Bajas
  - Skeleton timeline mientras carga, error con retry, empty state
  - Ruta /fichajes configurada en App.tsx
- **Depends on**: T-001, T-004 de F01 (Layout)
