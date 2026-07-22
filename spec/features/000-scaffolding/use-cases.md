# Use Cases: F00 — Scaffolding

## UC-01: Inicializar Frontend
- **Actor:** Developer
- **Trigger:** Inicio del proyecto
- **Preconditions:** Node.js 20+ instalado
- **Main Flow:**
  Given un directorio vacío para el proyecto
  When se ejecuta `npm create vite@latest frontend -- --template react-ts`
  Then se crea el proyecto Vite con React + TypeScript
  And se puede ejecutar `npm run dev` y ver la página default

## UC-02: Configurar Tailwind + shadcn/ui
- **Actor:** Developer
- **Trigger:** Después de inicializar frontend
- **Preconditions:** Proyecto Vite creado
- **Main Flow:**
  Given el proyecto frontend creado
  When se instala Tailwind CSS 3.4 y se configura tailwind.config.ts
  And se ejecuta `npx shadcn@latest init`
  Then shadcn/ui está configurado con los tokens de color del club
- **Error Flow:**
  When la configuración de tokens falla
  Then se revierte a valores default y se muestra error en consola

## UC-03: Inicializar Backend
- **Actor:** Developer
- **Trigger:** Después de frontend
- **Preconditions:** Node.js 20+ instalado
- **Main Flow:**
  Given un directorio backend/
  When se inicializa package.json con Express + TypeScript
  And se configura Prisma con schema inicial
  Then el servidor Express responde a GET /api/health

## UC-04: Configurar ESLint + Prettier
- **Actor:** Developer
- **Trigger:** Después de inicializar ambos proyectos
- **Preconditions:** Frontend y backend creados
- **Main Flow:**
  Given los proyectos creados
  When se instala ESLint + Prettier y se copian configs
  Then `npm run lint` ejecuta sin errores
  And `npm run format` formatea el código correctamente
