# Plan: F04 — Formación Táctica

## Componentes
- **FormationField.tsx** — Campo SVG con líneas de cancha y jugadores posicionados
- **FormationSelector.tsx** — Botones para cambiar entre 4-4-2, 4-3-3, 4-2-3-1
- **PlayerOnPitch.tsx** — Representación de un jugador en el campo (círculo + avatar + número)
- **SubstitutesList.tsx** — Lista de suplentes debajo del campo
- **Pages**: FormationPage.tsx (orquestador)
- **Data**: data/formations.ts (coordenadas predefinidas), data/players.ts (titulares por formación)

## Data Flow
```
FormationPage.tsx
├── FormationSelector (estado: formacionActual = '4-4-2' | '4-3-3' | '4-2-3-1')
├── FormationField (SVG)
│   ├── Fondo campo (hierba + líneas)
│   └── PlayerOnPitch[] (11 jugadores con coordenadas desde formations.ts)
│       ├── hover → tooltip
│       └── click → PlayerModal
└── SubstitutesList (resto de jugadores)
```

## Patrones Aplicados
- **Strategy** — Cada formación (4-4-2, 4-3-3, 4-2-3-1) es una estrategia de posicionamiento. Se selecciona en tiempo de ejecución y cambia las coordenadas de los jugadores. `use_when`: múltiples algoritmos intercambiables en tiempo de ejecución.
- **State** — El estado de la formación seleccionada determina qué jugadores son titulares y dónde se posicionan. `use_when`: comportamiento varía según estado.
- **Composite** — El campo SVG trata uniformemente a los 11 jugadores. `use_when`: estructura parte-todo en árbol.

## Estructuras de Datos
- **Map** (O(1)) — Coordenadas de formación: `Map<formationId, {jugador, x, y}[]>` para acceso rápido
- **Array** (O(n)) — Lista de titulares y suplentes por formación

## Dependencias Externas
- SVG nativo de React (sin librerías externas)
- Imágenes: img/campo.png (fondo campo), img/portero1.png, etc. (avatares)

## Database Changes
- Ninguno (datos de formaciones definidos estáticamente en data/formations.ts)
