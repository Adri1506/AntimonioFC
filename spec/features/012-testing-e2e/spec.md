# Feature: F12 — Testing E2E

## Descripción
Pruebas E2E con Playwright cubriendo los flujos críticos del sitio: navegación principal, compra de entradas, registro y login, visualización de plantilla y formación.

## Acceptance Criteria
- [ ] AC-01: Playwright configurado con TypeScript en frontend/tests/e2e/
- [ ] AC-02: Test "Navegación completa del sitio": recorre Home → Plantilla → Formación → Noticias → Entradas → Socios → Fichajes, verifica que cada página carga correctamente
- [ ] AC-03: Test "Registro de usuario": navega a /registro, completa formulario, verifica redirección exitosa
- [ ] AC-04: Test "Login de usuario": navega a /login, ingresa credenciales, verifica header muestra nombre
- [ ] AC-05: Test "Compra de entradas": login → navegar a /entradas → seleccionar partido → seleccionar sector/cantidad → confirmar → ver QR
- [ ] AC-06: Test "Filtro de plantilla": navegar a /plantilla, filtrar por "Delanteros", verificar que solo se muestran DEL
- [ ] AC-07: Test "Cambio de formación": navegar a /formacion, cambiar a 4-3-3, verificar que los jugadores se reposicionan
- [ ] AC-08: Test responsive: verificar menú hamburguesa en viewport móvil (375x812)
- [ ] AC-09: Reporte de tests generado en formato HTML

## Out of Scope
- Tests unitarios (Vitest + RTL)
- Tests de backend unitarios (Jest + Supertest)
- Tests de accesibilidad
- Tests de performance
