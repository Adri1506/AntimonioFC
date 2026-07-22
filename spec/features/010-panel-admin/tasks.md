# Tasks: F10 — Panel Admin

## T-001: Crear Layout admin + dashboard + rutas protegidas
- **Description**:
  - Implementar AdminLayout.tsx con sidebar vertical (fondo azul marino oscuro, 240px, iconos + texto: Dashboard, Jugadores, Partidos, Noticias, Socios, Entradas). AdminSidebar.tsx con links y active state. DashboardPage.tsx con 4 cards: total jugadores, socios activos, entradas vendidas, noticias. Ruta /admin protegida con AdminRoute. Endpoint GET /api/admin/dashboard.
  - **Pattern**: Facade — dashboard expone datos agregados (use_when: simplificar subsistema); Proxy — AdminRoute protege rutas (use_when: control de acceso)
  - **Data Structure**: Map — estadísticas O(1)
- **Files**: `frontend/src/components/layout/AdminLayout.tsx`, `frontend/src/components/layout/AdminSidebar.tsx`, `frontend/src/pages/admin/DashboardPage.tsx`, `frontend/src/components/sections/DashboardCards.tsx`, `backend/src/routes/adminRoutes.ts`, `backend/src/controllers/adminController.ts`, `backend/src/services/adminService.ts`
- **Acceptance**:
  - AdminLayout con sidebar 240px + contenido a la derecha
  - Sidebar: 6 enlaces con iconos Lucide, active state resaltado
  - Dashboard con 4 cards: números grandes + label + ícono
  - Ruta /admin redirige a /login si no auth, a / si no ADMIN
  - `GET /api/admin/dashboard` devuelve { jugadores: 22, socios: X, entradas: Y, noticias: 12 }
- **Depends on**: T-004 de F09 (AdminRoute)

## T-002: Implementar CRUD de jugadores en admin
- **Description**:
  - Crear PlayersAdminPage.tsx con tabla (shadcn/ui Table) de jugadores: número, nombre, edad, posición, activo, acciones (editar, desactivar). Modal de formulario para crear/editar (PlayerForm.tsx con nombre, edad, posición, número, nacionalidad, activo). PUT /api/jugadores/:id y DELETE /api/jugadores/:id (desactivar, no borrar físicamente).
  - **Pattern**: Template Method — DataTable reutilizable para admin CRUDs (use_when: estructura común, detalles variables)
  - **Data Structure**: Array — jugadores para tabla O(n)
- **Files**: `frontend/src/pages/admin/PlayersAdminPage.tsx`, `frontend/src/components/sections/PlayerForm.tsx`, `backend/src/routes/playerRoutes.ts` (extender), `backend/src/controllers/playerController.ts` (extender)
- **Acceptance**:
  - Tabla con columnas: #, Nombre, Edad, Posición, Nacionalidad, Activo, Acciones
  - Editar: modal con formulario prellenado, cambios se guardan vía PUT
  - Desactivar: confirma con diálogo, set activo=false, badge "Inactivo" en rojo
  - Crear: modal vacío, POST crea nuevo jugador
- **Depends on**: T-001, T-003 de F03 (tipos de jugador)

## T-003: Implementar CRUD de partidos y noticias en admin
- **Description**:
  - Crear MatchesAdminPage.tsx (tabla de partidos + MatchForm.tsx con rival, fecha, estadio, competición, precios JSON). NewsAdminPage.tsx (tabla de noticias + NewsForm.tsx con titular, contenido, categoría, fuente, imagen URL). Endpoints POST/PUT/DELETE para partidos y noticias con auth ADMIN.
  - **Pattern**: Template Method — mismo patrón DataTable que T-002
  - **Data Structure**: Array — listas O(n)
- **Files**: `frontend/src/pages/admin/MatchesAdminPage.tsx`, `frontend/src/pages/admin/NewsAdminPage.tsx`, `frontend/src/components/sections/MatchForm.tsx`, `frontend/src/components/sections/NewsForm.tsx`, `backend/src/routes/matchRoutes.ts` (extender), `backend/src/routes/newsRoutes.ts` (extender)
- **Acceptance**:
  - Partidos: tabla con rival, fecha, competición, acciones. Crear/editar con formulario completo
  - Noticias: tabla con titular, categoría, fuente, fecha. Crear/editar con formulario
  - PUT actualiza registro, DELETE elimina (con confirmación)
  - Solo ADMIN puede acceder a estas rutas
- **Depends on**: T-002

## T-004: Implementar vistas de socios y entradas en admin
- **Description**:
  - Crear MembersAdminPage.tsx (lista de socios: nombre, tipo, fecha, activo, acciones para desactivar) y TicketsAdminPage.tsx (lista de entradas: partido, usuario, sector, cantidad, total, fecha). Filtro por partido en entradas.
  - **Pattern**: No aplica (vistas de lectura)
  - **Data Structure**: Array — listas O(n)
- **Files**: `frontend/src/pages/admin/MembersAdminPage.tsx`, `frontend/src/pages/admin/TicketsAdminPage.tsx`, `backend/src/routes/adminRoutes.ts` (extender)
- **Acceptance**:
  - Socios: tabla con nombre, email, tipo (Bronce/Plata/Oro), desde fecha, activo (sí/no)
  - Entradas: tabla con partido, usuario, sector, cantidad, total, fecha
  - Filtro de entradas por partido (dropdown)
  - Sidebar admin muestra enlaces a todas las secciones funcionando
- **Depends on**: T-003
