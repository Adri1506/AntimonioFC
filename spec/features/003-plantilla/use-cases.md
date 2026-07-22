# Use Cases: F03 — Plantilla

## UC-01: Ver plantilla completa
- **Actor:** Visitante
- **Trigger:** Navegar a /plantilla
- **Preconditions:** Frontend y backend operativos, BD con seed de jugadores
- **Main Flow:**
  Given el usuario navega a "/plantilla"
  When la página carga
  Then se muestra un grid con todos los jugadores (22 cards)
  And cada card muestra avatar, número, nombre y posición
  And al final se muestra el cuerpo técnico (4 staff)
- **Alternative Flow (datos vacíos):**
  When no hay jugadores en BD
  Then se muestra "No hay jugadores registrados"

## UC-02: Filtrar jugadores por posición
- **Actor:** Visitante
- **Trigger:** Click en tab de filtro
- **Preconditions:** Plantilla cargada
- **Main Flow:**
  Given el grid de jugadores visible
  When el usuario hace click en "Delanteros"
  Then el grid muestra solo los jugadores con posición "DEL"
  And el tab "Delanteros" queda resaltado
  When el usuario hace click en "Todos"
  Then el grid muestra todos los jugadores nuevamente
- **Error Flow:**
  When el filtro no encuentra jugadores
  Then se muestra "No hay jugadores en esta categoría"

## UC-03: Ver detalle de jugador
- **Actor:** Visitante
- **Trigger:** Click en PlayerCard
- **Preconditions:** Grid de jugadores cargado
- **Main Flow:**
  Given el grid de jugadores visible
  When el usuario hace click en una PlayerCard
  Then se abre un modal con foto grande del jugador
  And muestra: nombre, edad, número, posición, nacionalidad
  And muestra biografía y estadísticas
  And hay un botón "Cerrar" en la esquina superior derecha
- **Alternative Flow:**
  When el usuario hace click fuera del modal
  Then el modal se cierra

## UC-04: Ver cuerpo técnico
- **Actor:** Visitante
- **Trigger:** Scroll a sección de cuerpo técnico
- **Preconditions:** Página plantilla cargada
- **Main Flow:**
  Given la página plantilla cargada
  When el usuario hace scroll hacia abajo
  Then ve la sección "Cuerpo Técnico" con 4 tarjetas
  And cada tarjeta muestra: foto, nombre, cargo, nacionalidad
