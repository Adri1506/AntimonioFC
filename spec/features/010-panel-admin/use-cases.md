# Use Cases: F10 — Panel Admin

## UC-01: Ver dashboard admin
- **Actor:** Admin
- **Trigger:** Navegar a /admin
- **Preconditions:** Autenticado como ADMIN
- **Main Flow:**
  Given el admin autenticado
  When navega a "/admin"
  Then ve sidebar con opciones de navegación
  And ve cards de resumen: jugadores, socios, entradas, noticias

## UC-02: Gestionar jugadores (CRUD)
- **Actor:** Admin
- **Trigger:** Click en "Jugadores" del sidebar
- **Preconditions:** Autenticado como ADMIN
- **Main Flow:**
  Given el admin en /admin/jugadores
  When ve la tabla con todos los jugadores
  Then puede editar un jugador (cambiar nombre, edad, posición, número, activo)
  And puede desactivar un jugador (activo = false)
  And puede crear un nuevo jugador con formulario completo

## UC-03: Gestionar partidos (CRUD)
- **Actor:** Admin
- **Trigger:** Click en "Partidos" del sidebar
- **Preconditions:** Autenticado como ADMIN
- **Main Flow:**
  Given el admin en /admin/partidos
  When ve la lista de partidos
  Then puede crear un nuevo partido (rival, fecha, estadio, competición, local, precios)
  And puede editar un partido existente
  And puede eliminar un partido (si no tiene entradas vendidas)

## UC-04: Gestionar noticias
- **Actor:** Admin
- **Trigger:** Click en "Noticias" del sidebar
- **Preconditions:** Autenticado como ADMIN
- **Main Flow:**
  Given el admin en /admin/noticias
  When ve la lista de noticias
  Then puede crear una noticia manual (titular, contenido, categoría, fuente, imagen)
  And puede editar o eliminar noticias existentes
