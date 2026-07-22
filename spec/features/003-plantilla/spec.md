# Feature: F03 — Plantilla

## Descripción
Página de plantilla del club con grid de 22 jugadores + cuerpo técnico, filtros por posición, tarjetas de jugador con avatar/número/nombre/posición, modal de detalle con estadísticas y biografía.

## Acceptance Criteria
- [ ] AC-01: Prisma model Jugador creado con campos: id, nombre, edad, posicion, numero, nacionalidad, foto, activo, createdAt
- [ ] AC-02: Seed de 22 jugadores + 4 staff técnico con datos reales según spec/images/prompts.md
- [ ] AC-03: Endpoint GET /api/jugadores con filtro opcional por posición (POR, DEF, MED, DEL)
- [ ] AC-04: Endpoint GET /api/jugadores/:id con detalle completo del jugador
- [ ] AC-05: Grid responsive de PlayerCards (1 col móvil, 2 tablet, 3-4 desktop)
- [ ] AC-06: Filtro por posición con tabs: Todos | Porteros | Defensas | Mediocampistas | Delanteros
- [ ] AC-07: Modal de detalle con foto grande, datos personales, estadísticas, biografía
- [ ] AC-08: Sección de Cuerpo Técnico al final con 4 staff cards (DT, asistente, PF, médico)
- [ ] AC-09: Las imágenes de jugadores usan rutas desde img/ (portero1.png, defensa2.png, etc.)
- [ ] AC-10: Estados: loading (skeleton grid), error, empty ("No hay jugadores en esta categoría")

## Out of Scope
- Formación táctica (F04)
- CRUD admin de jugadores (F10)
- Estadísticas avanzadas por jugador
