# Use Cases: F07 — Socios

## UC-01: Ver planes de membresía
- **Actor:** Visitante
- **Trigger:** Navegar a /socios
- **Preconditions:** Frontend operativo
- **Main Flow:**
  Given el usuario navega a "/socios"
  When la página carga
  Then se muestran 3 PlanCards: Bronce, Plata, Oro
  And cada card muestra: nombre, precio mensual, lista de beneficios, CTA
  And el plan Oro está destacado como "Recomendado"

## UC-02: Afiliarse como socio (requiere auth)
- **Actor:** Usuario autenticado
- **Trigger:** Click en "Afiliarse" en un plan
- **Preconditions:** Usuario logueado, sin membresía activa
- **Main Flow:**
  Given el usuario autenticado en /socios
  When selecciona plan "Plata" y hace click en "Afiliarse"
  Then se muestra formulario con datos prellenados (nombre, email)
  When confirma afiliación
  Then se envía POST /api/socios con tipo "PLATA"
  And se muestra carnet digital con nombre, tipo, fecha, QR
  And se muestra mensaje "¡Bienvenido a la familia AntimonioFC!"
- **Alternative Flow (no autenticado):**
  When el usuario no está autenticado
  Then se redirige a /login con returnUrl=/socios
- **Error Flow:**
  When el usuario ya tiene membresía activa
  Then se muestra "Ya eres socio. ¡Gracias por tu apoyo!"

## UC-03: Ver carnet digital y beneficios
- **Actor:** Socio autenticado
- **Trigger:** Navegar a /perfil o /mi-membresia
- **Preconditions:** Usuario con membresía activa
- **Main Flow:**
  Given el socio autenticado
  When navega a su perfil
  Then ve su carnet digital con: foto, nombre, tipo de socio, fecha de afiliación
  And ve la sección "Mis Beneficios": descuento en entradas, contenido exclusivo
  And ve fecha de renovación y botón "Renovar Membresía"
