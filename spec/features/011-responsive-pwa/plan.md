# Plan: F11 — Responsive + PWA

## Componentes
- **MobileNav.tsx** — Menú hamburguesa con drawer (Sheet de shadcn/ui)
- **OfflineBanner.tsx** — Banner de conexión perdida
- **Service Worker**: sw.js (cache first para assets, network first para API)
- **Manifest**: manifest.json en public/

## Data Flow
```
Mobile < 768px
├── Header: hamburguesa visible, menú horizontal oculto
├── Hamburger click → Sheet/Drawer desde derecha con navegación
└── Layouts: 1 columna (mobile) → 2 (tablet) → 3-4 (desktop)

PWA
├── public/manifest.json (configuración)
├── public/sw.js (service worker)
├── public/icons/ (192x192, 512x512)
└── index.html (meta tags + theme-color)
```

## Patrones Aplicados
- **Proxy** — Service worker actúa como proxy de red: intercepta requests y sirve desde caché cuando es posible. `use_when`: controlar acceso a recursos de red.

## Estructuras de Datos
- **Cache API** (Service Worker) — Almacena responses de requests para offline: `Map<requestUrl, cachedResponse>`

## Dependencias Externas
- shadcn/ui Sheet (para menú hamburguesa)
- Vite PWA plugin (vite-plugin-pwa) para generación de service worker
- No requiere librería externa para responsive (Tailwind ya lo maneja)

## Database Changes
- Ninguno
