# Feature: F11 — Responsive + PWA

## Descripción
Adaptación mobile completa del sitio (menú hamburguesa, layouts responsivos), configuración de PWA básica (manifest.json, service worker), optimización de imágenes.

## Acceptance Criteria
- [ ] AC-01: Menú hamburguesa funcional en mobile (< 768px) con drawer desde la derecha
- [ ] AC-02: Todas las páginas responsive: grid 1 col móvil, 2 tablet, 3-4 desktop
- [ ] AC-03: Hero section adapta altura (90vh desktop, 60vh mobile) y tamaños de texto
- [ ] AC-04: FormationField escalable en mobile (sin deformación)
- [ ] AC-05: Tablas admin responsivas con scroll horizontal en mobile
- [ ] AC-06: manifest.json con nombre, colores del club, iconos 192x192 y 512x512
- [ ] AC-07: Service worker básico que cachea assets estáticos (offline fallback)
- [ ] AC-08: Meta tags para PWA (theme-color, display standalone)
- [ ] AC-09: Imágenes optimizadas con lazy loading (loading="lazy") y placeholder blur

## Out of Scope
- Modo offline completo (solo cache de assets estáticos)
- Push notifications
- Sincronización en background
- Instalación nativa (solo PWA básica)
