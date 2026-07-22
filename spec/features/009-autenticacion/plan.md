# Plan: F09 — Autenticación

## Componentes
- **LoginForm.tsx** — Formulario de login con email + password
- **RegisterForm.tsx** — Formulario de registro con validación
- **ProfilePage.tsx** — Perfil del usuario con datos y membresía
- **ProtectedRoute.tsx** — Componente wrapper para rutas protegidas
- **AdminRoute.tsx** — Componente wrapper para rutas admin
- **Pages**: LoginPage.tsx, RegisterPage.tsx, ProfilePage.tsx
- **Hooks**: useAuth.ts (React Query + Zustand)
- **Store**: authStore.ts (Zustand con persistencia)

## Endpoints
- `POST /api/auth/register` — Registro (body: nombre, email, password)
- `POST /api/auth/login` — Login (body: email, password) → { token, usuario }
- `GET /api/auth/perfil` — Datos del usuario [Auth required]

## Data Flow
```
LoginPage.tsx → POST /api/auth/login → JWT → authStore (Zustand + localStorage)
                                                         ↓
                                              Header muestra nombre
                                              ProtectedRoute valida token
                                              apiClient incluye Bearer token
```

## Patrones Aplicados
- **Proxy** — Auth middleware (JWT verification) actúa como proxy de protección en cada endpoint restringido. `use_when`: controlar acceso a recursos.
- **Singleton** — authStore de Zustand es instancia única global. `use_when`: estado global compartido.
- **Facade** — authService en frontend encapsula llamadas login/register/logout. `use_when`: simplificar interfaz de autenticación.

## Estructuras de Datos
- **Map** (O(1)) — Almacenamiento en memoria de sesiones (innecesario con JWT stateless, pero útil para caché de perfil)
- **Array** (O(n)) — Lista de rutas protegidas para validación

## Dependencias Externas
- jsonwebtoken (backend)
- bcrypt (backend)
- Zustand (frontend, ya en tech-stack)
- react-hook-form + zod (formularios)

## Database Changes
- Modelo `Usuario` (id, nombre, email unique, password, rol, createdAt)
- Seed con 1 admin: admin@antimoniofc.cl / admin123
