# Tasks: F01 — Design System

## T-001: Definir tokens CSS y configuración de Tailwind
- **Description**:
  - Crear archivo `index.css` con todas las variables CSS del design system (primarios, secundarios, funcionales, gradientes). Extender `tailwind.config.ts` para mapear las variables a clases utilitarias.
  - **Pattern**: No aplica (configuración de theming)
  - **Data Structure**: Map — color tokens almacenados como pares nombre-valor para acceso O(1)
- **Files**: `frontend/src/index.css`, `frontend/tailwind.config.ts`
- **Acceptance**:
  - `--color-primary: #000080` y `--color-accent: #FF6500` definidos en `:root`
  - `bg-primary` renderiza fondo azul marino, `text-accent` renderiza texto naranjo
  - `gradient-hero` como clase funciona con degradado `#000080 → #1a1a9e`
  - Las 4 gradientes (hero, accent, card, dark) están definidas
- **Depends on**: T-002 de F00 (scaffolding)

## T-002: Cargar tipografía Barlow + Inter y aplicar globalmente
- **Description**:
  - Importar Barlow (300-800) e Inter (400-700) desde Google Fonts en `index.html`. Definir en `index.css` las reglas `@font-face` y clases utilitarias `.font-heading` (Barlow) y `.font-body` (Inter). Aplicar jerarquía tipográfica (h1-h5, body, small, caption).
  - **Pattern**: No aplica (configuración tipográfica)
  - **Data Structure**: No aplica
- **Files**: `frontend/index.html`, `frontend/src/index.css`
- **Acceptance**:
  - Google Fonts carga Barlow e Inter en el `<head>`
  - `<h1 class="font-heading">` usa Barlow Bold 3.5rem
  - `<p class="font-body">` usa Inter Regular 1rem
  - Escala tipográfica completa: h1 (3.5rem), h2 (2.5rem), h3 (2rem), h4 (1.5rem), body (1rem), small (0.875rem)
- **Depends on**: T-001

## T-003: Personalizar componentes shadcn/ui con tokens del club
- **Description**:
  - Personalizar Button (5 variantes: primary, accent, outline, ghost, danger), Card, Badge (position, type, status), Input, Select, Dialog, Tabs con los colores del club. Crear variantes de tamaño en Button (sm, md, lg, xl).
  - **Pattern**: Abstract Factory (parcial) — shadcn/ui como fábrica de componentes accesibles; Template Method — estructura común en componentes base con variantes específicas (use_when: variantes comparten estructura)
  - **Data Structure**: No aplica (componentes de UI)
- **Files**: `frontend/src/components/ui/button.tsx`, `frontend/src/components/ui/card.tsx`, `frontend/src/components/ui/badge.tsx`, `frontend/src/components/ui/input.tsx`, `frontend/src/components/ui/select.tsx`, `frontend/src/components/ui/dialog.tsx`, `frontend/src/components/ui/tabs.tsx`
- **Acceptance**:
  - `<Button variant="accent">` tiene bg naranjo (#FF6500) con texto blanco
  - `<Badge variant="position">` tiene bg azul marino con texto "DEF"
  - `<Card>` tiene sombra `shadow-md` que aumenta a `shadow-lg` en hover
  - `<Dialog>` se abre con animación scale+fade, fondo overlay semi-transparente
  - Los estados disabled tienen opacidad 50%
- **Depends on**: T-001

## T-004: Crear Layout global (Header + Footer + Navigation)
- **Description**:
  - Implementar Header.tsx con logo (escudo.png), Navigation.tsx con menú principal (7 items), botón "Hazte Socio" accent. Footer.tsx con 4 columnas (Club, Equipo, Afición, Legal), redes sociales (íconos Lucide), copyright. Layout.tsx que envuelve children entre Header y Footer. Estado active en navegación basado en ruta actual.
  - **Pattern**: Composite — Layout compone Header + children + Footer como árbol de componentes (use_when: estructura parte-todo tratada uniformemente)
  - **Data Structure**: Array — items de navegación almacenados como Array<{label, href, icon}> para iteración O(n) en render
- **Files**: `frontend/src/components/layout/Header.tsx`, `frontend/src/components/layout/Footer.tsx`, `frontend/src/components/layout/Navigation.tsx`, `frontend/src/components/layout/Layout.tsx`
- **Acceptance**:
  - Header se renderiza fijo arriba con escudo a izquierda, menú al centro, CTA a derecha
  - Navigation tiene 7 items: Inicio, Plantilla, Formación, Noticias, Entradas, Socios, Fichajes
  - Footer tiene 4 columnas con títulos y 3-4 enlaces cada una
  - Las redes sociales (Facebook, Instagram, Twitter, YouTube) usan íconos de Lucide
  - Layout.tsx usa `<Header/>`, `<main>{children}</main>`, `<Footer/>`
- **Depends on**: T-003
