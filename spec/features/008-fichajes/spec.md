# Feature: F08 — Fichajes

## Descripción
Timeline vertical de altas y bajas del club con filtros, tarjetas de fichaje (jugador, club origen/destino, fecha, tipo), y resumen del mercado.

## Acceptance Criteria
- [ ] AC-01: Prisma model Fichaje con campos: id, jugadorId, tipo (ALTA/BAJA), fecha, clubOrigen, clubDestino, tipoOperacion (traspaso/cesión/fin contrato), monto, activo
- [ ] AC-02: Seed de 8-10 fichajes ficticios (altas y bajas de la temporada)
- [ ] AC-03: Endpoint GET /api/fichajes con filtro por tipo (?tipo=ALTA|BAJA|TODO)
- [ ] AC-04: Timeline visual vertical con entradas alternadas (izquierda/derecha)
- [ ] AC-05: Altas en verde/azul, Bajas en rojo/naranja
- [ ] AC-06: Cada entrada: avatar jugador, nombre, tipo badge (alta/baja), club, fecha, tipo operación
- [ ] AC-07: Filtro: Todos | Altas | Bajas
- [ ] AC-08: Resumen del mercado: total altas, bajas, inversión total
- [ ] AC-09: Estados: loading (skeleton timeline), error, empty ("No hay movimientos")

## Out of Scope
- Notificaciones de nuevos fichajes
- Comparativa con temporadas anteriores
