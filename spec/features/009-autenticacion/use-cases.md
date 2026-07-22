# Use Cases: F09 — Autenticación

## UC-01: Registrarse como usuario
- **Actor:** Visitante
- **Trigger:** Navegar a /registro
- **Preconditions:** No autenticado
- **Main Flow:**
  Given el usuario navega a "/registro"
  When completa nombre, email, password y confirmación
  And hace click en "Crear Cuenta"
  Then se envía POST /api/auth/register
  And se crea el usuario con rol "USER"
  And se devuelve JWT y datos del usuario
  And se redirige a la página anterior o al home
- **Error Flow:**
  When el email ya está registrado
  Then se muestra "El email ya está registrado"
  When la contraseña es muy débil (< 6 caracteres)
  Then se muestra "La contraseña debe tener al menos 6 caracteres"

## UC-02: Iniciar sesión
- **Actor:** Visitante / Usuario no autenticado
- **Trigger:** Navegar a /login
- **Preconditions:** Usuario registrado
- **Main Flow:**
  Given el usuario navega a "/login"
  When ingresa email y contraseña
  And hace click en "Iniciar Sesión"
  Then se envía POST /api/auth/login
  And se devuelve JWT
  And se redirige a returnUrl o al home
  And el header muestra el nombre del usuario
- **Error Flow:**
  When las credenciales son incorrectas
  Then se muestra "Credenciales incorrectas"

## UC-03: Ver perfil de usuario
- **Actor:** Usuario autenticado
- **Trigger:** Navegar a /perfil
- **Preconditions:** Autenticado
- **Main Flow:**
  Given el usuario autenticado
  When navega a "/perfil"
  Then ve sus datos: nombre, email, fecha de registro
  And si es socio, ve su membresía y beneficios
  And ve su historial de compras de entradas
  And puede hacer click en "Cerrar Sesión"

## UC-04: Cerrar sesión
- **Actor:** Usuario autenticado
- **Trigger:** Click en "Cerrar Sesión"
- **Preconditions:** Autenticado
- **Main Flow:**
  Given el usuario autenticado
  When hace click en "Cerrar Sesión"
  Then se limpia el token de localStorage
  And se redirige al home
  And el header muestra botón "Iniciar Sesión"
