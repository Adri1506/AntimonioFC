# Prompts de Imágenes: AntimonioFC

## ⚠️ Instrucciones Generales

Todas las imágenes deben generarse con **IA frontera** (Midjourney v6 / DALL-E 3 / Stable Diffusion XL).
Para mantener consistencia visual, todas las imágenes deben seguir estas reglas:

- **Estilo general**: Semi-realista deportivo, iluminación dramática, colores saturados
- **Paleta**: Azul marino (#000080) y Naranjo eléctrico (#FF6500) siempre presentes
- **Aspect ratio**: Especificado en cada prompt
- **Post-procesado**: Todas las imágenes deben pasarse por un filtro de color para uniformar la paleta
- **Output**: PNG (con transparencia donde se especifique), 4K mínimo

---

## 1. ESCUDO DEL CLUB

### 1.1 Escudo Principal (Shield)

**Archivo**: `public/images/shield.svg` (vectorizado a partir de la IA)
**Formato IA**: PNG 1024x1024 → vectorizar después
**Aspect ratio**: 1:1

**Prompt Midjourney**:
```
/Imagine prompt:
Diseño de escudo de fútbol profesional para club chileno llamado "Antimonio FC".
Forma de escudo suizo clásico con bordes dorados brillantes.
División diagonal: mitad superior azul marino oscuro (#000080) y mitad inferior naranjo eléctrico (#FF6500).
En el centro, un cóndor andino estilizado en dorado sobre un fondo de montañas mineras plateadas.
Estrella dorada de 5 puntas en la parte superior del escudo.
Cinta dorada curva en la base con el texto "ANTIMONIO FC" en letras negras mayúsculas.
Debajo, otra cinta pequeña con el año "1958".
Dos ramas de laurel doradas a los lados del escudo.
Estilo: vectorial semirrealista, textura metálica sutil, sombras suaves.
Iluminación frontal, colores vibrantes, fondo transparente.
--ar 1:1 --v 6.1 --s 750
```

**Prompt DALL-E**:
```
Crea el escudo oficial de un club de fútbol chileno llamado "Antimonio FC".
El escudo tiene forma de escudo suizo clásico con bordes dorados.
La mitad superior es azul marino oscuro (#000080), la mitad inferior es naranjo eléctrico (#FF6500).
En el centro hay un cóndor dorado volando sobre montañas mineras plateadas.
Una estrella dorada de 5 puntas corona el escudo.
En la base, una cinta dorada curva dice "ANTIMONIO FC" en mayúsculas negras.
Debajo otra cinta pequeña dice "1958".
Ramas de laurel doradas flanquean el escudo.
Estilo vectorial semirrealista con acabado metálico. Fondo transparente.
```

### 1.2 Favicon

**Archivo**: `public/favicon.svg`
Versión simplificada del escudo para 16x16 y 32x32. Solo el cóndor + estrella, sin texto ni laureles.

---

## 2. ESTADIO

### 2.1 Estadio Exterior (Hero Background)

**Archivo**: `public/images/stadium-exterior.jpg`
**Aspect ratio**: 16:9 (1920x1080)
**Uso**: Fondo del Hero Section en Home Page

**Prompt**:
```
Fotografía realista de un estadio de fútbol moderno mediano en una ciudad chilena al atardecer.
Arquitectura moderna con fachada de acero y vidrio.
El estadio tiene una gran fachada curva con paneles LED azul marino y naranjo eléctrico.
Una enorme bandera del club cuelga en la entrada principal.
Césped natural visible desde la entrada abierta.
Luces del estadio encendidas creando un ambiente dorado.
Montañas andinas al fondo con nieve en los picos.
Cielo anaranjado del atardecer chileno.
Estacionamiento con algunas personas entrando al estadio.
Estilo: fotografía realista, lente gran angular 24mm, HDR, colores saturados,
alta definición, sin personas en primer plano.
--ar 16:9 --v 6.1 --s 500
```

### 2.2 Estadio Interior (Campo desde Tribuna)

**Archivo**: `public/images/stadium-interior.jpg`
**Aspect ratio**: 16:9
**Uso**: Sección "El Estadio", fondo de secciones

**Prompt**:
```
Vista interior de un estadio de fútbol profesional desde la tribuna preferencia.
Campo de césped perfectamente cuidado con rayas verdes y oscuras alternadas.
El marcador electrónico muestra "Antimonio FC 3 - 1" con letras naranjas.
Las gradas son de color azul marino con asientos naranjos formando patrones.
Techo moderno con estructura metálica que protege las gradas.
Banderas del club cuelgan de los bordes del techo.
Luces LED blancas brillantes iluminan el campo.
Día soleado, luz natural entrando por los lados abiertos.
Estilo: fotografía realista deportiva, lente 35mm, profundidad de campo media,
colores vivos, atmósfera de partido.
--ar 16:9 --v 6.1 --s 500
```

### 2.3 Vista Panorámica Estadio Lleno

**Archivo**: `public/images/stadium-full.jpg`
**Aspect ratio**: 16:9
**Uso**: Banner de "Entradas" y "Socios"

**Prompt**:
```
Vista panorámica de un estadio de fútbol chileno completamente lleno durante un partido.
Espectadores con camisetas azul marino y naranjas ondeando banderas y bufandas.
Mosaico de colores del club en las gradas.
En el campo, los jugadores con camisetas azul marino están en posición para un tiro de esquina.
Humo de bengalas naranjas en una esquina de la grada.
Ambiente festivo y ruidoso, pasión sudamericana.
Cámara desde la cabina de prensa, visión general del estadio.
Atmósfera eléctrica, emoción palpable.
Estilo: fotografía deportiva profesional, lente gran angular 16mm,
alta velocidad de obturación, colores intensos, nitidez máxima.
--ar 16:9 --v 6.1 --s 750
```

---

## 3. BANDERAS Y LIENZOS

### 3.1 Bandera del Club (Horizontal)

**Archivo**: `public/images/flag-horizontal.jpg`
**Aspect ratio**: 3:2
**Uso**: Decoración en secciones, galería

**Prompt**:
```
Bandera de tela de un club de fútbol chileno flameando al viento.
Fondo azul marino oscuro con una franja diagonal naranja eléctrico desde la esquina inferior izquierda a la superior derecha.
En el centro, el escudo del club bordado en hilo dorado brillante.
Texto "ANTIMONIO FC" en letras blancas mayúsculas bajo el escudo.
La bandera está ondeando vigorosamente, con pliegues y sombras naturales.
Cielo azul despejado de fondo, luz solar directa que ilumina los colores vibrantes.
Estilo: fotografía realista de textura textil, macro detalles del bordado,
colores saturados, movimiento congelado.
--ar 3:2 --v 6.1 --s 500
```

### 3.2 Bandera del Club (Vertical / Estandarte)

**Archivo**: `public/images/flag-vertical.jpg`
**Aspect ratio**: 2:3
**Uso**: Decoración en laterales, perfiles

**Prompt**:
```
Estandarte vertical de club de fútbol chileno colgado en una pared de ladrillo.
Formato vertical, fondo naranjo eléctrico con bordes azul marino.
Escudo del club en la parte superior, grande y detallado.
Texto "ANTIMONIO FC" en letras doradas mayúsculas, y debajo "1958" más pequeño.
Franjas decorativas azul marino en la parte inferior con flecos dorados.
Estilo: textura de tela pesada (raso), pliegues suaves, bordados dorados brillantes,
iluminación lateral cálida, fondo de pared de ladrillo oscuro desenfocado.
--ar 2:3 --v 6.1 --s 500
```

### 3.3 Lienzo Decorativo (Wide Banner)

**Archivo**: `public/images/banner-club.jpg`
**Aspect ratio**: 21:9
**Uso**: Decoración horizontal en secciones

**Prompt**:
```
Lienzo decorativo de gran formato para club de fútbol chileno.
Fondo degradado de azul marino a naranjo eléctrico.
En el centro, el escudo del club grande con efecto de relieve metálico.
A los lados, patrones geométricos modernos inspirados en la minería del antimonio (cristales, triángulos).
Texto "FUERZA Y CORAZÓN" en letras blancas mayúsculas, tipografía bold, en la parte inferior.
Textura de lona deportiva con costuras decorativas en los bordes.
Estilo: diseño gráfico moderno, vectorial con texturas realistas,
iluminación frontal uniforme, look profesional de merchandising oficial.
--ar 21:9 --v 6.1 --s 400
```

### 3.4 Mosaico de Hinchas (Para Fondo de Secciones)

**Archivo**: `public/images/fans-mosaic.jpg`
**Aspect ratio**: 16:9
**Uso**: Fondo de sección "Socios"

**Prompt**:
```
Mosaico de aficionados al fútbol chileno celebrando en las gradas.
Hinchas con camisetas azul marino y bufandas naranjas levantando los brazos.
Banderas del club ondeando sobre la multitud.
Papel picado naranja y azul cayendo desde las gradas.
Sonrisas, abrazos, cánticos. Pasión futbolera sudamericana auténtica.
Collage dinámico de múltiples caras y expresiones de felicidad.
Estilo: fotografía documental deportiva, lente 50mm, f/2.8,
desenfoque de fondo, colores cálidos, momento genuino.
--ar 16:9 --v 6.1 --s 500
```

---

## 4. AVATARES DE JUGADORES

### 4.1 Prompt Genérico Base

Este prompt se usará como base para CADA jugador, variando los parámetros físicos.

**Archivo**: `public/images/players/{numero}-{nombre}.png`
**Aspect ratio**: 1:1 (cuadrado, centrado en rostro y torso)

**Prompt Base (Midjourney)**:
```
Retrato deportivo profesional de un futbolista chileno, [EDAD] años.
[RASGOS_FÍSICOS: tono de piel, color de pelo, color de ojos, tipo de rostro, peinado, vello facial].
Viste la camiseta oficial de fútbol del club Antimonio FC.
La camiseta es azul marino oscuro con detalles naranjos en los hombros y el cuello.
En el pecho, el escudo del club bordado en dorado.
El número [NÚMERO] en grande en el pecho, en color naranjo brillante con borde blanco.
Fondo degradado de estudio: azul marino oscuro a naranjo suave.
Iluminación dramática tipo retrato deportivo: luz principal desde la izquierda 45°, relleno suave.
Expresión seria, determinada, mirada fija a cámara.
Sudor ligero en la frente, acabado matte en la piel.
Estilo: fotografía deportiva profesional tipo ESPN, f/2.8, lente 85mm,
nitidez extrema en rostro, desenfoque suave de fondo,
colores cinematográficos con tonos fríos y acento naranja.
--ar 1:1 --v 6.1 --s 600 --style raw
```

### 4.2 Tabla de Variaciones por Jugador (Plantilla Completa)

Aplicar el prompt base con los siguientes parámetros específicos para cada jugador.

#### Porteros (POR)

| # | Nombre | Edad | Rasgos Físicos |
|---|--------|------|----------------|
| 1 | **Matías Contreras** | 28 | Tono de piel medio claro, pelo castaño corto, ojos marrones, rostro angulado, cejas pobladas, sin barba |
| 12 | **Diego Muñoz** | 24 | Tono de piel medio oscuro, pelo negro rapado, ojos marrones oscuros, rostro cuadrado, barba de candado corta |
| 20 | **Luis Castillo** | 31 | Tono de piel medio claro, pelo castaño claro corto, ojos verdes, rostro ovalado, barba completa espesa |

#### Defensas (DEF)

| # | Nombre | Edad | Posición | Rasgos Físicos |
|---|--------|------|----------|----------------|
| 2 | **Carlos Riquelme** | 26 | LD | Tono de piel medio, pelo negro ondulado corto, ojos marrones, rostro alargado, bigote delgado |
| 3 | **José Miguel Silva** | 29 | DF | Tono de piel claro, pelo castaño oscuro corto con entradas, ojos marrones, rostro redondo, sin barba |
| 4 | **Pablo González** | 27 | DF | Tono de piel medio oscuro, pelo negro afro corto, ojos marrones, rostro ancho, barba completa |
| 5 | **Andrés Navarro** | 30 | DF | Tono de piel claro, pelo rubio oscuro corto, ojos azules, rostro angulado, barba ligera de 3 días |
| 13 | **Felipe Torres** | 22 | LI | Tono de piel medio, pelo castaño largo (sobre orejas), ojos marrones, rostro delgado, sin barba |
| 14 | **Cristóbal Vega** | 25 | LD/LI | Tono de piel medio, pelo negro corto con fade, ojos marrones oscuros, rostro cuadrado, perilla |

#### Mediocampistas (MED)

| # | Nombre | Edad | Posición | Rasgos Físicos |
|---|--------|------|----------|----------------|
| 6 | **Francisco Díaz** | 28 | MC | Tono de piel medio claro, pelo castaño claro corto, ojos marrones claros, rostro ovalado, barba completa corta |
| 7 | **Javier Mendoza** | 26 | MD | Tono de piel medio oscuro, pelo negro corto con ondas, ojos marrones, rostro angulado, patillas pobladas |
| 8 | **Sebastián Herrera** | 29 | MC | Tono de piel claro, pelo castaño rojizo corto, ojos marrones, rostro redondo, pecas en mejillas, sin barba |
| 15 | **Tomás Pizarro** | 23 | MC | Tono de piel medio, pelo castaño oscuro tupido, ojos marrones oscuros, rostro cuadrado, barba densa |
| 16 | **Emilio Fuentes** | 21 | MI | Tono de piel claro, pelo rubio corto, ojos grises, rostro delgado, sin barba, cejas claras |
| 17 | **Vicente Morales** | 27 | MD/MI | Tono de piel medio oscuro, pelo negro con rastas cortas, ojos marrones, rostro alargado, barba fina |

#### Delanteros (DEL)

| # | Nombre | Edad | Posición | Rasgos Físicos |
|---|--------|------|----------|----------------|
| 9 | **Marcelo Rojas** | 32 | DC | Tono de piel medio, pelo castaño oscuro corto con canas en sienes, ojos marrones, rostro cuadrado, cicatriz en ceja izquierda |
| 10 | **Ignacio Palma** | 25 | DC | Tono de piel medio claro, pelo negro lacio corto con flequillo, ojos marrones grandes, rostro angulado, barba de candado |
| 11 | **Álvaro Soto** | 24 | EI | Tono de piel claro, pelo castaño claro despeinado, ojos marrones claros, rostro delgado, pecas, sin barba |
| 18 | **Martín Aravena** | 22 | ED | Tono de piel medio oscuro, pelo negro con fade alto, ojos marrones, rostro ovalado, bigote fino |
| 19 | **Benjamín Lagos** | 20 | DC | Tono de piel claro, pelo rubio platino corto (teñido), ojos azules, rostro redondo, sonrisa amplia, sin barba |
| 21 | **Gabriel Espinoza** | 23 | EI/ED | Tono de piel medio, pelo castaño oscuro con moño (man bun), ojos marrones, rostro alargado, barba completa larga |
| 22 | **Santiago Peña** | 29 | ED/DC | Tono de piel oscuro, pelo negro rapado, ojos marrones oscuros, rostro ancho, barba completa canosa |

### 4.3 Instrucciones de Generación

1. Generar CADA avatar INDIVIDUALMENTE con el prompt base + rasgos específicos.
2. Asegurar que la camiseta sea idéntica en todos (azul marino con detalles naranjos).
3. El número debe cambiarse en cada generación.
4. Post-procesado: aplicar mismo filtro de color a todas las imágenes (blanco + contraste + saturación) para uniformidad.
5. Recortar a cuadrado 1:1 centrado en el rostro, dejando ver los hombros y el número.

---

## 5. CUERPO TÉCNICO

### 5.1 Director Técnico

**Archivo**: `public/images/coach-dt.png`
**Aspect ratio**: 1:1

**Prompt Adaptado**:
```
Retrato profesional de un entrenador de fútbol chileno de 52 años.
Pelo canoso corto, entradas pronunciadas, rostro arrugado con experiencia,
barba canosa de 3 días, ojos marrones intensos.
Viste un traje deportivo elegante azul marino del club Antimonio FC
con detalles naranjas, el escudo bordado en el pecho.
Brazos cruzados, postura de autoridad, fondo oscuro de estudio.
Iluminación dramática de costado, expresión seria y analítica.
Estilo: fotografía profesional deportiva, lente 85mm, f/2.8,
blanco y negro con acento naranja en el logo.
--ar 1:1 --v 6.1 --s 600
```

### 5.2 Ayudante de Campo

**Archivo**: `public/images/coach-assistant.png`
**Aspect ratio**: 1:1

**Prompt Adaptado**:
```
Retrato de un asistente técnico de fútbol chileno de 38 años.
Pelo castaño oscuro corto, rostro angulado, barba completa bien cuidada,
ojos marrones claros, sonrisa profesional.
Viste chándal deportivo azul marino del club Antimonio FC con detalles naranjas.
Silbato plateado colgando del cuello, tableta táctica en las manos.
Fondo de campo de fútbol desenfocado.
Estilo: fotografía deportiva realista, color natural, iluminación equilibrada.
--ar 1:1 --v 6.1 --s 500
```

### 5.3 Preparador Físico

**Archivo**: `public/images/coach-pf.png`
**Aspect ratio**: 1:1

**Prompt Adaptado**:
```
Retrato de un preparador físico chileno de 34 años.
Complexión atlética, pelo negro rapado, rostro cuadrado,
sin barba, ojos marrones, expresión enérgica.
Viste polera deportiva naranja del club Antimonio FC,
banda elástica en la muñeca, cronómetro digital en la mano.
Fondo de gimnasio con pesas desenfocadas.
Sudor ligero, mirada motivadora.
Estilo: fotografía deportiva vibrante, color cálido, acción congelada.
--ar 1:1 --v 6.1 --s 500
```

### 5.4 Médico del Club

**Archivo**: `public/images/coach-doctor.png`
**Aspect ratio**: 1:1

**Prompt Adaptado**:
```
Retrato del médico del club Antimonio FC, chileno, 45 años.
Pelo castaño con canas, peinado formal, rostro amable,
gafas de lectura en la nariz, barba corta canosa.
Viste chaqueta médica blanca con el logo bordado del club en azul marino.
Fondo de enfermería deportiva con camilla y equipamiento médico desenfocado.
Estetoscopio en el cuello, expresión profesional y tranquilizadora.
Estilo: retrato profesional, iluminación suave, colores fríos.
--ar 1:1 --v 6.1 --s 500
```

---

## 6. BANNERS DEL SITIO WEB

### 6.1 Hero Banner (Home Page)

**Archivo**: `public/images/banners/hero-banner.jpg`
**Aspect ratio**: 21:9
**Uso**: Fondo completo del Hero Section

**Prompt**:
```
Banner panorámico para sitio web de club de fútbol chileno.
Fondo degradado de azul marino oscuro (#000080) a naranjo eléctrico (#FF6500).
En el centro, el escudo del club grande y brillante con efecto 3D.
Alrededor del escudo, siluetas borrosas de jugadores celebrando en acción.
Partículas de luz naranja flotando (efecto bokeh).
Texto superpuesto: "ANTIMONIO FC" en letras blancas mayúsculas gigantes, tipografía bold.
Subtítulo: "Fuerza y Corazón" en naranjo, más pequeño.
Sutil textura de red de fútbol en el fondo (opacidad 10%).
Estilo: diseño gráfico deportivo moderno, cinematográfico,
iluminación dramática, composición épica.
--ar 21:9 --v 6.1 --s 600
```

### 6.2 Banner Plantilla (Squad Page)

**Archivo**: `public/images/banners/squad-banner.jpg`
**Aspect ratio**: 21:9
**Uso**: Encabezado de la página Plantilla

**Prompt**:
```
Banner para sección de plantilla de club de fútbol.
Composición dinámica con múltiples siluetas de jugadores en acción:
un portero lanzándose, un defensa cabeceando, un mediocampista corriendo,
un delantero pateando al arco.
Fondo azul marino oscuro con rayas de luz naranja horizontales.
Cámara lenta, congelamiento de movimiento.
Texto "NUESTRA PLANTILLA" en letras blancas grandes al centro.
Estilo: fotografía deportiva de acción, múltiples exposiciones,
iluminación de estadio, colores contrastantes.
--ar 21:9 --v 6.1 --s 600
```

### 6.3 Banner Noticias

**Archivo**: `public/images/banners/news-banner.jpg`
**Aspect ratio**: 21:9
**Uso**: Encabezado de la página Noticias

**Prompt**:
```
Banner para sección de noticias de club de fútbol.
Composición de periódicos y pantallas digitales flotando en el aire.
Fotos borrosas de partidos del club en las pantallas.
Fondo azul marino con líneas de código y texto de noticias fluyendo
(efecto matrix deportivo).
En el centro, un micrófono con el logo del club y luces LED naranjas.
Texto "ÚLTIMAS NOTICIAS" en blanco, tipografía moderna.
Estilo: tecnológico, informativo, dinámico, colores fríos con acento naranja.
--ar 21:9 --v 6.1 --s 500
```

### 6.4 Banner Entradas

**Archivo**: `public/images/banners/tickets-banner.jpg`
**Aspect ratio**: 21:9
**Uso**: Encabezado de la página Entradas

**Prompt**:
```
Banner para sección de entradas de club de fútbol.
Primer plano de un boleto de entrada con código de barras y el escudo del club.
El boleto tiene colores azul marino y naranja con bordes dorados.
Al fondo, el estadio lleno de gente con luces y bengalas.
Efecto de profundidad de campo: el boleto nítido, el estadio desenfocado.
Texto "COMPRA TUS ENTRADAS" en letras naranjas brillantes.
Estilo: fotografía macro de producto, iluminación de estudio,
detalles nítidos, ambiente emocionante.
--ar 21:9 --v 6.1 --s 500
```

### 6.5 Banner Socios

**Archivo**: `public/images/banners/membership-banner.jpg`
**Aspect ratio**: 21:9
**Uso**: Encabezado de la página Socios

**Prompt**:
```
Banner para sección de socios de club de fútbol.
Una tarjeta de socio premium en primer plano: plástico negro con logo del club
en dorado, nombre del socio grabado, fecha de membresía.
Al fondo, una familia de hinchas sonriendo con bufandas del club.
Luces de estadio bokeh en amarillo y naranja.
Texto "HAZTE SOCIO" en letras doradas grandes, y "Sé parte de la familia" en blanco más pequeño.
Estilo: fotografía aspiracional, cálida, familiar, lujo accesible.
--ar 21:9 --v 6.1 --s 550
```

### 6.6 Banner Fichajes

**Archivo**: `public/images/banners/transfers-banner.jpg`
**Aspect ratio**: 21:9
**Uso**: Encabezado de la página Fichajes

**Prompt**:
```
Banner para sección de fichajes de club de fútbol.
Composición dividida en dos mitades:
Izquierda: silueta de jugador llegando, luz naranja, confeti, fondo claro.
Texto "ALTAS" en verde.
Derecha: silueta de jugador yéndose, luz azul fría, fondo oscuro.
Texto "BAJAS" en rojo.
Centro: logo del club como punto de unión.
Flechas direccionales dinámicas en neón.
Estilo: gráfico moderno, diseño editorial deportivo, líneas limpias,
tipografía bold, contraste dramático.
--ar 21:9 --v 6.1 --s 600
```

---

## 7. IMÁGENES ADICIONALES

### 7.1 Campo de Fútbol (Vista Aérea para Formación Táctica)

**Archivo**: `public/images/pitch-top-view.jpg`
**Aspect ratio**: 3:4 (vertical, como una cancha)
**Uso**: Fondo del componente FormationField

**Prompt**:
```
Vista aérea cenital de un campo de fútbol profesional perfectamente mantenido.
Césped natural con rayas alternadas verde oscuro y verde claro.
Líneas blancas nítidas del campo: área penal, círculo central, líneas de banda.
Césped recién cortado, textura visible.
Iluminación pareja, sin sombras duras.
Sin jugadores, vacío, listo para el partido.
Estilo: fotografía aérea drone, lente 24mm, altura 30 metros,
nitidez absoluta, colores naturales saturados.
--ar 3:4 --v 6.1 --s 400
```

### 7.2 Imagen de Fondo para Modal de Jugador

**Archivo**: `public/images/player-modal-bg.jpg`
**Aspect ratio**: 16:9
**Uso**: Fondo decorativo en modal de detalle de jugador

**Prompt**:
```
Textura abstracta deportiva con degradado de azul marino a naranjo eléctrico.
Patrón sutil de líneas de estadio y formas geométricas triangulares.
Efecto de luz de reflector con destellos.
Sin figuras humanas, puro arte abstracto deportivo.
Estilo: diseño gráfico moderno, textura suave, gradients,
listo para ser usado como fondo con opacidad 0.3.
--ar 16:9 --v 6.1 --s 300
```

### 7.3 Imagen 404 - Página No Encontrada

**Archivo**: `public/images/404-illustration.jpg`
**Aspect ratio**: 1:1
**Uso**: Página 404

**Prompt**:
```
Ilustración divertida de un balón de fútbol perdido en un campo vacío.
El balón tiene una expresión confundida (ojos de cartoon).
Un banderín de tiro de esquina dice "404".
Al fondo, el arco vacío y gradas sin gente.
Estilo: ilustración vectorial plana, colores del club,
diseño amigable, estilo cartoon moderno.
--ar 1:1 --v 6.1 --s 400
```

### 7.4 Patrón de Fondo Repetible

**Archivo**: `public/images/pattern-bg.png`
**Aspect ratio**: 512x512 tileable
**Uso**: Textura de fondo sutil en secciones

**Prompt**:
```
Patrón repetible (seamless) para fondo de sitio web de fútbol.
Cuadrícula hexagonal sutil que forma un patrón de red de arco de fútbol.
Colores: azul marino oscuro con opacidad del 5% sobre fondo claro.
Sin elementos llamativos, textura muy sutil.
Estilo: geométrico, minimalista, patrón deportivo discreto.
--ar 1:1 --v 6.1 --s 200 --tile
```

---

## 8. RESUMEN DE ARCHIVOS NECESARIOS

| # | Archivo | Descripción | A.Ratio | Prioridad |
|---|---------|-------------|---------|-----------|
| 1 | `public/images/shield.svg` | Escudo del club (vectorizado) | 1:1 | 🔴 Alta |
| 2 | `public/favicon.svg` | Versión simplificada escudo | 1:1 | 🔴 Alta |
| 3 | `public/images/stadium-exterior.jpg` | Estadio exterior hero | 16:9 | 🔴 Alta |
| 4 | `public/images/stadium-interior.jpg` | Estadio interior | 16:9 | 🔴 Alta |
| 5 | `public/images/stadium-full.jpg` | Estadio lleno | 16:9 | 🟡 Media |
| 6 | `public/images/flag-horizontal.jpg` | Bandera horizontal | 3:2 | 🟡 Media |
| 7 | `public/images/flag-vertical.jpg` | Bandera vertical | 2:3 | 🟡 Media |
| 8 | `public/images/banner-club.jpg` | Lienzo decorativo | 21:9 | 🟡 Media |
| 9 | `public/images/fans-mosaic.jpg` | Mosaico hinchas | 16:9 | 🟡 Media |
| 10-31 | `public/images/players/{n}-{nombre}.png` | 22 avatares jugadores | 1:1 | 🔴 Alta |
| 32 | `public/images/coach-dt.png` | Director Técnico | 1:1 | 🔴 Alta |
| 33 | `public/images/coach-assistant.png` | Ayudante de campo | 1:1 | 🔴 Alta |
| 34 | `public/images/coach-pf.png` | Preparador físico | 1:1 | 🔴 Alta |
| 35 | `public/images/coach-doctor.png` | Médico del club | 1:1 | 🔴 Alta |
| 36 | `public/images/banners/hero-banner.jpg` | Banner hero | 21:9 | 🔴 Alta |
| 37 | `public/images/banners/squad-banner.jpg` | Banner plantilla | 21:9 | 🟡 Media |
| 38 | `public/images/banners/news-banner.jpg` | Banner noticias | 21:9 | 🟡 Media |
| 39 | `public/images/banners/tickets-banner.jpg` | Banner entradas | 21:9 | 🟡 Media |
| 40 | `public/images/banners/membership-banner.jpg` | Banner socios | 21:9 | 🟡 Media |
| 41 | `public/images/banners/transfers-banner.jpg` | Banner fichajes | 21:9 | 🟡 Media |
| 42 | `public/images/pitch-top-view.jpg` | Campo vista aérea | 3:4 | 🔴 Alta |
| 43 | `public/images/player-modal-bg.jpg` | Fondo modal jugador | 16:9 | 🟢 Baja |
| 44 | `public/images/404-illustration.jpg` | Ilustración 404 | 1:1 | 🟢 Baja |
| 45 | `public/images/pattern-bg.png` | Patrón repetible | 512x512 | 🟢 Baja |

**Total: 45 archivos de imágenes**

---

## 9. PLANTILLA COMPLETA (JUGADORES + CUERPO TÉCNICO)

### Jugadores (22)

```
#1  Matías Contreras      28 | POR | Chile
#2  Carlos Riquelme        26 | LD  | Chile
#3  José Miguel Silva      29 | DF  | Chile
#4  Pablo González         27 | DF  | Chile
#5  Andrés Navarro         30 | DF  | Chile
#6  Francisco Díaz         28 | MC  | Chile
#7  Javier Mendoza         26 | MD  | Chile
#8  Sebastián Herrera      29 | MC  | Chile
#9  Marcelo Rojas          32 | DC  | Chile    (Capitán)
#10 Ignacio Palma          25 | DC  | Argentina
#11 Álvaro Soto            24 | EI  | Chile
#12 Diego Muñoz            24 | POR | Chile
#13 Felipe Torres          22 | LI  | Chile
#14 Cristóbal Vega         25 | LD/LI| Chile
#15 Tomás Pizarro          23 | MC  | Chile
#16 Emilio Fuentes         21 | MI  | Chile
#17 Vicente Morales        27 | MD/MI| Chile
#18 Martín Aravena         22 | ED  | Chile
#19 Benjamín Lagos         20 | DC  | Chile
#20 Luis Castillo          31 | POR | Chile
#21 Gabriel Espinoza       23 | EI/ED| Chile
#22 Santiago Peña          29 | ED/DC| Chile
```

### Cuerpo Técnico

| Nombre | Edad | Cargo | Nacionalidad |
|--------|------|-------|-------------|
| Eduardo "Profe" Zamorano | 52 | Director Técnico | Chilena |
| Patricio Palma | 38 | Ayudante de Campo | Chilena |
| Marcelo Briones | 34 | Preparador Físico | Chilena |
| Dr. Juan Pablo Lagos | 45 | Médico del Club | Chilena |

### Formaciones Tácticas

| Formación | Titulares (posición en campo) |
|-----------|------------------------------|
| **4-4-2** | POR:1, LD:2, DF:4, DF:5, LI:13, MD:7, MC:6, MC:8, MI:16, DC:9, DC:10 |
| **4-3-3** | POR:1, LD:2, DF:4, DF:5, LI:13, MC:6, MC:8, MC:15, ED:18, DC:9, EI:11 |
| **4-2-3-1** | POR:1, LD:14, DF:3, DF:4, LI:13, MC:6, MC:15, MD:7, MC:10, MI:16, DC:9 |

---

## 10. NOTAS DE POST-PROCESADO

1. **Uniformidad de color**: Aplicar a todas las imágenes una capa de ajuste de color con los valores:
   - Contraste: +15
   - Saturación: +10
   - Temperatura: −5 (ligeramente más fría)
   - Sombras: azul marino (tinte #000080 al 5% en sombras)
   - Altas luces: naranja (tinte #FF6500 al 3% en altas luces)

2. **Optimización**: Comprimir todas las imágenes JPG al 80% de calidad, PNG con compresión sin pérdida.

3. **Avatares**: Los 22 avatares deben verse como si fueran del mismo fotógrafo, mismo estudio, misma iluminación. Post-procesar en lote con las mismas curvas de color.

4. **Sin marcas de agua**: Ninguna imagen debe tener marcas de agua de la IA generadora.
