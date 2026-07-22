# Feature: F10 — Panel Admin

## Descripción
Panel de administración con dashboard de estadísticas, CRUD de jugadores, partidos, noticias, entradas y socios. Acceso exclusivo para rol ADMIN.

## Acceptance Criteria
- [ ] AC-01: Dashboard con cards de resumen: total jugadores, socios activos, entradas vendidas, noticias publicadas
- [ ] AC-02: Sidebar de navegación admin con enlaces: Dashboard, Jugadores, Partidos, Noticias, Socios, Entradas
- [ ] AC-03: CRUD de jugadores: tabla con acciones (editar/desactivar), formulario de creación/edición
- [ ] AC-04: CRUD de partidos: crear/editar partidos con rival, fecha, estadio, competición, precios
- [ ] AC-05: CRUD de noticias: crear/editar noticias manualmente (para cuando scraping no aplica)
- [ ] AC-06: Vista de socios: lista de socios con tipo, estado, fecha de afiliación
- [ ] AC-07: Vista de entradas: lista de entradas vendidas con filtro por partido
- [ ] AC-08: Protección: todas las rutas /admin requieren rol ADMIN (AdminRoute)
- [ ] AC-09: Layout admin diferente: sidebar vertical + contenido

## Out of Scope
- Gráficos complejos (solo cards con números)
- Exportación de datos
- Roles más granular (solo ADMIN/USER)
