# Feature: F01 — Design System

## Descripción
Implementar el sistema de diseño del club: tokens CSS con paleta de colores (#000080, #FF6500), tipografía (Barlow + Inter), componentes UI base con shadcn/ui, layout global (Header, Footer, Navigation) y gradientes definidos en spec/design/design-system.md.

## Acceptance Criteria
- [ ] AC-01: Los tokens CSS se definen en index.css con las variables: --color-primary, --color-accent, --color-secondary, --color-text y todas las derivadas
- [ ] AC-02: La tipografía Barlow (headings) e Inter (body) se cargan desde Google Fonts y se aplican globalmente
- [ ] AC-03: Los componentes shadcn/ui (Button, Card, Badge, Input, Select, Dialog, Tabs) están personalizados con los tokens del club
- [ ] AC-04: El Header tiene logo del club, navegación principal (Home, Plantilla, Formación, Noticias, Entradas, Socios, Fichajes) y CTA "Socios"
- [ ] AC-05: El Footer tiene 4 columnas (Club, Equipo, Afición, Legal) + redes sociales + escudo
- [ ] AC-06: Los gradientes (gradient-hero, gradient-accent, gradient-card, gradient-dark) funcionan como clases utilitarias
- [ ] AC-07: Los componentes tienen estado Loading (skeleton), Error, Empty y Success según design-system.md

## Out of Scope
- Contenido de páginas específicas (solo layout y componentes base)
- Funcionalidad de los enlaces (routing en F02)
- Animaciones complejas
