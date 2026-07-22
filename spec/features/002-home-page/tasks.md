# Tasks: F02 — Home Page

## T-001: Crear HeroSection con escudo, estadio y lema del club
- **Description**:
  - Implementar HeroSection.tsx con fondo de imagen (estadio.png), overlay gradient-hero, escudo del club (escudo.png), nombre "Antimonio FC" en Barlow ExtraBold, lema "Fuerza y Corazón", y botón CTA "Hazte Socio" (variante accent, link a /socios). Altura 90vh en desktop, 60vh en mobile.
  - **Pattern**: Facade — HeroSection encapsula composición visual compleja en interfaz simple (use_when: simplificar subsistema)
  - **Data Structure**: No aplica (componente visual)
- **Files**: `frontend/src/components/sections/HeroSection.tsx`, `frontend/src/pages/HomePage.tsx`
- **Acceptance**:
  - Hero ocupa 90vh en desktop con imagen de fondo nítida
  - Escudo.png se muestra centrado con 120px de ancho
  - Texto "Antimonio FC" en Barlow ExtraBold blanco
  - Lema "Fuerza y Corazón" en naranjo (#FF6500)
  - Botón "Hazte Socio" link a /socios con variante accent
  - En mobile (<768px) altura 60vh, escudo 80px
- **Depends on**: T-004 de F01 (Layout)

## T-002: Crear sección Próximos Partidos con MatchCards
- **Description**:
  - Implementar MatchCard.tsx (rival, fecha, hora, competición, precio desde) y UpcomingMatches.tsx que consume GET /api/partidos?proximos=true via useMatches hook (React Query). Grid responsive 1-4 columnas. Skeleton loading.
  - **Pattern**: Observer — React Query notifica a componentes cuando datos cambian (use_when: cambios requieren actualizar UI)
  - **Data Structure**: Array — lista de partidos O(n) para renderizado en grid
- **Files**: `frontend/src/components/sections/UpcomingMatches.tsx`, `frontend/src/components/sections/MatchCard.tsx`, `frontend/src/hooks/useMatches.ts`, `frontend/src/services/matchService.ts`, `frontend/src/types/match.ts`
- **Acceptance**:
  - Muestra 3-4 MatchCards con rival, fecha formato "Sáb 15 Jul", hora, competición
  - Cada card tiene botón "Comprar" link a /entradas
  - Skeleton cards se muestran mientras carga
  - Error state: "No pudimos cargar los partidos" con botón reintentar
  - Empty state: "Próximamente más partidos"
- **Depends on**: T-001

## T-003: Crear sección Últimas Noticias con NewsCards
- **Description**:
  - Implementar NewsCard.tsx (imagen, titular, fuente, fecha, resumen) y sección en HomePage con 3 noticias destacadas via useNews hook (GET /api/noticias?limit=3). Grid 1-3 columnas responsive. Estados loading/error/empty.
  - **Pattern**: Observer (React Query) — mismo patrón que T-002
  - **Data Structure**: Array — lista de noticias O(n) para renderizado
- **Files**: `frontend/src/components/sections/NewsCard.tsx`, `frontend/src/hooks/useNews.ts`, `frontend/src/services/newsService.ts`, `frontend/src/types/news.ts`
- **Acceptance**:
  - Muestra 3 NewsCards con imagen, titular, nombre de fuente, fecha relativa ("hace 2 días")
  - Click en card navega a /noticias/:id
  - Indicador de fuente: "Extraído de [fuente]"
  - Skeleton loading, error state con retry
- **Depends on**: T-001

## T-004: Crear sección ClubStats y configuración de rutas
- **Description**:
  - Implementar ClubStats.tsx con 4 contadores (Socios, Partidos Jugados, Goles, Años de Historia) con animación de conteo. Configurar react-router-dom con rutas base: "/" → HomePage, "/plantilla", "/formacion", "/noticias", "/entradas", "/socios", "/fichajes". 404 route.
  - **Pattern**: No aplica (configuración de routing)
  - **Data Structure**: Array — items de estadísticas para renderizado O(n)
- **Files**: `frontend/src/components/sections/ClubStats.tsx`, `frontend/src/App.tsx`, `frontend/src/pages/NotFoundPage.tsx`
- **Acceptance**:
  - ClubStats muestra 4 cards: "1,250 Socios", "468 Partidos", "892 Goles", "68 Años"
  - Números animan de 0 al valor final en 1.5s al hacer scroll (IntersectionObserver)
  - React Router tiene todas las rutas configuradas
  - Ruta inexistente muestra NotFoundPage con ilustración 404
- **Depends on**: T-001
