# Plan: F01 — Design System

## Componentes
- **Layout**: Header.tsx, Footer.tsx, Navigation.tsx, Layout.tsx
- **UI Base**: Button.tsx, Card.tsx, Badge.tsx, Input.tsx, Select.tsx, Dialog.tsx, Tabs.tsx (shadcn/ui customizados)
- **Utils**: cn.ts (clsx + tailwind-merge), formatDate.ts, formatCurrency.ts

## Data Flow
```
index.css (CSS variables)
  → tailwind.config.ts (referencia a variables)
    → shadcn/ui components (usan tokens via Tailwind)
      → Layout components (Header, Footer usan UI components)
```

## Patrones Aplicados
- **Abstract Factory** (parcial) — shadcn/ui ya implementa Radix primitives como factory de componentes accesibles. No implementamos el patrón desde cero, sino que usamos shadcn/ui como nuestra fábrica de componentes base.
- **Composite** — Layout.tsx compone Header + children + Footer como estructura de árbol. `use_when`: estructura parte-todo tratada uniformemente.
- **Template Method** — Los componentes de layout (Header, Footer) comparten estructura común via Layout.tsx. `use_when`: varias clases comparten estructura pero difieren en detalles.

## Dependencias Externas
- Google Fonts: Barlow (300,400,600,700,800) + Inter (400,500,600,700)
- Lucide Icons (via shadcn/ui)
- clsx + tailwind-merge (para cn.ts)

## Database Changes
- Ninguno (solo frontend)
