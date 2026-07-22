# Tasks: F09 — Autenticación

## T-001: Crear modelo Usuario + seed admin
- **Description**:
  - Agregar modelo Usuario (id, nombre, email unique, password hash, rol: ADMIN|USER, createdAt) al schema.prisma. Seed con un admin (admin@antimoniofc.cl / admin123 hasheado con bcrypt). Configurar hash utility.
  - **Pattern**: No aplica (modelado de datos)
  - **Data Structure**: Map — lookup de usuario por email O(1) con índice único en BD
- **Files**: `backend/prisma/schema.prisma`, `backend/prisma/seed.ts`, `backend/src/utils/hash.ts`
- **Acceptance**:
  - Modelo Usuario con campos requeridos en Prisma schema
  - Seed crea admin con email admin@antimoniofc.cl y password hasheado
  - `hash.ts` exporta hashPassword() y verifyPassword() usando bcrypt
- **Depends on**: T-003 de F00 (Scaffolding)

## T-002: Implementar endpoints de auth (register, login, perfil)
- **Description**:
  - Crear authRoutes, authController, authService, userRepository: POST /api/auth/register (valida email único, hashea password), POST /api/auth/login (verifica credenciales, firma JWT con jsonwebtoken), GET /api/auth/perfil (retorna usuario sin password). Validar inputs con zod.
  - **Pattern**: Facade — authService encapsula lógica de autenticación (use_when: simplificar interfaz)
  - **Data Structure**: Map — JWT payload con datos mínimos (id, email, rol) O(1) decode
- **Files**: `backend/src/routes/authRoutes.ts`, `backend/src/controllers/authController.ts`, `backend/src/services/authService.ts`, `backend/src/repositories/userRepository.ts`, `backend/src/utils/jwt.ts`
- **Acceptance**:
  - `POST /api/auth/register` crea usuario y devuelve { token, usuario }
  - `POST /api/auth/login` con credenciales válidas devuelve { token, usuario }
  - `POST /api/auth/login` con credenciales inválidas devuelve 401
  - `GET /api/auth/perfil` con token válido devuelve datos del usuario (sin password)
  - `GET /api/auth/perfil` sin token devuelve 401
  - Email duplicado en register devuelve 409 "El email ya está registrado"
- **Depends on**: T-001

## T-003: Crear auth middleware JWT
- **Description**:
  - Implementar middleware/auth.ts: verifica Bearer token, decodifica JWT, adjunta usuario a req. Crear dos versiones: requireAuth (error si no hay token) y optionalAuth (no error, req.user = null). Configurar en app.ts globalmente o por ruta.
  - **Pattern**: Proxy — middleware controla acceso a rutas protegidas (use_when: controlar acceso a recursos)
  - **Data Structure**: No aplica (middleware de request)
- **Files**: `backend/src/middleware/auth.ts`, `backend/src/app.ts`
- **Acceptance**:
  - Ruta protegida con requireAuth devuelve 401 sin token
  - Ruta protegida con requireAuth ejecuta controller con token válido
  - optionalAuth no bloquea, req.user es null si no hay token
  - Token expirado devuelve 401 "Token expirado"
- **Depends on**: T-002

## T-004: Crear frontend de auth (login, registro, auth store, rutas protegidas)
- **Description**:
  - Implementar LoginPage.tsx (formulario email+password, escudo), RegisterPage.tsx (nombre+email+password+confirmar con react-hook-form+zod). authStore.ts con Zustand + persistencia localStorage. apiClient.ts con axios interceptor que añade Bearer token. ProtectedRoute.tsx y AdminRoute.tsx wrappers. Header actualizado: muestra nombre si auth, botón Login si no.
  - **Pattern**: Singleton — authStore global con Zustand (use_when: estado global compartido); Proxy — ProtectedRoute controla acceso a rutas (use_when: control de acceso)
  - **Data Structure**: No aplica
- **Files**: `frontend/src/pages/LoginPage.tsx`, `frontend/src/pages/RegisterPage.tsx`, `frontend/src/stores/authStore.ts`, `frontend/src/services/apiClient.ts`, `frontend/src/components/layout/ProtectedRoute.tsx`, `frontend/src/components/layout/AdminRoute.tsx`, `frontend/src/hooks/useAuth.ts`, `frontend/src/services/authService.ts`, `frontend/src/types/user.ts`
- **Acceptance**:
  - Login: email+password, submit → POST /api/auth/login → token guardado en localStorage
  - Registro: nombre+email+password+confirmar, validación zod (password >= 6 chars, email válido)
  - Header: si auth → "Hola, [nombre]" + Cerrar Sesión; si no → "Iniciar Sesión"
  - ProtectedRoute: redirige a /login?returnUrl= si no auth
  - AdminRoute: redirige a / si rol !== ADMIN
  - authStore: token persistente en localStorage, se restaura al recargar
  - apiClient: axios interceptor añade Authorization: Bearer {token}
  - Errores: "Credenciales incorrectas", "El email ya está registrado"
- **Depends on**: T-003, T-004 de F01 (Layout - Header)

## T-005: Crear ProfilePage con datos y membresía
- **Description**:
  - Implementar ProfilePage.tsx: muestra nombre, email, fecha de registro. Si es socio, muestra membresía activa y beneficios. Historial de compras (PurchaseHistory de F06). Botón "Cerrar Sesión". Ruta /perfil protegida.
  - **Pattern**: No aplica (página de perfil)
  - **Data Structure**: No aplica
- **Files**: `frontend/src/pages/ProfilePage.tsx`
- **Acceptance**:
  - Muestra nombre, email, "Miembro desde [fecha]"
  - Si es socio: muestra tipo (Bronce/Plata/Oro), descuento, fecha renovación
  - Historial de compras visible (si tiene)
  - Botón "Cerrar Sesión" limpia store y redirige a home
  - Ruta /perfil protegida (redirect a /login si no auth)
- **Depends on**: T-004, T-003 de F07 (membresía), T-004 de F06 (historial)
