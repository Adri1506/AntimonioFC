# Feature: F07 — Socios

## Descripción
Módulo de membresías del club: planes (Bronce/Plata/Oro), formulario de afiliación, beneficios visibles por categoría, carnet digital simulado, gestión de renovación.

## Acceptance Criteria
- [ ] AC-01: Prisma model Socio creado con relación a Usuario, campos: tipo (BRONCE, PLATA, ORO), fechaInicio, fechaFin, activo, descuentoEntradas
- [ ] AC-02: Endpoint POST /api/socios (afiliarse, requiere auth JWT)
- [ ] AC-03: Endpoint GET /api/mi-membresia (datos del socio autenticado)
- [ ] AC-04: 3 planes de membresía: Bronce ($5/mes, 5% descuento), Plata ($10/mes, 10% descuento), Oro ($20/mes, 20% descuento + contenido exclusivo)
- [ ] AC-05: Página /socios con 3 PlanCards comparativas (precio, beneficios, CTA)
- [ ] AC-06: Formulario de afiliación con datos personales y selección de plan
- [ ] AC-07: Carnet digital simulado al finalizar: nombre, tipo, fecha, QR, escudo
- [ ] AC-08: Sección "Mis Beneficios" para socios activos (descuentos visibles)
- [ ] AC-09: Estados: loading, success ("¡Bienvenido a la familia AntimonioFC!"), error

## Out of Scope
- Pago recurrente real (simulado)
- Integración con pasarela de pagos
- Envío de carnet físico
