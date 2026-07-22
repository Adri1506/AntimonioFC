# Use Cases: F01 — Design System

## UC-01: Definir tokens CSS
- **Actor:** Developer
- **Trigger:** Configuración inicial del diseño
- **Preconditions:** Tailwind CSS configurado (F00)
- **Main Flow:**
  Given Tailwind CSS configurado
  When se definen las variables CSS en `:root` en index.css
  Then los tokens --color-primary (#000080), --color-accent (#FF6500) y derivados están disponibles globalmente
  And Tailwind puede usarlos via `bg-primary`, `text-accent`, etc.

## UC-02: Cargar tipografía Barlow + Inter
- **Actor:** Developer
- **Trigger:** Después de tokens CSS
- **Preconditions:** Proyecto frontend creado
- **Main Flow:**
  Given el proyecto frontend
  When se importan Barlow e Inter desde Google Fonts en index.html
  Then Barlow se usa en headings (h1-h4) e Inter en body
  And las clases utilitarias font-heading y font-body funcionan

## UC-03: Renderizar Header con navegación
- **Actor:** Visitante
- **Trigger:** Cargar cualquier página
- **Preconditions:** Layout implementado
- **Main Flow:**
  Given el sitio cargado
  When se renderiza cualquier página
  Then el Header se muestra fijo arriba con logo, menú de navegación y botón "Hazte Socio"
  And el logo es el escudo del club (img/escudo.png)
- **Error Flow:**
  When la imagen del escudo no carga
  Then se muestra un placeholder con el texto "AFC"

## UC-04: Renderizar Footer institucional
- **Actor:** Visitante
- **Trigger:** Scroll al final de cualquier página
- **Preconditions:** Layout implementado
- **Main Flow:**
  Given el sitio cargado
  When el usuario hace scroll al footer
  Then se muestran 4 columnas con enlaces + redes sociales + escudo + copyright
  And el footer tiene fondo gradient-dark (#000052 → #000080)
