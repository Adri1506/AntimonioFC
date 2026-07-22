# Roadmap: AntimonioFC

## Feature Priority

```
F0   🏗️ Scaffolding del proyecto — Vite + configuración base
F1   🎨 Design System + Componentes UI base
F2   🏠 Home Page — Hero, próximos partidos, noticias destacadas
F3   📋 Plantilla — Base de datos de jugadores + visualización en lista
F4   ⚽ Formación Táctica — Plantilla interactiva en campo de fútbol
F5   📰 Noticias — Backend scraper + frontend de noticias
F6   🎟️ Entradas — Compra de entradas para partidos
F7   🆔 Socios — Registro y gestión de membresías
F8   🔄 Fichajes — Altas y bajas del club
F9   👤 Autenticación — Login/registro, roles (admin, hincha, socio)
F10  🔧 Panel Admin — CRUD de jugadores, partidos, fichajes, noticias
F11  📱 Responsive + PWA — Adaptación móvil, offline support básico
F12  🧪 Testing E2E — Playwright en flujos críticos
```

## Detalle por Feature

### F0 — Scaffolding
- Inicializar proyecto Vite + React + TypeScript
- Configurar Tailwind, shadcn/ui, Prisma, Express
- Crear estructura de carpetas según spec/architecture/modules.md
- Configurar ESLint + Prettier

### F1 — Design System
- Implementar paleta de colores (#000080, #FF6500 + derivados)
- Configurar tipografía (Barlow + Inter)
- Crear componentes base: Button, Card, Badge, Input, Select, Navigation, Footer
- Establecer layout global (Header, Main, Footer)

### F2 — Home Page
- Hero section con imagen de estadio y lema del club
- Sección de próximos partidos
- Últimas noticias destacadas (3 cards)
- Estadísticas rápidas del club
- CTA para hacerse socio / comprar entradas

### F3 — Plantilla
- Modelo de datos Jugador en Prisma
- Seed de 22 jugadores + cuerpo técnico
- Página de plantilla con grid de tarjetas de jugadores
- Filtro por posición (POR, DEF, MED, DEL)
- Modal con detalle del jugador

### F4 — Formación Táctica
- Canvas SVG / HTML con campo de fútbol visto desde arriba
- Posicionamiento de jugadores según formación (4-4-2 / 4-3-3)
- Avatares, números y nombres en cada posición
- Interactivo: hover para ver nombre, click para ver detalle
- Botón para cambiar entre formaciones

### F5 — Noticias
- Backend: scraper con Cheerio de medios deportivos chilenos
- Endpoint GET /api/noticias con paginación
- Frontend: lista de noticias con imagen, titular, fuente, fecha
- Filtro por categoría
- Detalle de noticia con contenido completo

### F6 — Entradas
- Lista de próximos partidos con opción de compra
- Modal de compra con selección de sector (Preferencia, General, Visita)
- Precios simulados en BD
- Confirmación de compra con código QR simulado
- Historial de compras del usuario

### F7 — Socios
- Planes de membresía (Bronce, Plata, Oro)
- Formulario de registro con descuento en entradas
- Beneficios visibles por categoría
- Gestión de renovación

### F8 — Fichajes
- Timeline de altas y bajas de la temporada
- Tarjetas de fichaje: jugador, club origen/destino, fecha, tipo (traspaso/cesión/fin contrato)
- Resumen de movimiento del mercado

### F9 — Autenticación
- Registro de usuario con email + contraseña
- Login con JWT
- Protección de rutas según rol
- Perfil de usuario con datos y membrecía

### F10 — Panel Admin
- Dashboard con estadísticas del club
- CRUD: jugadores, partidos, fichajes
- Gestión de noticias (aprobar manualmente si scraping falla)
- Gestión de socios y entradas

### F11 — Responsive + PWA
- Mobile-first para todas las pantallas
- Manifest.json + service worker básico
- Optimización de imágenes

### F12 — Testing E2E
- Playwright: flujo de compra de entradas
- Playwright: navegación completa del sitio
- Playwright: registro y login
