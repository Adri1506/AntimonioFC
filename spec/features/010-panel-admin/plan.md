# Plan: F10 — Panel Admin

## Componentes
- **AdminLayout.tsx** — Layout con sidebar vertical + header + contenido
- **AdminSidebar.tsx** — Sidebar con enlaces e iconos
- **DashboardCards.tsx** — Cards de resumen con estadísticas
- **DataTable.tsx** — Tabla reutilizable con acciones (editar/eliminar)
- **Forms**: PlayerForm.tsx, MatchForm.tsx, NewsForm.tsx
- **Pages**: DashboardPage.tsx, PlayersAdminPage.tsx, MatchesAdminPage.tsx, NewsAdminPage.tsx, MembersAdminPage.tsx, TicketsAdminPage.tsx

## Endpoints (admin — requieren rol ADMIN)
- `GET /api/admin/dashboard` — Estadísticas resumen
- `CRUD /api/jugadores` con PUT, DELETE (admin)
- `CRUD /api/partidos` con POST, PUT, DELETE (admin)
- `CRUD /api/noticias` con POST, PUT, DELETE (admin)
- `GET /api/admin/socios` — Lista de socios
- `GET /api/admin/entradas` — Lista de entradas

## Data Flow
```
/admin (AdminLayout)
├── Sidebar (navegación)
└── Content (según ruta)
    ├── Dashboard → GET /api/admin/dashboard
    ├── Jugadores → GET/POST/PUT /api/jugadores
    ├── Partidos → GET/POST/PUT/DELETE /api/partidos
    ├── Noticias → GET/POST/PUT/DELETE /api/noticias
    ├── Socios → GET /api/admin/socios
    └── Entradas → GET /api/admin/entradas
```

## Patrones Aplicados
- **Facade** — AdminDashboard expone datos agregados de múltiples fuentes. `use_when`: simplificar acceso a subsistema complejo.
- **Proxy** — AdminRoute + auth middleware protegen todas las rutas admin. `use_when`: control de acceso por rol.
- **Template Method** — DataTable reutilizable con slots para acciones. `use_when`: estructura común con detalles variables.

## Estructuras de Datos
- **Array** (O(n)) — Listas para tablas (jugadores, partidos, etc.)
- **Map** (O(1)) — Estadísticas del dashboard: `Map<'jugadores'|'socios'|'entradas'|'noticias', number>`

## Dependencias Externas
- shadcn/ui Table, Dialog, Form
- @tanstack/react-query

## Database Changes
- Endpoints nuevos pero modelos ya existentes
