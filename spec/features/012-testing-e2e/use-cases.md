# Use Cases: F12 — Testing E2E

## UC-01: Ejecutar suite completa de tests E2E
- **Actor:** Developer / QA
- **Trigger:** Ejecutar `npx playwright test`
- **Preconditions:** Frontend y backend corriendo, BD con seed data
- **Main Flow:**
  Given los servicios corriendo (frontend:5173, backend:3001)
  When se ejecuta `npx playwright test`
  Then todos los tests pasan (navegación, registro, login, compra, filtros)
  And se genera reporte HTML en playwright-report/

## UC-02: Test de navegación completa
- **Actor:** Developer
- **Trigger:** CI o desarrollo local
- **Preconditions:** Sitio funcionando
- **Main Flow:**
  Given el sitio cargado
  When el test navega secuencialmente: / → /plantilla → /formacion → /noticias → /entradas → /socios → /fichajes
  Then cada página responde con status 200
  And cada página contiene elementos esperados (títulos, imágenes, grids)

## UC-03: Test de compra de entradas
- **Actor:** Developer
- **Trigger:** CI o desarrollo local
- **Preconditions:** Usuario registrado, partidos disponibles
- **Main Flow:**
  Given un usuario registrado y autenticado
  When navega a /entradas
  And selecciona un partido
  And elige sector "General", cantidad 2
  And confirma la compra
  Then ve pantalla de confirmación con código QR
  And el texto "¡Compra exitosa!" es visible
