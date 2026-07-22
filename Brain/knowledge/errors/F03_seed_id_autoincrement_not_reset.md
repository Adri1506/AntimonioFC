# Seed no resetea ID auto-increment en PostgreSQL

## Type
error (resuelto en revalidación F03)

## Resolution
✅ Verificado en revalidación QA (2026-07-14): Seed.ts ahora ejecuta `ALTER SEQUENCE "Jugador_id_seq" RESTART WITH 1` y `ALTER SEQUENCE "StaffTecnico_id_seq" RESTART WITH 1` después de `deleteMany()`. Ejecutado 2 veces consecutivas sin errores. `GET /api/jugadores/1` retorna Matías Contreras (id=1) correctamente.

## Stack
prisma, postgresql, seed

## Tags
seed, idempotencia, auto_increment, postgresql

---

## Context
Feature F03 — Plantilla. El seed (T-001) inserta 22 jugadores y 4 staff usando `prisma.jugador.deleteMany()` y luego `prisma.jugador.create()`.

---

## Problem
La tarea T-002 espera `GET /api/jugadores/1` devuelva a Matías Contreras. Pero en ejecuciones subsecuentes del seed, los IDs auto-incrementales de PostgreSQL no se resetean, entonces id=1 ya no existe y el endpoint retorna 404.

Esto rompe la expectation de que Matías Contreras tenga id=1.

---

## Root Cause
`deleteMany()` elimina registros pero no resetea la secuencia de auto-increment de PostgreSQL. En la segunda ejecución, los IDs empiezan desde donde quedaron (ej: 23+).

---

## Solution
Agregar un restart de secuencia después del `deleteMany()`:

```typescript
await prisma.$executeRawUnsafe("ALTER SEQUENCE jugador_id_seq RESTART WITH 1")
await prisma.$executeRawUnsafe("ALTER SEQUENCE staff_tecnico_id_seq RESTART WITH 1")
```

--- 

## Steps to Reproduce
1. Ejecutar `npx tsx prisma/seed.ts` (primera vez → IDs 1-22)
2. Ejecutar `npx tsx prisma/seed.ts` (segunda vez → IDs 23+)
3. `GET /api/jugadores/1` → 404 "Jugador no encontrado"

---

## Key Insight
Los seeds deben ser idempotentes. En PostgreSQL, `deleteMany()` no resetea secuencias. Usar `$executeRawUnsafe` con `ALTER SEQUENCE ... RESTART` para garantizar IDs predecibles.

---

## When to use this
Siempre que un seed use Prisma + PostgreSQL con IDs auto-increment y tests que dependan de IDs específicos.

---

## Mistakes to avoid
- Asumir que `deleteMany()` resetea secuencias
- Usar IDs fijos en tests sin garantizar que el seed los produzca

---

## Related Knowledge
- F03_createdAt_missing_in_Jugador_model.md (otra desviación del spec en el modelo)
