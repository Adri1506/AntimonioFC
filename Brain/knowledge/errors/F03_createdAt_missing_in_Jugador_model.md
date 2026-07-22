# createdAt ausente en modelo Jugador

## Type
error (resuelto en revalidación F03)

## Resolution
✅ Verificado en revalidación QA (2026-07-14): El campo `createdAt DateTime @default(now())` ya existe en el modelo Jugador (línea 31 de schema.prisma). La API GET /api/jugadores/1 retorna `"createdAt":"2026-07-14T20:05:00.327Z"`.

## Stack
prisma, postgresql, node

## Tags
modelo, spec_deviation, seed, jugador

---

## Context
Feature F03 — Plantilla. Se creó el modelo `Jugador` en `schema.prisma` como parte de T-001. El spec (AC-01) lista explícitamente los campos requeridos del modelo.

---

## Problem
El modelo `Jugador` no incluye el campo `createdAt` que el spec exige. El spec dice:

> AC-01: Prisma model Jugador creado con campos: id, nombre, edad, posicion, numero, nacionalidad, foto, activo, createdAt

El modelo actual tiene: `id, nombre, edad, nacionalidad, posicion, numero, foto, activo`. Falta `createdAt`.

Otros modelos en el mismo schema (`Usuario`, `Entrada`, `Socio`, `Noticia`, `Fichaje`) sí incluyen `createdAt DateTime @default(now())`.

---

## Root Cause
El Developer omitió el campo `createdAt` al crear el modelo, posiblemente por considerarlo no necesario para las funcionalidades actuales (no se muestra en UI ni se consulta). Sin embargo, el spec es claro.

---

## Solution
Agregar al modelo `Jugador`:
```
createdAt DateTime @default(now())
```

---

## Steps to Reproduce
1. Abrir `backend/prisma/schema.prisma`
2. Observar modelo `Jugador` — no tiene campo `createdAt`
3. Comparar con spec `spec/features/003-plantilla/spec.md` AC-01

---

## Key Insight
Todos los campos listados en un Acceptance Criteria deben implementarse, incluso si no son funcionalmente necesarios para la UI. El spec es el contrato.

---

## When to use this
Al crear modelos Prisma para features con AC detallados. Verificar que cada campo del AC existe en el modelo final.

---

## Mistakes to avoid
- No asumir que un campo "no es necesario" solo porque no se usa en la UI actual
- No omitir campos del spec aunque parezcan redundantes (ej: createdAt con @default(now()) puede ser omitido por Prisma, pero debe declararse si el spec lo pide)

---

## Related Knowledge
- Otros modelos en schema.prisma que sí tienen createdAt sirven como referencia
