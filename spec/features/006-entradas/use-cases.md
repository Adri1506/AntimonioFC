# Use Cases: F06 — Entradas

## UC-01: Ver próximos partidos disponibles
- **Actor:** Visitante / Usuario autenticado
- **Trigger:** Navegar a /entradas
- **Preconditions:** BD con partidos seed
- **Main Flow:**
  Given el usuario navega a "/entradas"
  When la página carga
  Then se muestra la lista de próximos partidos con fecha, rival, estadio, precio desde
  And cada partido tiene botón "Comprar Entradas"
- **Empty Flow:**
  When no hay próximos partidos
  Then se muestra "No hay próximos partidos programados"

## UC-02: Comprar entradas (requiere auth)
- **Actor:** Usuario autenticado
- **Trigger:** Click en "Comprar Entradas"
- **Preconditions:** Usuario logueado, partido disponible
- **Main Flow:**
  Given el usuario autenticado en /entradas
  When hace click en "Comprar" en un partido
  Then se abre modal de compra con selectores de sector y cantidad
  When selecciona sector "Preferencia" y cantidad "2"
  Then el resumen muestra: subtotal, descuento socio (si aplica), total
  When confirma la compra
  Then se envía POST /api/entradas con los datos
  And se muestra pantalla de confirmación con código QR
- **Alternative Flow (no autenticado):**
  When el usuario no está autenticado y clickea "Comprar"
  Then se redirige a /login con returnUrl=/entradas

## UC-03: Ver historial de compras
- **Actor:** Usuario autenticado
- **Trigger:** Navegar a /perfil o sección "Mis Entradas"
- **Preconditions:** Usuario ha comprado entradas anteriormente
- **Main Flow:**
  Given el usuario autenticado
  When navega a su perfil
  Then ve la sección "Mis Compras" con el historial de entradas
  And cada entrada muestra: partido, sector, cantidad, fecha de compra, total
- **Empty Flow:**
  When el usuario no ha comprado entradas
  Then se muestra "Aún no has comprado entradas"
