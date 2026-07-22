# Feature: F09 — Autenticación

## Descripción
Sistema de autenticación con JWT: registro de usuarios, login, protección de rutas, perfil de usuario, roles (admin/user).

## Acceptance Criteria
- [ ] AC-01: Prisma model Usuario con campos: id, nombre, email (único), password (hash), rol (ADMIN/USER), socioId, createdAt
- [ ] AC-02: Endpoint POST /api/auth/register — registro con nombre, email, password (hash con bcrypt)
- [ ] AC-03: Endpoint POST /api/auth/login — login con email/password, devuelve JWT + datos usuario
- [ ] AC-04: Endpoint GET /api/auth/perfil — datos del usuario autenticado (requiere JWT)
- [ ] AC-05: JWT middleware que verifica token y adjunta usuario a req
- [ ] AC-06: Página /login con formulario email + password, escudo del club
- [ ] AC-07: Página /registro con formulario nombre + email + password + confirmar
- [ ] AC-08: Página /perfil con datos del usuario, membresía (si aplica), historial de entradas
- [ ] AC-09: Auth store en Zustand con persistencia (token en localStorage)
- [ ] AC-10: Protección de rutas: rutas admin (solo ADMIN), rutas usuario (solo autenticado)
- [ ] AC-11: Estados: loading, error ("Credenciales incorrectas"), success

## Out of Scope
- OAuth / SSO
- 2FA
- Recuperación de contraseña
- Verificación de email
