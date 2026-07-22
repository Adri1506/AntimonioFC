# Feature: F04 — Formación Táctica

## Descripción
Página interactiva con campo de fútbol SVG donde se muestran los 11 titulares posicionados según la formación táctica. Selector de formaciones (4-4-2, 4-3-3, 4-2-3-1), suplentes listados debajo, interactividad hover/click.

## Acceptance Criteria
- [ ] AC-01: Campo de fútbol SVG con líneas de cancha (área penal, círculo central, medio campo, líneas de banda)
- [ ] AC-02: 3 formaciones tácticas seleccionables: 4-4-2, 4-3-3, 4-2-3-1 con posiciones predefinidas
- [ ] AC-03: Jugadores posicionados como círculos con avatar, número y nombre en cada posición
- [ ] AC-04: Hover sobre jugador muestra nombre y número con tooltip
- [ ] AC-05: Click en jugador abre modal de detalle (reutiliza PlayerModal de F03)
- [ ] AC-06: Lista de suplentes (11 jugadores restantes) debajo del campo
- [ ] AC-07: Botones/selector para cambiar entre formaciones
- [ ] AC-08: Leyenda de colores por posición (POR: amarillo, DEF: azul, MED: verde, DEL: naranja)
- [ ] AC-09: Las coordenadas de cada formación están definidas en data/formations.ts

## Out of Scope
- Arrastrar y soltar jugadores
- Edición de formación
- Animaciones de transición entre formaciones
