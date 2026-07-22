# Tasks: F03 — Plantilla

## T-001: Crear modelos Prisma + seed de jugadores y staff
- **Description**:
  - Agregar modelo Jugador (id, nombre, edad, posicion, numero, nacionalidad, foto, activo, createdAt, equipo) y modelo StaffTecnico (id, nombre, edad, cargo, nacionalidad, foto) al schema.prisma. Crear seed.ts con los 22 jugadores + 4 staff según spec/images/prompts.md sección 9. Las rutas de fotos apuntan a img/.
  - **Pattern**: No aplica (modelado de datos)
  - **Data Structure**: Array — seed data como Array<Jugador> O(n)
- **Files**: `backend/prisma/schema.prisma`, `backend/prisma/seed.ts`
- **Acceptance**:
  - `npx prisma db push` crea tablas jugador y staff_tecnico
  - `npx tsx prisma/seed.ts` inserta 22 jugadores + 4 staff sin errores
  - Cada jugador tiene número único del 1 al 22
  - Staff incluye: Eduardo Zamorano (DT), Patricio Palma (Asistente), Marcelo Briones (PF), Dr. Juan Pablo Lagos (Médico)
- **Depends on**: T-003 de F00 (Scaffolding)

## T-002: Implementar endpoints REST de jugadores
- **Description**:
  - Crear playerRepository.ts (Prisma queries), playerService.ts (lógica), playerController.ts (handlers), playerRoutes.ts (GET /api/jugadores con ?posicion filter y GET /api/jugadores/:id). Validar inputs con zod.
  - **Pattern**: Facade — playerService expone API simplificada sobre Prisma (use_when: simplificar subsistema complejo)
  - **Data Structure**: Array — lista de jugadores O(n); Map — filtro por posición O(1)
- **Files**: `backend/src/routes/playerRoutes.ts`, `backend/src/controllers/playerController.ts`, `backend/src/services/playerService.ts`, `backend/src/repositories/playerRepository.ts`
- **Acceptance**:
  - `GET /api/jugadores` devuelve array de 22 jugadores con status 200
  - `GET /api/jugadores?posicion=DEL` devuelve solo 7 delanteros
  - `GET /api/jugadores/1` devuelve detalle de Matías Contreras
  - `GET /api/jugadores/999` devuelve 404 con mensaje "Jugador no encontrado"
  - Response incluye campos: id, nombre, edad, posicion, numero, nacionalidad, foto, activo
- **Depends on**: T-001

## T-003: Crear Frontend SquadPage con PlayerCards y filtros
- **Description**:
  - Implementar SquadPage.tsx con PositionFilter (tabs: Todos|POR|DEF|MED|DEL), PlayerCard.tsx (imagen desde img/, número, nombre, posición), grid responsive. usePlayers hook con React Query. Estados loading (skeleton grid 6 cards), error (mensaje + retry), empty.
  - **Pattern**: Iterator — renderizado de lista con filtro (use_when: acceder secuencialmente); Observer — React Query (use_when: cambios automaticos en UI)
  - **Data Structure**: Array — jugadores filtrados O(n) para grid
- **Files**: `frontend/src/pages/SquadPage.tsx`, `frontend/src/components/sections/PlayerCard.tsx`, `frontend/src/components/sections/PositionFilter.tsx`, `frontend/src/hooks/usePlayers.ts`, `frontend/src/services/playerService.ts`, `frontend/src/types/player.ts`
- **Acceptance**:
  - Grid muestra 22 PlayerCards en 3-4 columnas desktop, 2 tablet, 1 mobile
  - Cada card: img de img/defensa2.png (según número), número grande, nombre, badge posición
  - Tabs filtran correctamente: Todos (22), Porteros (3), Defensas (6), Mediocampistas (6), Delanteros (7)
  - Skeleton grid con shimmer mientras carga
  - Error state con botón "Reintentar"
  - Empty state: "No hay jugadores en esta categoría"
- **Depends on**: T-002, T-004 de F01 (Layout)

## T-004: Crear PlayerModal de detalle + StaffSection
- **Description**:
  - Implementar PlayerModal.tsx con shadcn/ui Dialog: foto grande del jugador, datos personales (nombre, edad, nacionalidad, posición, número), biografía. StaffCard.tsx y StaffSection.tsx con 4 staff al final de la página. data/coachingStaff.ts con datos estáticos.
  - **Pattern**: Proxy — modal carga detalle bajo demanda (use_when: carga perezosa)
  - **Data Structure**: Map — datos de staff por cargo O(1)
- **Files**: `frontend/src/components/sections/PlayerModal.tsx`, `frontend/src/components/sections/StaffCard.tsx`, `frontend/src/components/sections/StaffSection.tsx`, `frontend/src/data/coachingStaff.ts`
- **Acceptance**:
  - Click en PlayerCard abre modal con animación fade+scale
  - Modal muestra foto grande, nombre, edad, "Chile", posición, número
  - Biografía: texto de 2-3 líneas sobre el jugador
  - Cerrar modal: click en X o fuera del modal
  - StaffSection al final de SquadPage con 4 StaffCards (foto, nombre, cargo)
  - Staff usa imágenes desde img/coach-dt.png, coach-assistant.png, etc.
- **Depends on**: T-003
