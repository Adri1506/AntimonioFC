# Design Decisions: AntimonioFC

## Decision Log

### DD-001: Azul Marino (#000080) como Color Dominante
- **Contexto**: El club tiene azul marino y naranjo eléctrico como colores institucionales. Debemos decidir cuál es el color dominante.
- **Decisión**: Azul marino como color primario (fondos, headers, navegación), naranjo como acento (CTAs, highlights, badges).
- **Alternativas**:
  - Naranjo dominante: Demasiado agresivo visualmente, cansa la vista en grandes superficies.
  - 50/50: Falta de jerarquía visual, compite por atención.
  - Blanco dominante con acentos: Correcto pero pierde la identidad fuerte del club.
- **Fundamento**: El azul marino transmite seriedad, profesionalismo y solidez institucional. El naranjo como acento dirige la atención del usuario a las acciones importantes (comprar, suscribirse). El ratio 70/30 (azul/naranja) es equilibrado.

### DD-002: Barlow + Inter como Pares Tipográficos
- **Contexto**: Necesitamos una tipografía para títulos (deportiva, impactante) y otra para cuerpo (legible, profesional).
- **Decisión**: Barlow (títulos) + Inter (cuerpo).
- **Alternativas**:
  - Oswald + Open Sans: Oswald es muy usado en deportes, pero es demasiado angosto y agresivo para todo el sitio.
  - Montserrat + Roboto: Buena combinación pero muy común, falta personalidad.
  - Bebas Neue + Lato: Bebas Neue solo funciona en mayúsculas, limitante.
  - **Razón**: Barlow es una grotesca geométrica con personalidad deportiva sin ser excesivamente agresiva. Inter es ultra legible en pantalla, con buena altura x.
- **Fundamento**: Barlow tiene la presencia para titulares deportivos (como las camisetas de fútbol), Inter garantiza lecturas largas sin fatiga visual. Ambas son libres (Open Font License).

### DD-003: Componentes shadcn/ui con Theming Custom
- **Contexto**: Necesitamos componentes accesibles pero con la identidad del club.
- **Decisión**: Usar shadcn/ui como base, sobreescribiendo los tokens CSS con los colores del club.
- **Alternativas**:
  - Material UI: Muy pesado, difícil de customizar fuera de los temas predefinidos.
  - Chakra UI: Buena accesibilidad pero menor rendimiento que Radix.
  - Componentes desde cero: Mucho trabajo, propenso a errores de accesibilidad.
- **Fundamento**: shadcn/ui es código nuestro (no dependencia oculta), usa Radix UI (accesibilidad garantizada) y se integra nativamente con Tailwind. Los tokens CSS permiten cambiar toda la paleta con editar un archivo.

### DD-004: Skeleton Loading vs Spinners
- **Contexto**: Al cargar datos (jugadores, noticias, partidos), necesitamos indicar carga.
- **Decisión**: Skeleton screens en cards y listas. Spinner solo en acciones inline (botones).
- **Alternativas**: Spinner grande centrado (menos informativo, el usuario no sabe qué está cargando), nada (tiempo de carga percibido mayor).
- **Fundamento**: Los skeleton screens muestran la estructura del contenido que está cargando, reduciendo la percepción de espera. Especialmente importante en la plantilla (cards de jugadores).

### DD-005: Formación Táctica con SVG Interactivo
- **Contexto**: La formación táctica es el centro visual del sitio. Debe ser atractiva e interactiva.
- **Decisión**: SVG dibujado con coordenadas, campo verde con marcas, jugadores como círculos con imágenes.
- **Alternativas**:
  - Canvas 2D: Más performante pero menos accesible, eventos de mouse más complejos.
  - Imagen estática + posiciones absolutas con CSS: Frágil, no responsive.
  - Three.js / WebGL: Excesivo para 11 círculos en un campo.
- **Fundamento**: SVG es declarativo, se integra con React, es responsive (viewBox escalable), y soporta eventos de mouse nativos. El campo se dibuja con `<path>` y `<line>`, los jugadores con `<image>` + `<circle>`.

### DD-006: Logo/Shield Corporativo vs Escudo Realista
- **Contexto**: El escudo del club puede ser un diseño vectorial simple o un escudo realista detallado.
- **Decisión**: Escudo vectorial semirrealista con forma de escudo suizo, bordes dorados, estrella en la parte superior, y elementos que representen Antimonio (minería, montañas).
- **Alternativas**:
  - Minimalista plano: Menos versátil, puede parecer genérico.
  - Foto realista: Dificultad para escalar a favicon, no funciona en B/N.
- **Fundamento**: El escudo debe funcionar desde 16px (favicon) hasta 200px (hero). El estilo vectorial con detalles permite ambas escalas. Los elementos mineros (picos, montañas) conectan con la identidad local de Antimonio.

### DD-007: Modo Oscuro No Prioritario
- **Contexto**: Algunos sitios modernos incluyen modo oscuro.
- **Decisión**: No implementar modo oscuro en la Fase 1. Posible mejora futura.
- **Alternativas**: Implementar desde el inicio (duplica trabajo de theming), solo modo claro (más simple pero menos moderno).
- **Fundamento**: El azul marino ya es un color oscuro y funciona bien como fondo. El sitio está diseñado con fondos oscuros en header/footer y claros en contenido, creando contraste natural sin necesidad de un toggle de modo oscuro.

## Assumptions
1. **Los usuarios típicos** del sitio son hombres y mujeres de 18-45 años, chilenos, familiarizados con smartphones.
2. **La resolución más común** será 1920x1080 (desktop) y 375x812 (mobile iPhone X+).
3. **Los tiempos de carga** serán aceptables (< 3s) para el mercado chileno con conexiones promedio.
4. **Los usuarios prefieren** ver fotos de los jugadores antes que solo nombres.

## Constraints
1. **Tamaño máximo de imágenes**: 500KB cada una para tiempos de carga razonables.
2. **La paleta está fijada** por los colores institucionales del club. No hay libertad creativa total.
3. **Las fuentes deben ser gratuitas** (Google Fonts). No hay presupuesto para licencias tipográficas.
4. **El sitio debe funcionar** sin JavaScript en lectores de pantalla (contenido estático mínimo garantizado).
