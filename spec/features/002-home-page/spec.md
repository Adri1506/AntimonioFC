# Feature: F02 — Home Page

## Descripción
Página principal del sitio con Hero section (escudo, estadio, lema "Fuerza y Corazón"), próximos partidos, últimas noticias destacadas, estadísticas del club y CTAs para socios y entradas.

## Acceptance Criteria
- [ ] AC-01: Hero section full-width con imagen de estadio de fondo, escudo del club, nombre "Antimonio FC", lema "Fuerza y Corazón" y CTA "Hazte Socio"
- [ ] AC-02: Sección "Próximos Partidos" muestra 3-4 tarjetas con rival, fecha, hora, competición y botón "Comprar Entradas"
- [ ] AC-03: Sección "Últimas Noticias" muestra 3 NewsCards con imagen, titular, fuente, fecha y resumen
- [ ] AC-04: Sección "El Club en Números" con estadísticas: socios, partidos jugados, goles, años de historia
- [ ] AC-05: Los datos se cargan desde la API backend con React Query (caching, loading skeleton, error state)
- [ ] AC-06: Las imágenes usan rutas relativas desde img/ (escudo.png, estadio.png, banner.png)
- [ ] AC-07: CTA "Compra tus Entradas" enlace a /entradas y "Hazte Socio" a /socios
- [ ] AC-08: Responsive: hero adapta altura en mobile, grid de partidos apila a 1 columna

## Out of Scope
- Backend de datos reales (se implementa en F03, F05, F06)
- Datos estáticos dummy para desarrollo (data/ en frontend)
