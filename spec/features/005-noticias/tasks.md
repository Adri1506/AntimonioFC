# Tasks: F05 — Noticias

## T-001: Crear modelo Noticia + seed de datos
- **Description**:
  - Agregar modelo Noticia (id, titulo, resumen, contenido, fuente, url, imagen, categoria, fechaPublicacion, createdAt) al schema.prisma. Crear seed con 12-15 noticias inventadas sobre el club: fichajes, resultados de partidos, eventos del club, entrevistas a jugadores, anuncios. Cada noticia tiene contenido de 3-5 párrafos.
  - **Pattern**: No aplica (modelado de datos)
  - **Data Structure**: Array — seed data O(n)
- **Files**: `backend/prisma/schema.prisma`, `backend/prisma/seed.ts`
- **Acceptance**:
  - Modelo Noticia con todos los campos requeridos en Prisma schema
  - Seed inserta 12-15 noticias en BD sin errores
  - Cada noticia tiene categoria: "Partido", "Fichaje", "Club", o "Entrevista"
  - Fechas distribuidas en los últimos 30 días
- **Depends on**: T-003 de F00 (Scaffolding)

## T-002: Implementar endpoints REST de noticias
- **Description**:
  - Crear newsRepository.ts, newsService.ts, newsController.ts, newsRoutes.ts. GET /api/noticias con paginación (page, limit default 6), filtro por categoría, ordenado por fecha desc. GET /api/noticias/:id con detalle. Validar inputs con zod.
  - **Pattern**: Facade — NewsService simplifica acceso a datos (use_when: simplificar subsistema); Iterator — paginación con offset (use_when: recorrido secuencial)
  - **Data Structure**: Array — resultados paginados O(n); Map — conteo total para paginación O(1)
- **Files**: `backend/src/routes/newsRoutes.ts`, `backend/src/controllers/newsController.ts`, `backend/src/services/newsService.ts`, `backend/src/repositories/newsRepository.ts`
- **Acceptance**:
  - `GET /api/noticias` devuelve primeras 6 noticias + total + hasMore
  - `GET /api/noticias?page=2&limit=6` devuelve siguientes 6
  - `GET /api/noticias?categoria=Fichajes` filtra correctamente
  - `GET /api/noticias/1` devuelve detalle completo con contenido
  - `GET /api/noticias/999` devuelve 404
- **Depends on**: T-001

## T-003: Crear NewsListPage con grid, filtros y paginación
- **Description**:
  - Implementar NewsPage.tsx con NewsFilter (tabs de categorías), NewsCard.tsx (imagen, badge fuente, titular, resumen, fecha), grid responsive 1-3 columnas, y paginación (botones Anterior/Siguiente o "Cargar más"). useNews hook con React Query. Estados loading (skeleton), error, empty.
  - **Pattern**: Observer — React Query para actualización automática (use_when: cambios requieren actualizar UI)
  - **Data Structure**: Array — cards para grid O(n)
- **Files**: `frontend/src/pages/NewsPage.tsx`, `frontend/src/components/sections/NewsCard.tsx`, `frontend/src/components/sections/NewsFilter.tsx`, `frontend/src/components/sections/NewsPagination.tsx`, `frontend/src/hooks/useNews.ts`, `frontend/src/services/newsService.ts`, `frontend/src/types/news.ts`
- **Acceptance**:
  - Grid muestra 6 NewsCards inicialmente
  - Filtros: Todas, Partidos, Fichajes, Club, Entrevistas
  - Paginación muestra página actual y total de páginas
  - NewsCard: imagen 16:9, badge "Fuente: [nombre]", titular Barlow, fecha relativa
  - Skeleton grid mientras carga, error con retry
- **Depends on**: T-002, T-004 de F01 (Layout)

## T-004: Crear NewsDetailPage con breadcrumb y relacionadas
- **Description**:
  - Implementar NewsDetailPage.tsx: breadcrumb "Home > Noticias > [Título]", imagen destacada, titular grande, fecha, fuente, contenido completo, botón "Ver fuente original". Sección de noticias relacionadas (3 últimas). Ruta /noticias/:id.
  - **Pattern**: No aplica (página de detalle)
  - **Data Structure**: Array — noticias relacionadas O(n)
- **Files**: `frontend/src/pages/NewsDetailPage.tsx`
- **Acceptance**:
  - Breadcrumb con links: Home → /, Noticias → /noticias, Título (texto, no link)
  - Imagen destacada ocupa ancho completo del contenedor
  - Badge de fuente: "Extraído de [nombre]" con color según fuente
  - Contenido con máximo 75 caracteres por línea
  - "Ver fuente original" abre URL en nueva pestaña
  - 3 noticias relacionadas al final
  - Ruta /noticias/:id configurada en App.tsx
- **Depends on**: T-003
