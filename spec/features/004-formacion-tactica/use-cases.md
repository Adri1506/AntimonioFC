# Use Cases: F04 — Formación Táctica

## UC-01: Ver formación táctica del equipo
- **Actor:** Visitante
- **Trigger:** Navegar a /formacion
- **Preconditions:** Frontend operativo, datos de jugadores y formaciones disponibles
- **Main Flow:**
  Given el usuario navega a "/formacion"
  When la página carga
  Then se muestra el campo de fútbol con los 11 titulares posicionados en 4-4-2
  And cada jugador muestra avatar circular y número
  And debajo del campo se listan los 11 suplentes
  And se muestra la leyenda de colores por posición

## UC-02: Cambiar formación táctica
- **Actor:** Visitante
- **Trigger:** Click en selector de formación
- **Preconditions:** Formación actual visible
- **Main Flow:**
  Given la formación 4-4-2 visible
  When el usuario hace click en "4-3-3"
  Then los jugadores se reposicionan en el campo según 4-3-3
  And los titulares cambian (entran/salen según la formación)
  And el selector muestra "4-3-3" como activo
  And los suplentes se actualizan

## UC-03: Interactuar con jugador en el campo
- **Actor:** Visitante
- **Trigger:** Hover/click en jugador
- **Preconditions:** Campo visible con jugadores
- **Main Flow:**
  Given el campo con jugadores visible
  When el usuario pasa el mouse sobre un jugador
  Then se muestra un tooltip con el nombre completo del jugador
  When el usuario hace click en un jugador
  Then se abre el modal de detalle con información completa
- **Alternative Flow:**
  When el usuario hace click fuera del modal
  Then el modal se cierra
