# Use Cases: F08 — Fichajes

## UC-01: Ver timeline de fichajes
- **Actor:** Visitante
- **Trigger:** Navegar a /fichajes
- **Preconditions:** BD con fichajes seed
- **Main Flow:**
  Given el usuario navega a "/fichajes"
  When la página carga
  Then se muestra un timeline vertical con fichajes ordenados por fecha
  And las altas se muestran en verde, las bajas en rojo
  And al inicio se muestra el resumen del mercado

## UC-02: Filtrar fichajes por tipo
- **Actor:** Visitante
- **Trigger:** Click en filtro
- **Preconditions:** Timeline cargado
- **Main Flow:**
  Given el timeline visible con todos los fichajes
  When el usuario selecciona "Altas"
  Then se muestran solo los fichajes de tipo ALTA
  When selecciona "Bajas"
  Then se muestran solo las BAJAS
  When selecciona "Todos"
  Then se muestra el timeline completo
- **Empty Flow:**
  When no hay fichajes del tipo seleccionado
  Then se muestra "No hay movimientos en este mercado"
