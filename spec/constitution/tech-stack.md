# Tech Stack: AntimonioFC

## Selección Técnica

| Capa | Tecnología | Versión | Justificación |
|------|-----------|---------|---------------|
| **Lenguaje** | TypeScript | 5.x | Tipado estático, mejor mantenibilidad, ecosistema unificado frontend/backend |
| **Frontend** | React 18 + Vite 6 | 18.x / 6.x | SPA interactiva, renderizado rápido con Vite, ecosistema maduro |
| **Estilos** | Tailwind CSS | 3.4 | Utilidades primero, fácil theming con colores del club, responsive nativo |
| **UI Components** | shadcn/ui + Radix UI | latest | Componentes accesibles, personalizables, diseño system-friendly |
| **Backend** | Node.js + Express + TypeScript | 20 LTS / 4.x | API REST ligera, scraping web, familiar con el stack frontend |
| **ORM** | Prisma | 5.x | Type-safe, migrations automáticas, soporte PostgreSQL y SQLite |
| **Base de datos** | PostgreSQL (producción) / SQLite (desarrollo) | 16 / 3.x | Relacional, maduro, soporte Prisma nativo |
| **Scraping noticias** | Cheerio + Axios | latest | Scraping ligero desde medios deportivos chilenos públicos |
| **Autenticación** | JWT (jsonwebtoken + bcrypt) | latest | Simple, stateless, suficiente para el alcance del proyecto |
| **Testing Frontend** | Vitest + React Testing Library | latest | Rápido, integración nativa con Vite |
| **Testing Backend** | Jest + Supertest | latest | Estándar para APIs Express |
| **Testing E2E** | Playwright | latest | Automatización de navegador para flujos críticos |
| **Hosting Frontend** | Vercel | — | Deploy automático desde Git, soporte SPA, gratis |
| **Hosting Backend** | Railway / Render | — | Deploy sencillo para Node.js, PostgreSQL incluido |
| **Almacenamiento imágenes** | Cloudinary / ImgBB | — | CDN de imágenes con transformación |


## Stack Detallado por Módulo

### Frontend (React SPA)
```
React 18 + TypeScript + Vite 6
├── Tailwind CSS 3.4 (theming con colores del club)
├── shadcn/ui + Radix UI (componentes base)
├── react-router-dom v7 (routing)
├── react-hook-form + zod (formularios)
├── @tanstack/react-query (data fetching + caching)
├── recharts / nivo (gráficos si son necesarios)
└── Zustand (estado global liviano)
```

### Backend (Node.js API REST)
```
Node.js 20 LTS + Express + TypeScript
├── Prisma ORM (modelado y acceso a BD)
├── Cheerio + Axios (scraping noticias)
├── jsonwebtoken + bcrypt (auth)
├── cron / node-cron (scraping periódico)
├── zod (validación de inputs)
└── cors + helmet (seguridad)
```

### Base de Datos
```prisma
modelo Usuario { id, nombre, email, rol, socioId? }
modelo Jugador { id, nombre, edad, posicion, numero, nacionalidad, foto, equipo, activo }
modelo Partido { id, rival, fecha, local, resultado, competicion }
modelo Noticia { id, titulo, fuente, url, fechaPublicacion, resumen, contenido }
modelo Entrada { id, partidoId, usuarioId, sector, precio, fechaCompra }
modelo Socio { id, usuarioId, tipo, fechaInicio, activo }
modelo Fichaje { id, jugadorId, tipo, fecha, clubOrigen, clubDestino }
```

## Conventions

| Aspecto | Estándar |
|---------|----------|
| **Nombrado código** | camelCase (JS/TS), PascalCase (componentes React), kebab-case (archivos) |
| **Commits** | Conventional Commits: `feat:`, `fix:`, `refactor:`, `docs:`, `style:` |
| **Ramas** | `main`, `develop`, `feat/<nombre>`, `fix/<nombre>` |
| **Idioma código** | Inglés (variables, funciones, componentes) |
| **Idioma contenido** | Español (textos visibles, rutas URL, datos de jugadores) |
| **Formateo** | Prettier + ESLint con reglas estándar TypeScript |

## Dependencias Externas Clave

| Servicio | Propósito | Costo |
|----------|-----------|-------|
| Vercel | Hosting frontend (SPA) | Gratuito |
| Railway | Hosting backend + PostgreSQL | Desde $5/mes |
| Cloudinary | Almacenamiento y CDN de imágenes | Gratuito (25GB) |
| Google Fonts | Tipografía (Barlow + Inter) | Gratuito |
| NewsAPI / scraper | Fuente de noticias | Gratuito / crawling |
