# Patrón Arquitectónico: AntimonioFC

## Patrón Seleccionado
**SPA con API REST Backend — Arquitectura en Capas (Layered)**

```
 ┌────────────────────────────────────────────────────┐
 │                  CLIENTE (Browser)                  │
 │  ┌──────────────────────────────────────────────┐   │
 │  │         React SPA (Presentation Layer)        │   │
 │  │  Pages → Components → Hooks → State           │   │
 │  │  Tailwind CSS + shadcn/ui                     │   │
 │  └──────────────┬───────────────────────────────┘   │
 │                 │ HTTP (REST)                       │
 └─────────────────┼──────────────────────────────────┘
                   │
                   ▼
 ┌────────────────────────────────────────────────────┐
 │               BACKEND (Node.js + Express)            │
 │  ┌──────────────────────────────────────────────┐   │
 │  │     API Layer (Controllers / Routes)          │   │
 │  ├──────────────────────────────────────────────┤   │
 │  │     Service Layer (Business Logic)            │   │
 │  │  ├─ PlayerService  ├─ TicketService           │   │
 │  │  ├─ NewsService    ├─ AuthService             │   │
 │  │  └─ TransferService└─ ScraperService          │   │
 │  ├──────────────────────────────────────────────┤   │
 │  │     Data Layer (Repositories / Prisma)        │   │
 │  └──────────────┬───────────────────────────────┘   │
 │                 │                                    │
 └─────────────────┼────────────────────────────────────┘
                   │
                   ▼
         ┌─────────────────┐
         │   PostgreSQL     │
         │   (Base Datos)   │
         └─────────────────┘
```

## Architecture Type
**Monolítico con Frontend SPA desacoplado**
- Backend: Monolith en Node.js + Express (un solo deploy)
- Frontend: SPA en React independiente (deploy separado en Vercel)
- Comunicación: API REST con JSON

## Justificación

| Factor | Evaluación |
|--------|-----------|
| **Complejidad del proyecto** | Media — 6 módulos funcionales, datos relacionales, scraping externo |
| **Escalabilidad necesaria** | Baja-Media — tráfico estimado de club regional (cientos, no millones) |
| **Equipo** | 1-3 desarrolladores |
| **Tiempo de desarrollo** | 4-8 semanas |
| **SEO** | No crítico (el contenido principal es interactivo, requiere login) |
| **Interactividad** | Alta — formación táctica, compra de entradas, timeline |

### Por qué esta arquitectura:
1. **Separación clara de capas**: Permite mantener el frontend React independiente del backend Express, lo que facilita el desarrollo paralelo y los tests.
2. **API REST estandarizada**: 6 endpoints principales (jugadores, partidos, noticias, entradas, socios, fichajes) que el frontend consume con React Query.
3. **Scraping como servicio**: El NewsScraperService corre con node-cron, scraping periódico que cachea en BD. No bloquea la UI.
4. **Prisma como ORM**: Type-safe, migrations fáciles, cambio entre SQLite (dev) y PostgreSQL (prod) es trivial.
5. **Zustand + React Query**: Estado global mínimo (Zustand para auth/theme), React Query para datos de servidor con caching automático.

## Alternativas Consideradas

| Alternativa | Motivo de descarte |
|-------------|-------------------|
| **Next.js (Full-stack)** | SSR añade complejidad innecesaria; el contenido no requiere SEO crítico. El frontend es principalmente interactivo (SPA). |
| **Python + FastAPI + Jinja** | Backend sólido pero pierdes la unificación del lenguaje con el frontend. Mayor overhead de aprendizaje. |
| **Firebase / Supabase (BaaS)** | Bueno para prototipado rápido, pero el scraping de noticias requiere lógica backend personalizada que un BaaS no resuelve. |
| **Clean Architecture** | Sobreingeniería para el alcance del proyecto. La complejidad adicional no se justifica para un club regional. |
| **Microservicios** | Desproporcionado. El proyecto es pequeño, 1 backend basta. Microservicios añadirían complejidad operativa sin beneficio real. |
| **Astro + islands** | Bueno para contenido estático, pero la formación táctica y la compra de entradas requieren mucha interactividad cliente. |
| **Vanilla MVC** | Falta de reactividad, peor experiencia de desarrollo, más código manual para interactividad moderna. |
