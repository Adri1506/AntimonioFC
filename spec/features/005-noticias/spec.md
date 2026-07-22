# Feature: F05 — Noticias

## Descripción
Módulo de noticias del club: backend con seed de noticias inventadas (club ficticio, no hay scraping real), endpoint GET con paginación, frontend con grid de noticias, filtros, detalle con breadcrumb e indicador de fuente.

## Acceptance Criteria
- [ ] AC-01: Prisma model Noticia con campos: id, titulo, resumen, contenido, fuente, url, imagen, categoria, fechaPublicacion, createdAt
- [ ] AC-02: Seed de 12-15 noticias inventadas sobre el club (fichajes, partidos, eventos, entrevistas)
- [ ] AC-03: Endpoint GET /api/noticias con paginación (?page=1&limit=6) y filtro por categoría
- [ ] AC-04: Endpoint GET /api/noticias/:id con detalle completo
- [ ] AC-05: Grid de NewsCards (3 columnas) con imagen, badge de fuente, titular, resumen, fecha
- [ ] AC-06: Filtro por categoría (Todas, Partidos, Fichajes, Club, Entrevistas)
- [ ] AC-07: Página de detalle con breadcrumb "Home > Noticias > [Título]", imagen destacada, contenido, "Ver fuente original"
- [ ] AC-08: Noticias relacionadas (3 últimas) al final del detalle
- [ ] AC-09: Estados: loading (skeleton grid), error, empty ("No hay noticias disponibles")

## Out of Scope
- Scraping real de medios deportivos (club ficticio)
- Panel admin para crear noticias (F10)
- Comentarios en noticias
