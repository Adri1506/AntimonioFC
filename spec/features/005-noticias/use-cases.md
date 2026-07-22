# Use Cases: F05 — Noticias

## UC-01: Ver listado de noticias
- **Actor:** Visitante
- **Trigger:** Navegar a /noticias
- **Preconditions:** BD con noticias seed
- **Main Flow:**
  Given el usuario navega a "/noticias"
  When la página carga
  Then se muestra un grid con las últimas noticias (6 por página)
  And cada NewsCard muestra: imagen, badge de fuente, titular, resumen, fecha
  And hay paginación o "Cargar más" al final

## UC-02: Filtrar noticias por categoría
- **Actor:** Visitante
- **Trigger:** Click en filtro de categoría
- **Preconditions:** Listado de noticias visible
- **Main Flow:**
  Given el listado de noticias visible
  When el usuario selecciona "Fichajes"
  Then se muestran solo las noticias de categoría "Fichajes"
  And el filtro activo queda resaltado
- **Error Flow:**
  When no hay noticias en la categoría
  Then se muestra "No hay noticias en esta categoría"

## UC-03: Leer noticia completa
- **Actor:** Visitante
- **Trigger:** Click en NewsCard
- **Preconditions:** Listado de noticias cargado
- **Main Flow:**
  Given el listado de noticias visible
  When el usuario hace click en una noticia
  Then navega a /noticias/:id
  And se muestra: breadcrumb, imagen destacada, titular, fecha, fuente, contenido
  And al final, noticias relacionadas (3 cards)
  And un botón "Ver fuente original" (link externo)

## UC-04: Paginar noticias
- **Actor:** Visitante
- **Trigger:** Click en "Cargar más" o número de página
- **Preconditions:** Listado de noticias con más de 6 items
- **Main Flow:**
  Given el listado con 12 noticias (2 páginas)
  When el usuario hace click en "Siguiente"
  Then se cargan las siguientes 6 noticias
  And la paginación se actualiza
