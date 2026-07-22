# Use Cases: F02 — Home Page

## UC-01: Ver Home Page completa
- **Actor:** Visitante
- **Trigger:** Navegar a la raíz del sitio
- **Preconditions:** Frontend sirviendo, API backend disponible
- **Main Flow:**
  Given el usuario navega a "/"
  When la página carga
  Then se muestra el Hero con escudo, nombre del club y lema
  And se muestran los próximos partidos (3-4 tarjetas)
  And se muestran las últimas 3 noticias
  And se muestran las estadísticas del club
  And el header y footer están visibles
- **Alternative Flow (API caída):**
  When la API no responde
  Then los datos se cargan desde data/ (datos estáticos dummy)
  And se muestra un toast "Algunos datos pueden no estar actualizados"

## UC-02: Navegar a secciones desde Home
- **Actor:** Visitante
- **Trigger:** Click en CTA o enlace
- **Preconditions:** Home cargada
- **Main Flow:**
  Given el usuario está en Home
  When hace click en "Hazte Socio"
  Then navega a /socios
  When hace click en "Compra tus Entradas"
  Then navega a /entradas
  When hace click en una noticia destacada
  Then navega a /noticias/:id
- **Error Flow:**
  When la ruta no existe
  Then se muestra la página 404

## UC-03: Ver estado de carga
- **Actor:** Visitante
- **Trigger:** Carga inicial de Home
- **Preconditions:** API lenta o en proceso
- **Main Flow:**
  Given el usuario navega a Home
  When los datos están cargando
  Then se muestran skeleton cards en lugar de partidos y noticias
  And el Hero se muestra inmediatamente (sin skeleton)
  Then cuando los datos cargan, los skeletons se reemplazan suavemente
