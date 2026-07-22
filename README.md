# AntimonioFC ⚽

Plataforma web del Club AntimonioFC — gestión de jugadores, noticias, formación táctica, tickets, membresías y más.

## Stack

- **Frontend:** React + TypeScript + Vite
- **Backend:** Express + TypeScript + Prisma
- **Base de datos:** PostgreSQL

## Requisitos

- Node.js 18+
- PostgreSQL

## Instalación

```bash
# Instalar dependencias
npm install
cd frontend && npm install
cd ../backend && npm install

# Configurar variables de entorno
cp backend/.env.example backend/.env
# Editar backend/.env con tus credenciales

# Inicializar BD
cd backend && npx prisma migrate dev

# Iniciar desarrollo
npm run dev
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia frontend y backend en paralelo |
| `npm run build` | Build del frontend |
| `npm run lint` | Linter frontend + typecheck backend |

## Licencia

MIT
