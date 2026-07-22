# Tasks: F12 — Testing E2E

## T-001: Configurar Playwright + crear test de navegación
- **Description**:
  - Instalar @playwright/test en frontend/, crear playwright.config.ts con baseURL "http://localhost:5173", viewport 1280x720, reporter HTML. Crear test navigation.spec.ts: navega / → verifica hero y escudo → /plantilla → verifica grid jugadores → /formacion → verifica campo SVG → /noticias → verifica grid noticias → /entradas → verifica lista partidos → /socios → verifica 3 planes → /fichajes → verifica timeline.
  - **Pattern**: Page Object Model — estructura base para tests (use_when: separar lógica de UI)
  - **Data Structure**: No aplica
- **Files**: `frontend/playwright.config.ts`, `frontend/tests/e2e/navigation.spec.ts`
- **Acceptance**:
  - `npx playwright install` instala browsers sin errores
  - `npx playwright test navigation` pasa (7 páginas visitadas, verifica elementos clave)
  - Reporte HTML generado en playwright-report/
  - Cada `await page.goto('/ruta')` seguido de `await expect(page.locator(...)).toBeVisible()`
- **Depends on**: F02-F08 implementadas

## T-002: Crear test de auth (registro y login)
- **Description**:
  - Crear auth.spec.ts con Page Object (LoginPage, RegisterPage). Test registro: navegar a /registro, completar formulario (nombre, email único, password), submit, verificar redirección. Test login: navegar a /login, ingresar credenciales, verificar header muestra nombre. Test logout: click "Cerrar Sesión", verificar header muestra "Iniciar Sesión".
  - **Pattern**: Page Object Model — LoginPage y RegisterPage encapsulan selectores (use_when: separar test de UI)
  - **Data Structure**: No aplica
- **Files**: `frontend/tests/e2e/auth.spec.ts`, `frontend/tests/e2e/pages/LoginPage.ts`, `frontend/tests/e2e/pages/RegisterPage.ts`
- **Acceptance**:
  - Test registro crea usuario único con email + timestamp
  - Test login con admin@antimoniofc.cl / admin123 → header muestra "admin" o "Dashboard"
  - Test logout redirige a home, botón "Iniciar Sesión" visible
- **Depends on**: T-001, F09 implementada

## T-003: Crear test de compra de entradas
- **Description**:
  - Crear tickets.spec.ts: login como usuario → navegar a /entradas → click "Comprar" en primer partido → seleccionar sector "General" → cantidad 2 → ver resumen → confirmar → verificar QR visible y "¡Compra exitosa!". Page Object: TicketsPage, PurchaseModal.
  - **Pattern**: Page Object Model — TicketsPage y PurchaseModal (use_when: separar test de UI)
  - **Data Structure**: No aplica
- **Files**: `frontend/tests/e2e/tickets.spec.ts`, `frontend/tests/e2e/pages/TicketsPage.ts`
- **Acceptance**:
  - Test login, selecciona partido, sector, cantidad
  - Confirmar compra → QR code visible en pantalla
  - Mensaje de éxito visible
- **Depends on**: T-002, F06 implementada

## T-004: Crear tests de plantilla, formación y responsive
- **Description**:
  - Crear squad.spec.ts: test filtro "Delanteros" → solo 7 cards con badge "DEL" visible. Verificar que "Porteros" no están visibles. Test formación: /formacion → click "4-3-3" → verificar tooltip en hover. responsive.spec.ts: viewport 375x812 → verificar hamburguesa visible → click → drawer abierto con links → click en "Plantilla" → drawer se cierra y navega.
  - **Pattern**: Page Object Model — SquadPage y FormationPage
  - **Data Structure**: No aplica
- **Files**: `frontend/tests/e2e/squad.spec.ts`, `frontend/tests/e2e/responsive.spec.ts`, `frontend/tests/e2e/pages/SquadPage.ts`, `frontend/tests/e2e/pages/FormationPage.ts`
- **Acceptance**:
  - Filtro "Delanteros" muestra solo jugadores con badge "DEL"
  - Cambio a 4-3-3 reposiciona jugadores (verificar cantidad de elementos en campo)
  - Viewport 375x812: hamburguesa visible, menú horizontal oculto
  - Click hamburguesa → drawer visible con todos los links
  - Click en link del drawer → drawer se cierra + página correspondiente cargada
- **Depends on**: T-001, F03, F04, F11 implementadas
