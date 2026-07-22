# Feature: F06 — Entradas

## Descripción
Módulo de compra de entradas para partidos: lista de próximos partidos, selector de sectores y cantidades, resumen de compra, confirmación con código QR simulado, historial de compras del usuario.

## Acceptance Criteria
- [ ] AC-01: Prisma models Partido y Entrada creados con relaciones a Usuario
- [ ] AC-02: Seed de 6-8 partidos ficticios (rival, fecha, estadio, competición, precios por sector)
- [ ] AC-03: Endpoint GET /api/partidos con próximos partidos y precios por sector
- [ ] AC-04: Endpoint POST /api/entradas (crear compra, requiere auth JWT)
- [ ] AC-05: Endpoint GET /api/mis-entradas (historial del usuario autenticado)
- [ ] AC-06: Lista de partidos con MatchCard (rival, fecha, estadio, precio desde)
- [ ] AC-07: Modal de compra con selector de sector (Preferencia $15, General $10, Visita $12), cantidad (1-10), resumen con total
- [ ] AC-08: Pantalla de confirmación con código QR simulado (generado con texto/canvas)
- [ ] AC-09: Historial de compras en perfil del usuario
- [ ] AC-10: Protección: usuario debe estar autenticado para comprar (redirect a /login)

## Out of Scope
- Pasarela de pago real (simulado en BD)
- Envío de email de confirmación real
- Código QR funcional (solo imagen simulada con qrcode.js o canvas)
