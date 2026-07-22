# Módulos: AntimonioFC

## Módulos del Sistema

### Frontend (React SPA)

| Módulo | Responsabilidad | Dependencias | Capa |
|--------|----------------|--------------|------|
| **pages/** | Páginas completas del sitio (home, plantilla, noticias, entradas, fichajes, admin) | components/, hooks/ | Presentación |
| **components/layout/** | Header, Footer, Sidebar, Navigation | design-system | Presentación |
| **components/ui/** | Button, Card, Badge, Input, Select, Modal (shadcn/ui) | — | Presentación |
| **components/sections/** | Bloques reutilizables: HeroSection, PlayerCard, NewsCard, FormationField, TicketCard | ui/, hooks/ | Presentación |
| **hooks/** | Hooks personalizados: useAuth, usePlayers, useNews, useTickets, useTransfers | services/ | Lógica |
| **services/** | Clientes API: apiClient.ts (axios instance), playerService, newsService, etc. | types/ | Infraestructura |
| **stores/** | Estado global con Zustand: authStore, uiStore | types/ | Estado |
| **types/** | Interfaces TypeScript compartidas: Player, News, Match, Ticket, User | — | Dominio |
| **data/** | Datos semilla: plantilla de 22 jugadores, cuerpo técnico, partidos | types/ | Datos |
| **utils/** | Utilidades: formatDate, formatCurrency, validators | — | Utilidades |
| **test/** | Configuración de testing, mocks, test utilities | — | Testing |

### Backend (Node.js + Express)

| Módulo | Responsabilidad | Dependencias | Capa |
|--------|----------------|--------------|------|
| **routes/** | Definición de endpoints REST | controllers/ | API |
| **controllers/** | Manejo de requests/responses, validación | services/ | API |
| **services/** | Lógica de negocio: PlayerService, NewsService, TicketService, AuthService | repositories/ | Lógica |
| **repositories/** | Acceso a datos via Prisma | prisma/ | Datos |
| **scrapers/** | Scraping de noticias: NewsScraper, SourceConfig | services/ | Infraestructura |
| **middleware/** | Auth middleware (JWT), rate limiting, error handler | — | Infraestructura |
| **prisma/** | Schema, migrations, seed | — | Datos |
| **types/** | Interfaces compartidas backend | — | Dominio |
| **utils/** | Utilidades backend: jwt, hash, date | — | Utilidades |

## Estructura de Carpetas

```
AntimonioFC/
├── spec/                              # Especificaciones SDD
│   ├── constitution/
│   │   ├── mission.md
│   │   ├── tech-stack.md
│   │   └── roadmap.md
│   ├── architecture/
│   │   ├── pattern.md
│   │   ├── modules.md
│   │   └── decisions.md
│   ├── design/
│   │   ├── screens-and-flows.md
│   │   ├── design-system.md
│   │   └── decisions.md
│   ├── images/
│   │   └── prompts.md
│   └── features/
│       ├── 001-design-system/
│       ├── 002-home-page/
│       └── ...
│
├── frontend/                          # React SPA (Vite)
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── public/
│   │   ├── images/
│   │   │   ├── shield.svg            # Escudo del club
│   │   │   ├── stadium.jpg           # Estadio
│   │   │   ├── banners/              # Banners del sitio
│   │   │   ├── players/              # Avatares de jugadores
│   │   │   └── flags/                # Banderas del club
│   │   ├── fonts/
│   │   └── favicon.svg
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── index.css
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.tsx
│       │   │   ├── Footer.tsx
│       │   │   ├── Navigation.tsx
│       │   │   └── Layout.tsx
│       │   ├── ui/                   # shadcn/ui components
│       │   │   ├── button.tsx
│       │   │   ├── card.tsx
│       │   │   ├── badge.tsx
│       │   │   ├── input.tsx
│       │   │   ├── select.tsx
│       │   │   ├── modal.tsx
│       │   │   └── tabs.tsx
│       │   └── sections/
│       │       ├── HeroSection.tsx
│       │       ├── PlayerCard.tsx
│       │       ├── FormationField.tsx
│       │       ├── NewsCard.tsx
│       │       ├── TicketCard.tsx
│       │       ├── TransferCard.tsx
│       │       ├── UpcomingMatches.tsx
│       │       └── MembershipPlans.tsx
│       ├── pages/
│       │   ├── HomePage.tsx
│       │   ├── SquadPage.tsx
│       │   ├── FormationPage.tsx
│       │   ├── NewsPage.tsx
│       │   ├── NewsDetailPage.tsx
│       │   ├── TicketsPage.tsx
│       │   ├── MembershipPage.tsx
│       │   ├── TransfersPage.tsx
│       │   ├── ContactPage.tsx
│       │   ├── LoginPage.tsx
│       │   ├── RegisterPage.tsx
│       │   ├── ProfilePage.tsx
│       │   └── admin/
│       │       ├── DashboardPage.tsx
│       │       ├── PlayersAdminPage.tsx
│       │       ├── MatchesAdminPage.tsx
│       │       └── NewsAdminPage.tsx
│       ├── hooks/
│       │   ├── usePlayers.ts
│       │   ├── useNews.ts
│       │   ├── useTickets.ts
│       │   ├── useAuth.ts
│       │   ├── useTransfers.ts
│       │   └── useMatches.ts
│       ├── services/
│       │   ├── apiClient.ts
│       │   ├── playerService.ts
│       │   ├── newsService.ts
│       │   ├── ticketService.ts
│       │   ├── authService.ts
│       │   ├── transferService.ts
│       │   └── matchService.ts
│       ├── stores/
│       │   ├── authStore.ts
│       │   └── uiStore.ts
│       ├── types/
│       │   ├── player.ts
│       │   ├── news.ts
│       │   ├── match.ts
│       │   ├── ticket.ts
│       │   ├── user.ts
│       │   ├── transfer.ts
│       │   └── index.ts
│       ├── data/
│       │   ├── players.ts            # Plantilla completa (22 jugadores)
│       │   ├── coachingStaff.ts       # Cuerpo técnico
│       │   ├── matches.ts             # Próximos partidos
│       │   └── formations.ts          # Formaciones tácticas
│       ├── utils/
│       │   ├── formatDate.ts
│       │   ├── formatCurrency.ts
│       │   ├── cn.ts                  # clsx + tailwind-merge
│       │   └── validators.ts
│       └── test/
│           ├── setup.ts
│           └── utils.tsx
│
├── backend/                           # Node.js + Express + Prisma
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   ├── src/
│   │   ├── index.ts                  # Entry point
│   │   ├── app.ts                    # Express app setup
│   │   ├── routes/
│   │   │   ├── index.ts
│   │   │   ├── playerRoutes.ts
│   │   │   ├── newsRoutes.ts
│   │   │   ├── ticketRoutes.ts
│   │   │   ├── authRoutes.ts
│   │   │   ├── transferRoutes.ts
│   │   │   ├── matchRoutes.ts
│   │   │   └── userRoutes.ts
│   │   ├── controllers/
│   │   │   ├── playerController.ts
│   │   │   ├── newsController.ts
│   │   │   ├── ticketController.ts
│   │   │   ├── authController.ts
│   │   │   ├── transferController.ts
│   │   │   └── matchController.ts
│   │   ├── services/
│   │   │   ├── playerService.ts
│   │   │   ├── newsService.ts
│   │   │   ├── ticketService.ts
│   │   │   ├── authService.ts
│   │   │   ├── transferService.ts
│   │   │   └── scraperService.ts
│   │   ├── repositories/
│   │   │   ├── playerRepository.ts
│   │   │   ├── newsRepository.ts
│   │   │   ├── ticketRepository.ts
│   │   │   ├── userRepository.ts
│   │   │   └── transferRepository.ts
│   │   ├── scrapers/
│   │   │   ├── baseScraper.ts
│   │   │   ├── emolScraper.ts
│   │   │   ├── laterceraScraper.ts
│   │   │   └── sourceConfig.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   ├── errorHandler.ts
│   │   │   ├── validate.ts
│   │   │   └── rateLimiter.ts
│   │   ├── types/
│   │   │   ├── player.ts
│   │   │   ├── news.ts
│   │   │   ├── match.ts
│   │   │   ├── ticket.ts
│   │   │   └── user.ts
│   │   └── utils/
│   │       ├── jwt.ts
│   │       ├── hash.ts
│   │       └── date.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── migrations/
│   │   └── seed.ts
│   └── tests/
│       ├── services/
│       ├── controllers/
│       └── scrapers/
│
├── outputs/                          # Salidas del pipeline SDD
│   ├── architecture/
│   ├── design/
│   ├── planning/
│   ├── development/
│   └── qa/
│
├── package.json                      # Root workspace scripts
├── .gitignore
├── README.md
└── AGENT.md
```

## Responsabilidad de Capas

### Presentation Layer (Frontend)
- Renderizado de componentes React
- Manejo de eventos de usuario (clicks, formularios, navegación)
- Estado de UI (modales, tabs, loading states)
- Consumo de API REST via services/
- NO contiene lógica de negocio

### API Layer (Backend Routes/Controllers)
- Recepción de requests HTTP
- Validación de inputs (zod)
- Transformación request → service call → response
- Manejo de errores HTTP (400, 401, 404, 500)
- NO contiene lógica de negocio

### Service Layer (Backend Services)
- Toda la lógica de negocio del dominio
- Orquestación entre repositorios
- Scraping y procesamiento de noticias
- Cálculos de precios, descuentos, membresías
- Autenticación y autorización

### Data Layer (Backend Repositories + Prisma)
- Acceso a base de datos via Prisma ORM
- Consultas tipadas
- Transacciones
- NO contiene lógica de negocio

### Infrastructure Layer
- Scrapers (Cheerio + Axios)
- Middleware (JWT, CORS, helmet)
- Clientes externos (Cloudinary para imágenes)
- node-cron para scraping periódico
