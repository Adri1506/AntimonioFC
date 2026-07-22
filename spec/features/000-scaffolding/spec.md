# Feature: F00 — Scaffolding del Proyecto

## Descripción
Configuración inicial del proyecto: inicializar el monorepo con frontend (Vite + React + TypeScript + Tailwind + shadcn/ui) y backend (Node.js + Express + TypeScript + Prisma + PostgreSQL). Estructura de carpetas según `spec/architecture/modules.md`, ESLint, Prettier, y scripts de desarrollo.

## Acceptance Criteria
- [ ] AC-01: El proyecto frontend se inicializa con Vite 6 + React 18 + TypeScript y corre `npm run dev` sin errores
- [ ] AC-02: Tailwind CSS 3.4 está configurado con los tokens de color del club (#000080, #FF6500)
- [ ] AC-03: shadcn/ui está inicializado con los componentes base (Button, Card, Badge, Input, Select)
- [ ] AC-04: El backend Express + TypeScript compila y responde a GET /api/health con { status: "ok" }
- [ ] AC-05: Prisma ORM está configurado con schema inicial y conexión a PostgreSQL/SQLite
- [ ] AC-06: ESLint + Prettier están configurados y ejecutan sin errores
- [ ] AC-07: La estructura de carpetas coincide con spec/architecture/modules.md
- [ ] AC-08: El root package.json tiene scripts para arrancar frontend y backend simultáneamente

## Out of Scope
- Implementación de lógica de negocio (solo setup)
- Datos seed (se hará en features específicas)
- Configuración de deploys (Vercel/Railway)
