# Plan: F05 — Noticias

## Componentes
- **NewsCard.tsx** — Tarjeta de noticia (imagen, badge fuente, titular, resumen, fecha)
- **NewsFilter.tsx** — Filtro por categoría (Todas, Partidos, Fichajes, Club, Entrevistas)
- **NewsDetail.tsx** — Detalle de noticia con breadcrumb, contenido, relacionadas
- **NewsPagination.tsx** — Paginación o infinite scroll
- **Pages**: NewsPage.tsx (listado), NewsDetailPage.tsx (detalle)
- **Hooks**: useNews.ts (React Query con paginación)

## Endpoints
- `GET /api/noticias?page=1&limit=6&categoria=Fichajes` — Lista paginada
- `GET /api/noticias/:id` — Detalle

## Data Flow
```
NewsPage.tsx
├── NewsFilter (estado: categoria seleccionada)
├── NewsCard[] (useNews → GET /api/noticias?page=X&categoria=Y)
├── NewsPagination (next/prev)
└── Click → router → /noticias/:id

NewsDetailPage.tsx
├── Breadcrumb (Home > Noticias > Título)
├── Imagen destacada
├── Contenido + fuente
├── Botón "Ver fuente original"
└── Noticias relacionadas (GET /api/noticias?limit=3)
```

## Patrones Aplicados
- **Template Method** — El scraper service tiene una estructura base (fetch → parse → save) con variaciones por fuente. Aunque no hay scraping real (noticias precargadas), la arquitectura del servicio sigue este patrón para permitir scraping futuro. `use_when`: estructura de algoritmo compartida.
- **Iterator** — Paginación con cursor/offset. `use_when`: acceder secuencialmente a colecciones.
- **Facade** — NewsService expone interfaz simple para listado/búsqueda/detalle ocultando complejidad de Prisma queries. `use_when`: simplificar subsistema complejo.

## Estructuras de Datos
- **Array** (O(n)) — Noticias paginadas; búsqueda secuencial aceptable para conjuntos pequeños
- **Map** (O(1)) — Caché de categorías para filtros

## Dependencias Externas
- @tanstack/react-query (paginación + caching)
- react-router-dom (navegación detalle)

## Database Changes
- Nuevo modelo `Noticia` en schema.prisma
- Seed con 12-15 noticias inventadas (categorías: Partidos, Fichajes, Club, Entrevistas)
