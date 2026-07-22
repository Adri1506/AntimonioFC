# Tasks: F00 — Scaffolding

## T-001: Inicializar frontend con Vite + React + TypeScript
- **Description**:
  - Ejecutar `npm create vite@latest frontend -- --template react-ts`, instalar dependencias base y verificar que `npm run dev` funciona.
  - **Pattern**: No aplica (setup inicial)
  - **Data Structure**: No aplica
- **Files**: `frontend/package.json`, `frontend/vite.config.ts`, `frontend/tsconfig.json`, `frontend/index.html`
- **Acceptance**:
  - `cd frontend && npm run dev` inicia servidor Vite sin errores
  - El navegador muestra página default de Vite + React
  - `npm run build` genera bundle sin errores
- **Depends on**: None

## T-002: Configurar Tailwind CSS + shadcn/ui con tokens del club
- **Description**:
  - Instalar Tailwind CSS 3.4, PostCSS, autoprefixer. Configurar tailwind.config.ts con colores del club (#000080, #FF6500). Inicializar shadcn/ui e instalar componentes base (Button, Card, Badge, Input, Select, Dialog/Tabs).
  - **Pattern**: Facade — shadcn/ui expone API simplificada sobre Radix UI (use_when: simplificar subsistema complejo)
  - **Data Structure**: Map — tokens de color almacenados como Map<token, hex> para acceso O(1)
- **Files**: `frontend/tailwind.config.ts`, `frontend/postcss.config.js`, `frontend/src/index.css`, `frontend/components.json`, `frontend/src/lib/utils.ts`
- **Acceptance**:
  - `tailwind.config.ts` incluye `#000080` como primary y `#FF6500` como accent
  - `npx shadcn@latest add button card badge input select` instala componentes sin errores
  - Un test component con `<Button variant="accent">` renderiza con color naranja
- **Depends on**: T-001

## T-003: Inicializar backend Express + TypeScript + Prisma
- **Description**:
  - Crear backend/ con package.json, Express + TypeScript, tsconfig, Prisma ORM. Schema inicial con todos los modelos (Usuario, Jugador, Partido, Noticia, Entrada, Socio, Fichaje). Endpoint GET /api/health.
  - **Pattern**: Singleton — PrismaClient como instancia única (use_when: garantizar única instancia de conexión BD)
  - **Data Structure**: Array — lista de rutas Express registradas O(n) para búsqueda
- **Files**: `backend/package.json`, `backend/tsconfig.json`, `backend/src/index.ts`, `backend/src/app.ts`, `backend/prisma/schema.prisma`, `backend/.env.example`
- **Acceptance**:
  - `cd backend && npx tsx src/index.ts` inicia servidor en puerto 3001
  - `curl GET /api/health` responde `{ "status": "ok", "timestamp": "..." }`
  - `npx prisma db push` crea tablas sin errores (SQLite en dev)
  - PrismaClient se importa como singleton desde `backend/src/utils/prisma.ts`
- **Depends on**: None

## T-004: Estructura de carpetas + ESLint + Prettier + root scripts
- **Description**:
  - Crear toda la estructura de carpetas según modules.md. Configurar ESLint + Prettier para frontend y backend. Root package.json con scripts concurrentes para dev.
  - **Pattern**: No aplica (configuración)
  - **Data Structure**: No aplica
- **Files**: `package.json` (root), `frontend/.eslintrc.cjs`, `frontend/.prettierrc`, `backend/.eslintrc.cjs`, `backend/.prettierrc`, `.gitignore`
- **Acceptance**:
  - `npm run lint` ejecuta sin errores en frontend y backend
  - `npm run dev` arranca frontend (puerto 5173) y backend (puerto 3001) concurrentemente
  - La estructura de carpetas coincide con `spec/architecture/modules.md`
  - `.gitignore` excluye node_modules, .env, dist, .prisma
- **Depends on**: T-001, T-003
