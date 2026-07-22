# Screens & User Flows: AntimonioFC

## User Flows

### FLOW-01: Navegación Principal
- **Descripción**: El usuario navega por las secciones principales del sitio.
- **Pasos**:
  1. Usuario llega al Home Page
  2. Navega usando el menú principal (Header)
  3. Accede a: Home | Plantilla | Formación | Noticias | Entradas | Socios | Fichajes | Contacto
- **Pantallas involucradas**: SCREEN-01 a SCREEN-08
- **Flujo**: Cualquier página → cualquier página (navegación libre)

### FLOW-02: Compra de Entradas
- **Descripción**: El usuario compra entradas para un partido (requiere registro).
- **Pasos**:
  1. Usuario navega a "Entradas" (SCREEN-05)
  2. Ve la lista de próximos partidos con precios
  3. Hace click en "Comprar" en un partido
  4. **¿Está autenticado?**
     - No → Redirigir a Login (SCREEN-10)
     - Sí → Continuar
  5. Selecciona sector (Preferencia / General / Visita)
  6. Selecciona cantidad de entradas
  7. Confirma compra
  8. Ve pantalla de confirmación con código QR simulado
  9. Recibe email de confirmación (simulado)
- **Pantallas involucradas**: SCREEN-05, SCREEN-10, SCREEN-11
- **Estados**: Loading (cargando partidos), Success (compra exitosa), Error (sin stock, error de pago)

### FLOW-03: Registro de Socio
- **Descripción**: El usuario se hace socio del club.
- **Pasos**:
  1. Usuario navega a "Socios" (SCREEN-06)
  2. Ve los planes de membresía (Bronce, Plata, Oro)
  3. Selecciona un plan
  4. **¿Está registrado?**
     - No → Redirigir a Registro (SCREEN-12)
     - Sí → Continuar
  5. Completa datos de membresía
  6. Confirma activación
  7. Ve pantalla de bienvenida como socio
  8. Recibe carnet digital simulado
- **Pantallas involucradas**: SCREEN-06, SCREEN-12, SCREEN-13
- **Estados**: Loading, Success, Error

### FLOW-04: Exploración de Plantilla
- **Descripción**: El usuario explora la plantilla de jugadores y la formación táctica.
- **Pasos**:
  1. Usuario navega a "Plantilla" (SCREEN-03)
  2. Ve el grid de jugadores con fotos, nombres, posiciones
  3. Filtra por posición (POR / DEF / MED / DEL)
  4. Hace click en un jugador → Modal con detalle (estadísticas, biografía)
  5. Navega a "Formación" (SCREEN-04)
  6. Ve el campo táctico con los 11 titulares posicionados
  7. Pasa el mouse sobre un jugador → Nombre y número
  8. Hace click en un jugador → Modal con detalle
  9. Cambia entre formaciones (4-4-2 / 4-3-3)
- **Pantallas involucradas**: SCREEN-03, SCREEN-04

### FLOW-05: Lectura de Noticias
- **Descripción**: El usuario lee noticias del club agregadas automáticamente.
- **Pasos**:
  1. Usuario navega a "Noticias" (SCREEN-07)
  2. Ve el listado de noticias con imágenes, titulares, fuentes y fechas
  3. Filtra por categoría o fuente
  4. Hace click en una noticia → Detalle completo (SCREEN-08)
  5. Ve el contenido completo con enlace a la fuente original
- **Pantallas involucradas**: SCREEN-07, SCREEN-08

### FLOW-06: Ver Fichajes
- **Descripción**: El usuario consulta las altas y bajas del club.
- **Pasos**:
  1. Usuario navega a "Fichajes" (SCREEN-09)
  2. Ve timeline visual de altas y bajas
  3. Filtra por tipo (Altas / Bajas / Todo)
  4. Hace click en un fichaje → Detalle del movimiento
- **Pantallas involucradas**: SCREEN-09

### FLOW-07: Admin — Gestión de Plantilla
- **Descripción**: El administrador gestiona la plantilla de jugadores.
- **Pasos**:
  1. Admin inicia sesión (SCREEN-10)
  2. Navega al Dashboard Admin (SCREEN-14)
  3. Va a "Gestionar Plantilla" (SCREEN-15)
  4. Ve tabla de jugadores con acciones
  5. Puede: Crear, Editar, Dar de baja jugadores
  6. Los cambios se reflejan inmediatamente en el frontend
- **Pantallas involucradas**: SCREEN-10, SCREEN-14, SCREEN-15

---

## Screens

### SCREEN-01: Home Page
- **Objetivo**: Landing page profesional que presenta el club
- **Layout**: Hero full-width → Próximos partidos → Últimas noticias → Estadísticas → CTA Socios
- **Elementos principales**:
  - Hero con imagen del estadio, nombre del club, escudo, lema "Fuerza y Corazón"
  - Barra de navegación con logo + menú + botón socios
  - Sección "Próximos Partidos": 3-4 tarjetas con rival, fecha, hora, lugar
  - Sección "Últimas Noticias": 3 cards con imagen, titular, resumen
  - Sección "El Club en Números": estadísticas (socios, partidos, goles, años)
  - Footer con contacto, redes sociales, enlaces legales
- **Estados**:
  - **Default**: Todo visible
  - **Loading**: Skeleton para próximos partidos y noticias
  - **Error**: Mensaje "No pudimos cargar la información"
  - **Empty**: "Próximamente más contenido"

### SCREEN-02: Plantilla (Lista)
- **Objetivo**: Mostrar todos los jugadores del club
- **Layout**: Header → Filtros → Grid de jugadores
- **Elementos principales**:
  - Tabs de filtro: Todos | Porteros | Defensas | Mediocampistas | Delanteros
  - Grid responsive de PlayerCards (3-4 columnas)
  - Cada PlayerCard: Avatar, número, nombre, posición, nacionalidad
  - Modal de detalle: estadísticas, biografía, fecha de nacimiento
  - Sección de Cuerpo Técnico al final
- **Estados**:
  - **Default**: Grid con todos los jugadores
  - **Loading**: Skeleton cards
  - **Error**: "Error al cargar la plantilla"
  - **Empty**: "No hay jugadores en esta categoría"
  - **Filter Active**: Grid filtrado por posición

### SCREEN-03: Formación Táctica
- **Objetivo**: Mostrar la alineación titular en el campo
- **Layout**: Selector de formación → Campo SVG → Suplentes
- **Elementos principales**:
  - Campo de fútbol (vista aérea) con líneas de cancha en SVG
  - 11 jugadores posicionados según formación
  - Cada jugador: avatar circular, número, nombre (hover)
  - Botón para cambiar entre formaciones (4-4-2, 4-3-3, 4-2-3-1)
  - Leyenda de colores por posición
  - Lista de suplentes debajo del campo
- **Estados**:
  - **Default**: Formación 4-4-2 seleccionada
  - **Loading**: Skeleton del campo
  - **Empty**: "Sin formación disponible"

### SCREEN-04: Noticias
- **Objetivo**: Ver todas las noticias del club
- **Layout**: Filtro → Grid de noticias → Paginación
- **Elementos principales**:
  - Filtro por fuente o categoría
  - Grid de NewsCards (3 columnas)
  - Cada NewsCard: Imagen, fuente (logo), titular, resumen, fecha
  - Paginación infinita o por páginas
  - Indicador "Extraído de [fuente]"
- **Estados**:
  - **Default**: Últimas 12 noticias
  - **Loading**: Skeleton cards
  - **Error**: "No pudimos cargar las noticias. Intenta más tarde."
  - **Empty**: "No hay noticias disponibles"

### SCREEN-05: Detalle de Noticia
- **Objetivo**: Leer noticia completa
- **Layout**: Breadcrumb → Imagen principal → Contenido → Fuente
- **Elementos principales**:
  - Breadcrumb: Home > Noticias > [Título]
  - Imagen destacada
  - Titular grande, fecha, fuente, autor
  - Contenido completo de la noticia
  - Botón "Ver fuente original"
  - Noticias relacionadas al final
- **Estados**:
  - **Loading**: Skeleton de artículo
  - **Error**: "No se pudo cargar la noticia"

### SCREEN-06: Entradas
- **Objetivo**: Comprar entradas para partidos
- **Layout**: Lista de partidos → Modal de compra
- **Elementos principales**:
  - Próximos partidos con tarjetas: rival, fecha, estadio, precio desde
  - Selector de sector: Preferencia ($15), General ($10), Visita ($12)
  - Selector de cantidad (1-10)
  - Resumen de compra con total
  - Botón "Confirmar Compra"
  - Historial de compras del usuario autenticado
- **Estados**:
  - **Default**: Lista de partidos disponibles
  - **Loading**: Skeleton de partidos
  - **Empty**: "No hay próximos partidos programados"
  - **Success**: "¡Compra exitosa! Tu código QR: [código]"
  - **Error**: "Error al procesar la compra"

### SCREEN-07: Socios / Membresías
- **Objetivo**: Afiliarse como socio del club
- **Layout**: Planes → Formulario → Confirmación
- **Elementos principales**:
  - 3 tarjetas de planes (Bronce, Plata, Oro) con precio y beneficios
  - Tabla comparativa de beneficios
  - Formulario de afiliación con datos personales
  - Resumen de membresía seleccionada
  - Carnet digital simulado al finalizar
- **Estados**:
  - **Default**: Planes visibles
  - **Selected**: Plan seleccionado resaltado
  - **Success**: "¡Bienvenido a la familia AntimonioFC!"
  - **Error**: "Error al procesar la membresía"

### SCREEN-08: Fichajes
- **Objetivo**: Ver altas y bajas del club
- **Layout**: Filtro → Timeline vertical
- **Elementos principales**:
  - Filtro: Todos | Altas | Bajas
  - Timeline vertical con fichajes ordenados por fecha
  - Cada entrada: Avatar jugador, nombre, tipo (alta/baja), club, fecha
  - Altas en verde/azul, Bajas en rojo/naranja
  - Resumen del mercado (total altas, bajas, inversión)
- **Estados**:
  - **Default**: Timeline completo
  - **Loading**: Skeleton timeline
  - **Empty**: "No hay movimientos en el mercado"

### SCREEN-09: Contacto
- **Objetivo**: Formulario de contacto e información del club
- **Layout**: Formulario → Información de contacto → Mapa
- **Elementos principales**:
  - Formulario: nombre, email, asunto, mensaje
  - Dirección del club, teléfono, email
  - Redes sociales con iconos
  - Mapa embebido de la ubicación
- **Estados**:
  - **Default**: Formulario vacío
  - **Success**: "Mensaje enviado correctamente"
  - **Error**: "Error al enviar el mensaje"

### SCREEN-10: Login
- **Objetivo**: Inicio de sesión
- **Layout**: Formulario centrado con escudo
- **Elementos principales**:
  - Escudo del club
  - Input email + contraseña
  - Botón "Iniciar Sesión"
  - Enlace "¿No tienes cuenta? Regístrate"
  - Enlace "¿Olvidaste tu contraseña?"
- **Estados**:
  - **Default**: Formulario vacío
  - **Loading**: Spinner en botón
  - **Error**: "Credenciales incorrectas"

### SCREEN-11: Registro
- **Objetivo**: Crear cuenta de usuario
- **Layout**: Formulario centrado
- **Elementos principales**:
  - Input nombre completo, email, contraseña, confirmar contraseña
  - Aceptar términos y condiciones
  - Botón "Crear Cuenta"
- **Estados**:
  - **Default**: Formulario vacío
  - **Loading**: Spinner
  - **Error**: "El email ya está registrado" / "Contraseña muy débil"
  - **Success**: "Cuenta creada. Bienvenido!"

### SCREEN-12: Perfil de Usuario
- **Objetivo**: Ver y editar perfil
- **Layout**: Datos personales → Membresía → Historial
- **Elementos principales**:
  - Avatar del usuario, nombre, email
  - Sección de membresía actual (si aplica)
  - Historial de compras de entradas
  - Botón "Cerrar Sesión"
- **Estados**:
  - **Default**: Datos cargados
  - **Loading**: Skeleton

### SCREEN-13: Admin Dashboard
- **Objetivo**: Panel de administración
- **Layout**: Sidebar → Dashboard con cards
- **Elementos principales**:
  - Sidebar con enlaces: Dashboard, Jugadores, Partidos, Noticias, Socios, Entradas
  - Cards de resumen: total jugadores, socios activos, entradas vendidas, noticias publicadas
  - Últimas acciones
  - Gráficos simples (socios por mes, entradas por partido)
- **Estados**:
  - **Default**: Dashboard con datos
  - **Loading**: Skeleton
  - **Error**: "Error al cargar el dashboard"

---

## Mapa de Navegación

```
                         ┌─────────────┐
                         │   Home       │
                         │   SCREEN-01  │
                         └──────┬──────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────────┐
│   Plantilla   │   │   Noticias   │   │    Entradas      │
│   SCREEN-02   │   │   SCREEN-04  │   │   SCREEN-06      │
│   SCREEN-03   │   │   SCREEN-05  │   └────────┬─────────┘
└──────┬───────┘   └──────────────┘            │
       │                                        │
       ▼                                        ▼
┌──────────────┐                       ┌────────────────┐
│   Formación  │                       │   Login/Reg     │
│   SCREEN-03  │                       │   SCREEN-10/11  │
└──────────────┘                       └────────┬───────┘
                                                │
        ┌───────────────────────────────────────┼───────────────┐
        │                                       │               │
        ▼                                       ▼               ▼
┌──────────────┐                       ┌────────────────┐
│   Socios     │                       │   Perfil        │
│   SCREEN-07  │                       │   SCREEN-12     │
└──────────────┘                       └────────┬───────┘
                                                │
        ┌───────────────────────────────────────┼───────────────┐
        │                                       │               │
        ▼                                       ▼               ▼
┌──────────────┐                       ┌────────────────┐
│   Fichajes   │                       │   Admin         │
│   SCREEN-08  │                       │   SCREEN-13     │
└──────────────┘                       └────────────────┘
```
