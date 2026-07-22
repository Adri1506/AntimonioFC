# Tasks: F07 — Socios

## T-001: Crear modelo Socio + endpoints
- **Description**:
  - Agregar modelo Socio (id, usuarioId, tipo: BRONCE|PLATA|ORO, fechaInicio, fechaFin, activo, descuentoEntradas) con relación 1:1 a Usuario. Crear membershipRepository, membershipService, membershipController, membershipRoutes: POST /api/socios (afiliar), GET /api/mi-membresia (consultar). Ambos requieren auth JWT.
  - **Pattern**: Proxy — auth middleware protege endpoints (use_when: controlar acceso); Strategy — cálculo de descuento según tipo (use_when: reglas intercambiables)
  - **Data Structure**: Map — descuentos por tipo O(1): {BRONCE: 5, PLATA: 10, ORO: 20}
- **Files**: `backend/prisma/schema.prisma`, `backend/prisma/seed.ts`, `backend/src/routes/membershipRoutes.ts`, `backend/src/controllers/membershipController.ts`, `backend/src/services/membershipService.ts`, `backend/src/repositories/membershipRepository.ts`
- **Acceptance**:
  - `POST /api/socios` con token válido crea socio tipo BRONCE/PLATA/ORO
  - `POST /api/socios` sin token devuelve 401
  - `POST /api/socios` con socio ya activo devuelve 409 "Ya eres socio"
  - `GET /api/mi-membresia` devuelve datos de membresía activa
  - `GET /api/mi-membresia` sin membresía devuelve null (no error)
- **Depends on**: T-001 de F09 (modelo Usuario), T-004 de F09 (Auth middleware)

## T-002: Crear frontend de MembershipPage con planes y afiliación
- **Description**:
  - Implementar MembershipPage.tsx con MembershipPlans (3 PlanCards: Bronce $5, Plata $10, Oro $20 con beneficios), MembershipForm (react-hook-form + zod con nombre, email, teléfono), DigitalCard (carnet con escudo, nombre, tipo, fecha, QR simulado). useMembership hook. Estados: selección → formulario → confirmación.
  - **Pattern**: Strategy — planes como estrategias con diferentes beneficios (use_when: reglas de negocio intercambiables); State — flujo de afiliación (use_when: UI según estado)
  - **Data Structure**: Array — planes O(n) para cards
- **Files**: `frontend/src/pages/MembershipPage.tsx`, `frontend/src/components/sections/MembershipPlans.tsx`, `frontend/src/components/sections/MembershipForm.tsx`, `frontend/src/components/sections/DigitalCard.tsx`, `frontend/src/hooks/useMembership.ts`, `frontend/src/services/membershipService.ts`, `frontend/src/types/membership.ts`
- **Acceptance**:
  - 3 PlanCards: Bronce ($5/mes, 5% desc), Plata ($10/mes, 10% desc), Oro ($20/mes, 20% desc + exclusivo)
  - Plan Oro destacado con badge "Recomendado" y borde naranja
  - Click "Afiliarse" → formulario con nombre, email, teléfono
  - Confirmar → POST /api/socios → DigitalCard con escudo, nombre, tipo, QR, fecha
  - Sin auth → redirect a /login?returnUrl=/socios
- **Depends on**: T-001, T-003 de F09 (Auth frontend), T-004 de F01 (Layout)

## T-003: Crear sección de beneficios y carnet en perfil
- **Description**:
  - Implementar MemberBenefits.tsx (descuentos activos, fecha renovación) y DigitalCard en perfil del socio. Si el usuario tiene membresía activa, mostrar carnet y "Mis Beneficios". Botón "Renovar Membresía" si está próxima a vencer.
  - **Pattern**: No aplica (componente visual)
  - **Data Structure**: No aplica
- **Files**: `frontend/src/components/sections/MemberBenefits.tsx`
- **Acceptance**:
  - Socio activo ve carnet digital en /perfil
  - "Mis Beneficios" muestra: "5% descuento en entradas" (según tipo)
  - Fecha de renovación visible, botón "Renovar" si fechaFin < 30 días
  - No socio: no muestra sección de membresía
- **Depends on**: T-002, T-005 de F09 (perfil)
