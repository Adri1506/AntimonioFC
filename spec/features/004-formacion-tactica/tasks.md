# Tasks: F04 — Formación Táctica

## T-001: Definir datos de formaciones tácticas y titulares
- **Description**:
  - Crear data/formations.ts con coordenadas de los 11 jugadores para cada formación (4-4-2, 4-3-3, 4-2-3-1) según spec/images/prompts.md sección 9. Incluir mapeo de qué jugadores son titulares en cada formación. Las coordenadas usan viewBox 0-100 para escalar responsive. Crear data/players.ts con array completo.
  - **Pattern**: No aplica (datos estáticos)
  - **Data Structure**: Map<formationId, FormationConfig> — O(1) acceso por formación; Array<Jugador> — O(n) lista de jugadores
- **Files**: `frontend/src/data/formations.ts`, `frontend/src/data/players.ts`
- **Acceptance**:
  - formations.ts exporta 3 configuraciones con coordenadas (x, y) para 11 jugadores cada una
  - 4-4-2: 1 POR, 4 DEF, 4 MED, 2 DEL (jugadores #1,2,4,5,13,7,6,8,16,9,10)
  - 4-3-3: 1 POR, 4 DEF, 3 MED, 3 DEL (jugadores #1,2,4,5,13,6,8,15,18,9,11)
  - 4-2-3-1: 1 POR, 4 DEF, 2 MED, 3 MED ofensivos, 1 DEL (jugadores #1,14,3,4,13,6,15,7,10,16,9)
  - Coordenadas en viewBox 0-100 para escalar a cualquier tamaño
- **Depends on**: T-003 de F03 (Plantilla - reutiliza tipos de jugador)

## T-002: Crear FormationField SVG con campo de fútbol
- **Description**:
  - Implementar FormationField.tsx con SVG del campo: fondo verde (con textura desde campo.png o gradiente), líneas blancas (banda, medio campo, área penal, área chica, círculo central, punto penal). viewBox="0 0 100 140" para orientación vertical. Escalar sin deformación.
  - **Pattern**: Composite — SVG compone elementos de línea jerárquicamente (use_when: estructura parte-todo)
  - **Data Structure**: No aplica (gráfico SVG)
- **Files**: `frontend/src/components/sections/FormationField.tsx`
- **Acceptance**:
  - Campo SVG ocupa ancho completo del contenedor, alto proporcional 100:140
  - Líneas de banda, medio campo, áreas penal y chica, círculo central visibles en blanco
  - Fondo verde con gradiente sutil (verde hierba)
  - viewBox escalable: campo se ve bien en 400px y 800px de ancho
- **Depends on**: T-001

## T-003: Implementar jugadores en el campo + hover/click
- **Description**:
  - Crear PlayerOnPitch.tsx: círculo con avatar del jugador (clipPath circular), número grande Barlow Condensed, nombre en tooltip al hover. Posicionar en FormationField según coordenadas de formations.ts. FormationSelector.tsx con 3 botones para cambiar formación. Al cambiar, los jugadores se reposicionan animadamente.
  - **Pattern**: Strategy — formaciones como estrategias intercambiables (use_when: múltiples algoritmos intercambiables); State — estado de formación determina UI (use_when: comportamiento varía según estado)
  - **Data Structure**: Map — coordenadas por formación O(1); Array — lista de titulares O(n)
- **Files**: `frontend/src/components/sections/PlayerOnPitch.tsx`, `frontend/src/components/sections/FormationSelector.tsx`, `frontend/src/pages/FormationPage.tsx`
- **Acceptance**:
  - 11 jugadores posicionados en campo según formación activa
  - Cada jugador: círculo ~40px con avatar recortado, número en blanco superpuesto
  - Hover muestra tooltip con nombre completo
  - FormationSelector: 3 botones, click cambia formación y reposiciona jugadores
  - Click en jugador emite evento para abrir PlayerModal
- **Depends on**: T-002, T-004 de F03 (PlayerModal reusable)

## T-004: Crear lista de suplentes + leyenda + FormationPage
- **Description**:
  - Implementar SubstitutesList.tsx con los 11 jugadores no titulares (grid de cards pequeñas). Leyenda de colores por posición (POR: amber, DEF: blue, MED: emerald, DEL: orange). FormationPage.tsx que orquesta todo: FormationSelector + FormationField + SubstitutesList.
  - **Pattern**: No aplica (composición visual)
  - **Data Structure**: Array — suplentes como sub-array del total O(n)
- **Files**: `frontend/src/components/sections/SubstitutesList.tsx`, `frontend/src/pages/FormationPage.tsx`
- **Acceptance**:
  - SubstitutesList muestra 11 jugadores en grid 2-4 columnas con avatar pequeño, nombre, número
  - Leyenda con 4 colores visibles al lado del campo
  - FormationPage renderiza: selector arriba, campo + suplentes lado a lado en desktop
  - Al cambiar formación, titulares y suplentes se actualizan correctamente
  - Ruta /formacion configurada en App.tsx
- **Depends on**: T-003
