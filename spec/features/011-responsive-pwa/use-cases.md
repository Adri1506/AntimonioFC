# Use Cases: F11 — Responsive + PWA

## UC-01: Navegar en mobile con menú hamburguesa
- **Actor:** Visitante (mobile)
- **Trigger:** Cargar sitio en pantalla < 768px
- **Preconditions:** Sitio cargado en dispositivo móvil
- **Main Flow:**
  Given el sitio cargado en un móvil
  When la pantalla es menor a 768px
  Then el menú horizontal se oculta
  And aparece un botón hamburguesa (☰) en el header
  When el usuario toca el botón hamburguesa
  Then se abre un drawer desde la derecha con todas las opciones del menú
  When selecciona una opción
  Then el drawer se cierra y navega a la sección
  When toca fuera del drawer
  Then el drawer se cierra

## UC-02: Instalar PWA
- **Actor:** Visitante
- **Trigger:** Navegar al sitio en Chrome/Android
- **Preconditions:** Service worker registrado, manifest configurado
- **Main Flow:**
  Given el sitio cargado en Chrome Android
  When el navegador detecta el manifest.json
  Then muestra el banner "Agregar a pantalla de inicio"
  When el usuario acepta
  Then el sitio se agrega como app independiente con icono del club
  And al abrirla, se muestra sin la barra de navegación del browser (standalone)

## UC-03: Offline fallback
- **Actor:** Visitante
- **Trigger:** Perder conexión a internet
- **Preconditions:** Service worker registrado, assets cacheados
- **Main Flow:**
  Given el usuario navegó previamente el sitio
  When pierde conexión a internet
  Then el service worker sirve los assets cacheados
  And se muestra un banner "Sin conexión. Algunos datos pueden no estar disponibles."
  When se recupera la conexión
  Then el banner desaparece y el sitio vuelve a la normalidad
