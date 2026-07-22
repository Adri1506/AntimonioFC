# Plan: F02 — Home Page

## Componentes
- **HeroSection.tsx** — Hero full-width con fondo de estadio, escudo, lema, CTA
- **UpcomingMatches.tsx** — Grid de tarjetas de próximos partidos
- **NewsCard.tsx** — Tarjeta de noticia (reutilizable en F05)
- **ClubStats.tsx** — Sección de estadísticas con contadores animados
- **Pages**: HomePage.tsx (orquestador)
- **Hooks**: useMatches.ts, useNews.ts (React Query)

## Data Flow
```
HomePage.tsx
├── HeroSection (estático, imágenes locales)
├── UpcomingMatches (useMatches → GET /api/partidos? proximos=true)
├── NewsCard x3 (useNews → GET /api/noticias?limit=3)
└── ClubStats (estático o GET /api/estadisticas)
```

## Patrones Aplicados
- **Observer** (React Query) — TanStack Query implementa el patrón Observer: los componentes se suscriben a queries y se actualizan automáticamente cuando los datos cambian. `use_when`: cambios requieren actualizar múltiples componentes.
- **Facade** — HeroSection simplifica la composición visual (imagen + escudo + texto + CTA) en un solo componente reutilizable. `use_when`: simplificar interfaz pública.

## Dependencias Externas
- @tanstack/react-query (ya en tech-stack)
- react-router-dom v7 (navegación)

## Database Changes
- Ninguno en esta feature (datos dummy locales o endpoint genérico)
- Endpoint GET /api/partidos?proximos=true (implementado en F06)
- Endpoint GET /api/noticias?limit=3 (implementado en F05)
