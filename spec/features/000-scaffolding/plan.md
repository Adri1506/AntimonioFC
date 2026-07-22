# Plan: F00 — Scaffolding

## Componentes
- **Frontend**: Vite 6 + React 18 + TypeScript + Tailwind 3.4 + shadcn/ui
- **Backend**: Node.js + Express + TypeScript + Prisma ORM
- **Shared**: ESLint + Prettier configs

## Data Flow
```
Developer → npm create vite → frontend/ (Vite + React)
         → npm install → backend/ (Express + Prisma)
         → npx shadcn init → frontend/src/components/ui/ (shadcn)
         → npx prisma init → backend/prisma/schema.prisma
```

## Patrones Aplicados
- **Singleton** — PrismaClient: Una sola instancia del cliente de BD compartida por toda la app. `use_when`: necesitas instancia única y acceso global. Justificación: Prisma recomienda Singleton para evitar múltiples conexiones en desarrollo.
- **Facade** — Express Router + shadcn/ui: Ambas herramientas exponen APIs simplificadas que ocultan complejidad interna. `use_when`: interfaz simple para subsistemas complejos.

## Dependencias Externas
- Vite 6 + React 18 + TypeScript (frontend)
- Tailwind CSS 3.4 + shadcn/ui (componentes)
- Express 4.x + Prisma 5.x (backend)
- ESLint + Prettier (lint/format)
- Concurrently (ejecutar frontend+backend simultáneo)

## Database Changes
- Schema inicial de Prisma (prisma/schema.prisma) con modelos base: Usuario, Jugador, Partido, Noticia, Entrada, Socio, Fichaje
- Provider: sqlite (dev) / postgresql (prod)

## Estructura de Carpetas
Se crea la estructura completa según `spec/architecture/modules.md`:
```
AntimonioFC/
├── frontend/ (Vite + React + TS)
│   ├── src/
│   │   ├── components/{layout,ui,sections}/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── stores/
│   │   ├── types/
│   │   ├── data/
│   │   └── utils/
├── backend/ (Express + Prisma)
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── middleware/
│   │   └── types/
│   └── prisma/
│       └── schema.prisma
├── img/ (imágenes existentes)
├── spec/ (especificaciones)
└── package.json (root scripts)
```
