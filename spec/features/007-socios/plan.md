# Plan: F07 — Socios

## Componentes
- **MembershipPlans.tsx** — 3 PlanCards comparativas con beneficios
- **MembershipForm.tsx** — Formulario de afiliación
- **DigitalCard.tsx** — Carnet digital simulado
- **MemberBenefits.tsx** — Beneficios del socio activo
- **Pages**: MembershipPage.tsx (planes + afiliación)
- **Hooks**: useMembership.ts (React Query + mutations)

## Endpoints
- `POST /api/socios` — Afiliarse (body: tipo) [Auth required]
- `GET /api/mi-membresia` — Datos de membresía actual [Auth required]

## Data Flow
```
MembershipPage.tsx
├── MembershipPlans (3 cards con planes)
│   └── [Click Afiliarse] → MembershipForm
│       └── [Confirmar] → POST /api/socios → DigitalCard
└── (si ya es socio) → DigitalCard + MemberBenefits
```

## Patrones Aplicados
- **Strategy** — Cada plan (Bronce/Plata/Oro) es una estrategia con diferentes beneficios y descuentos. `use_when`: algoritmos de precios/beneficios intercambiables.
- **State** — El usuario tiene estados: no socio → seleccionando plan → afiliado. Cada estado renderiza UI diferente. `use_when`: comportamiento varía según estado.
- **Proxy** — Auth middleware protege endpoints de socios. `use_when`: controlar acceso.

## Estructuras de Datos
- **Array** (O(n)) — Lista de planes para renderizado
- **Map** (O(1)) — Beneficios por plan: `Map<'BRONCE'|'PLATA'|'ORO', Benefit[]>`

## Dependencias Externas
- react-hook-form + zod (formulario de afiliación)
- @tanstack/react-query (mutations)

## Database Changes
- Modelo `Socio` (id, usuarioId, tipo, fechaInicio, fechaFin, activo, descuentoEntradas, renovacionAutomatica)
- Relación Usuario → Socio (1:1)
- Seed con datos de planes (no en BD, son configuración)
