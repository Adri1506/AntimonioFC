# Tasks: F11 — Responsive + PWA

## T-001: Implementar menú hamburguesa mobile + responsive general
- **Description**:
  - Crear MobileNav.tsx con shadcn/ui Sheet (drawer desde derecha): lista completa de navegación, fondo azul marino, texto blanco. Adaptar Header.tsx para mostrar hamburguesa en <768px y menú horizontal en ≥768px. Revisar todas las páginas: grids responsive (1 col móvil, 2 tablet, 3-4 desktop usando Tailwind grid-cols-1 md:grid-cols-2 lg:grid-cols-3). Hero altura 60vh en mobile, 90vh desktop.
  - **Pattern**: No aplica (responsive design)
  - **Data Structure**: No aplica
- **Files**: `frontend/src/components/layout/MobileNav.tsx`, `frontend/src/components/layout/Header.tsx` (modificar), `frontend/src/components/sections/HeroSection.tsx` (modificar)
- **Acceptance**:
  - < 768px: hamburguesa visible, menú horizontal oculto
  - Click hamburguesa → drawer animado desde derecha con todos los links
  - Click en link → drawer se cierra + navegación
  - Click fuera del drawer → se cierra
  - Grids responsivos en todas las páginas
  - Hero: 60vh en mobile, 90vh en desktop, texto escala (h1 2rem móvil, 3.5rem desktop)
- **Depends on**: T-004 de F01 (Header), T-001 de F02 (Hero)

## T-002: Configurar PWA (manifest, service worker, meta tags)
- **Description**:
  - Crear manifest.json con nombre "Antimonio FC", colores #000080 y #FF6500, display standalone, icons 192x192 y 512x512 (usar escudo.png redimensionado). Instalar vite-plugin-pwa y configurar en vite.config.ts: service worker con estrategia cache-first para assets estáticos (imágenes, CSS, JS) y network-first para API. Meta tags en index.html: theme-color, apple-touch-icon, viewport.
  - **Pattern**: Proxy — service worker como proxy de red (use_when: controlar acceso a recursos de red)
  - **Data Structure**: Cache API — almacenamiento de responses O(n)
- **Files**: `frontend/public/manifest.json`, `frontend/vite.config.ts` (modificar), `frontend/index.html` (modificar), `frontend/public/icons/icon-192x192.png`, `frontend/public/icons/icon-512x512.png`
- **Acceptance**:
  - `manifest.json` con todos los campos requeridos (name, short_name, icons, start_url, display, theme_color, background_color)
  - Service worker registrado en producción (`npx vite build` genera sw)
  - Meta tag `<meta name="theme-color" content="#000080">` en index.html
  - Lighthouse PWA audit: manifest passes, service worker registered
  - standalone display mode configurado
- **Depends on**: T-001

## T-003: Optimizar imágenes + OfflineBanner
- **Description**:
  - Agregar loading="lazy" a todas las imágenes del sitio. Crear OfflineBanner.tsx (banner fijo abajo "Sin conexión. Algunos datos pueden no estar disponibles." que se muestra cuando navigator.onLine es false). Configurar estrategia cache-first para imágenes en service worker.
  - **Pattern**: No aplica (optimización)
  - **Data Structure**: No aplica
- **Files**: `frontend/src/components/sections/HeroSection.tsx` (lazy), `frontend/src/components/sections/PlayerCard.tsx` (lazy), `frontend/src/components/sections/NewsCard.tsx` (lazy), `frontend/src/components/sections/OfflineBanner.tsx`
- **Acceptance**:
  - Todas las `<img>` tienen loading="lazy" excepto hero (eager)
  - OfflineBanner se muestra al perder conexión, se oculta al recuperar
  - Imágenes cacheadas por service worker se sirven offline
- **Depends on**: T-002
