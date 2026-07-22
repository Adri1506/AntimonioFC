# Architecture Decisions: AntimonioFC

## Decision Log

### ADR-001: React SPA + API REST vs Next.js Fullstack
- **Fecha**: 2026-07-14
- **Contexto**: Necesitamos una web interactiva con formación táctica, compra de entradas y dashboard admin. Se consideró Next.js por SSR y SEO.
- **Decisión**: Usar React SPA (Vite) + Express API REST separados.
- **Consecuencias**:
  - ✅ Frontend y backend desacoplados, equipos paralelos posibles
  - ✅ Deploy independiente (Vercel frontend, Railway backend)
  - ✅ Menor complejidad de build que Next.js
  - ❌ Sin SSR nativo (SEO limitado en páginas dinámicas)
  - ❌ Dos deploys separados
- **Alternativas**: Next.js (descartado por sobreingeniería para el alcance), Astro (descartado por limitaciones de interactividad)

### ADR-002: PostgreSQL como Base de Datos Relacional
- **Fecha**: 2026-07-14
- **Contexto**: Necesitamos persistir jugadores, partidos, noticias, usuarios, entradas, socios y fichajes. Relaciones claras entre entidades.
- **Decisión**: PostgreSQL (producción) / SQLite (desarrollo) via Prisma ORM.
- **Consecuencias**:
  - ✅ Prisma permite cambiar de SQLite a PostgreSQL con 1 línea de configuración
  - ✅ Type-safe queries con generación automática de tipos
  - ✅ Migraciones automatizadas
  - ❌ PostgreSQL requiere servicio externo (Railway, Supabase)
- **Alternativas**: MongoDB (descartado por relaciones entre entidades), Firebase (descartado por falta de control en scraping)

### ADR-003: Cheerio + Axios para Scraping de Noticias
- **Fecha**: 2026-07-14
- **Contexto**: Necesitamos extraer noticias del club desde medios deportivos chilenos públicos (El Mercurio, La Tercera, AS Chile, ADN Radio).
- **Decisión**: Cheerio + Axios con node-cron para scraping periódico.
- **Consecuencias**:
  - ✅ Sin costos de API externa
  - ✅ Control total sobre qué y cómo se extrae
  - ✅ Caché en BD local para evitar over-scraping
  - ❌ Dependencia de la estructura HTML de los sitios fuente (frágil)
  - ❌ Posible bloqueo por rate limiting de medios
- **Alternativas**: NewsAPI (costoso, cobertura limitada en Chile), RSS feeds (cada vez menos comunes), Puppeteer (más pesado, overhead innecesario)

### ADR-004: React Query (@tanstack/react-query) para Data Fetching
- **Fecha**: 2026-07-14
- **Contexto**: Múltiples llamadas API desde el frontend con necesidad de caching, refetch y estados de carga.
- **Decisión**: Usar React Query como capa de fetching con axios como cliente HTTP.
- **Consecuencias**:
  - ✅ Caching automático con stale-while-revalidate
  - ✅ Estados de loading/error/success tipados
  - ✅ Refetch automático al reenfocar ventana
  - ❌ Overhead de bundle (~12KB gzip)
  - ❌ Curva de aprendizaje inicial
- **Alternativas**: RTK Query (más pesado, acoplado a Redux), SWR (menos features que React Query), fetch manual (mucho boilerplate)

### ADR-005: Zustand para Estado Global vs Redux/Context
- **Fecha**: 2026-07-14
- **Contexto**: Necesitamos estado global mínimo: autenticación, tema, UI state (modales abiertos). No justifica Redux.
- **Decisión**: Zustand para estado global, React Query para datos de servidor.
- **Consecuencias**:
  - ✅ Bundle mínimo (~1KB)
  - ✅ API simple, sin boilerplate
  - ✅ Persistencia opcional con zustand/middleware
  - ❌ Sin devtools tan potentes como Redux
- **Alternativas**: Redux Toolkit (sobreingeniería para el alcance), React Context (renders innecesarios, mayor boilerplate)

### ADR-006: Formación Táctica con SVG/Canvas en React
- **Fecha**: 2026-07-14
- **Contexto**: La formación táctica necesita posicionar 11 jugadores en un campo de fútbol con interacción (hover, click).
- **Decisión**: SVG renderizado en React (componente FormationField), no Canvas. Los avatares son imágenes estáticas posicionadas con coordenadas predefinidas según la formación.
- **Consecuencias**:
  - ✅ SVG es declarativo, fácil de integrar con React
  - ✅ Escalable sin pérdida de calidad
  - ✅ Eventos de mouse nativos (onClick, onHover)
  - ❌ Menor rendimiento que Canvas con muchas animaciones (no es el caso)
- **Alternativas**: Canvas (descartado: más complejo, menos accesible), librería externa como konva (overhead innecesario), HTML/CSS puro (limitado para el campo)

### ADR-007: shadcn/ui como Base de Componentes
- **Fecha**: 2026-07-14
- **Contexto**: Necesitamos componentes accesibles y personalizables con los colores del club.
- **Decisión**: shadcn/ui (Radix UI + Tailwind) con custom tokens para #000080 y #FF6500.
- **Consecuencias**:
  - ✅ Componentes accesibles (WCAG AA por defecto)
  - ✅ Código en nuestro repo (no black box), totalmente personalizable
  - ✅ Theming via CSS variables
  - ❌ Setup inicial requiere configuración de tokens
- **Alternativas**: Material UI (pesado, difícil de customizar), Chakra UI (menos performance), Ant Design (look corporativo chino, difícil de adaptar a identidad deportiva)

## Assumptions
1. **Tráfico esperado**: < 10,000 visitas/mes (club regional). No requiere escalamiento horizontal.
2. **Noticias**: Los medios deportivos chilenos mantendrán estructuras HTML estables durante el ciclo de vida del proyecto.
3. **Pagos**: La compra de entradas es simulada (no integración con pasarela real). Suficiente para demo y MVP.
4. **Autenticación**: JWT simple es suficiente. No se requiere OAuth, SSO ni 2FA.
5. **Formación táctica**: Las coordenadas de los jugadores se definen estáticamente según la formación (4-4-2, 4-3-3). No hay arrastrar y soltar en esta fase.
6. **Imágenes**: Serán generadas por IA externa (Midjourney / DALL-E / Stable Diffusion). No hay presupuesto para fotografía profesional.

## Constraints
1. **Presupuesto**: $0 para servicios externos en fase inicial (excepto hosting).
2. **Tiempo**: 4-8 semanas para MVP funcional.
3. **Equipo**: 1 desarrollador full-stack (no hay equipo de diseño independiente).
4. **SEO**: No es crítico. El sitio se promocionará principalmente desde redes sociales del club.
5. **Mobile**: Debe ser responsive pero no se requiere app nativa.

## Risks

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Los medios deportivos cambian su estructura HTML | Media | Alto | Validación periódica del scraper, logging de errores, notificación al admin |
| Bajo engagement de usuarios | Baja | Medio | Diseño atractivo, contenido actualizado, CTA claros |
| Las imágenes IA no se ven consistentes | Alta | Medio | Prompts detallados, mismo estilo para todas, post-procesado con filtros uniformes |
| Crecimiento de la BD de noticias | Baja | Bajo | Paginación, eliminación de noticias antiguas (>6 meses) |
| Problemas de rendimiento en formación táctica móvil | Baja | Medio | Optimización de SVGs, lazy loading de avatares, skeleton loading |
| Dependencia de servicios de hosting gratuitos | Media | Bajo | Documentar migración a hosting pago, mantener configuraciones como código |
