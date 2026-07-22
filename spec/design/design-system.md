# Design System: AntimonioFC

## 1. Dirección Estética

**Tonalidad**: Deportivo moderno, profesional, enérgico, chileno.

El diseño combina la seriedad y profundidad del azul marino naval (#000080) con la energía vibrante del naranjo eléctrico (#FF6500). La estética evoca la pasión del fútbol sudamericano con un acabado pulido y contemporáneo, similar a clubes europeos modernos (Atlético de Madrid, Juventus) pero con identidad latina.

**5 Pilares Visuales**:
1. **Fuerza** — Azul marino como color dominante, sensación de solidez institucional
2. **Pasión** — Naranjo eléctrico como acento, energía del hincha
3. **Claridad** — Tipografía limpia, espacio en blanco generoso, jerarquía visual nítida
4. **Modernidad** — Sombras sutiles, bordes redondeados, micro-interacciones
5. **Pertenencia** — Escudo y colores siempre presentes, identidad visual consistente

---

## 2. Paleta de Colores

### Colores Primarios

| Token | Color | Hex | RGB | Uso |
|-------|-------|-----|-----|-----|
| `--color-primary` | Azul Marino | `#000080` | `rgb(0, 0, 128)` | Fondos principales, headers, footers, botones primarios |
| `--color-primary-light` | Azul Marino Claro | `#1a1a9e` | `rgb(26, 26, 158)` | Hover states, gradientes |
| `--color-primary-dark` | Azul Marino Oscuro | `#000052` | `rgb(0, 0, 82)` | Textos sobre fondos claros, estados active |
| `--color-accent` | Naranjo Eléctrico | `#FF6500` | `rgb(255, 101, 0)` | CTAs, acentos, badges, enlaces, highlights |
| `--color-accent-light` | Naranjo Claro | `#ff8533` | `rgb(255, 133, 51)` | Hover, gradientes suaves |
| `--color-accent-dark` | Naranjo Oscuro | `#cc5200` | `rgb(204, 82, 0)` | Active states, texto sobre fondo naranja |

### Colores Secundarios

| Token | Color | Hex | RGB | Uso |
|-------|-------|-----|-----|-----|
| `--color-secondary` | Blanco Roto | `#F8F9FA` | `rgb(248, 249, 250)` | Fondos de página, cards |
| `--color-secondary-dark` | Gris Claro | `#E9ECEF` | `rgb(233, 236, 239)` | Bordes, separadores |
| `--color-surface` | Blanco | `#FFFFFF` | `rgb(255, 255, 255)` | Cards, modales, inputs |
| `--color-text` | Casi Negro | `#1A1A2E` | `rgb(26, 26, 46)` | Texto principal |
| `--color-text-secondary` | Gris Oscuro | `#6B7280` | `rgb(107, 114, 128)` | Texto secundario, subtítulos |

### Colores Funcionales

| Token | Color | Hex | RGB | Uso |
|-------|-------|-----|-----|-----|
| `--color-success` | Verde | `#10B981` | `rgb(16, 185, 129)` | Altas, confirmaciones, activo |
| `--color-warning` | Amarillo | `#F59E0B` | `rgb(245, 158, 11)` | Advertencias, pendiente |
| `--color-error` | Rojo | `#EF4444` | `rgb(239, 68, 68)` | Errores, bajas, desactivado |
| `--color-info` | Azul | `#3B82F6` | `rgb(59, 130, 246)` | Información |

### Gradientes Clave

| Nombre | Composición | Uso |
|--------|------------|-----|
| `gradient-hero` | `#000080 → #1a1a9e` | Fondo hero section |
| `gradient-accent` | `#FF6500 → #ff8533` | Botones CTA |
| `gradient-card` | `#F8F9FA → #FFFFFF` | Tarjetas de jugadores |
| `gradient-dark` | `#000052 → #000080` | Footer, secciones oscuras |

---

## 3. Tipografía

### Fuentes

| Rol | Fuente | Peso | Fallback |
|-----|--------|------|----------|
| **Headings** (Títulos) | **Barlow** | Bold (700), SemiBold (600) | sans-serif |
| **Body** (Cuerpo) | **Inter** | Regular (400), Medium (500) | sans-serif |
| **Números** (Jugadores) | **Barlow Condensed** | Bold (700) | sans-serif |
| **Acentos** (CTAs) | **Barlow** | ExtraBold (800) | sans-serif |

### Escala Tipográfica

| Nivel | Tamaño | Line-Height | Peso | Font |
|-------|--------|-------------|------|------|
| **H1** | 3.5rem (56px) | 1.1 | 700 | Barlow |
| **H2** | 2.5rem (40px) | 1.2 | 700 | Barlow |
| **H3** | 2rem (32px) | 1.3 | 600 | Barlow |
| **H4** | 1.5rem (24px) | 1.3 | 600 | Barlow |
| **H5** | 1.25rem (20px) | 1.4 | 600 | Inter |
| **Body** | 1rem (16px) | 1.6 | 400 | Inter |
| **Small** | 0.875rem (14px) | 1.5 | 400 | Inter |
| **Caption** | 0.75rem (12px) | 1.4 | 400 | Inter |
| **Número camiseta** | 1.125rem (18px) | 1 | 700 | Barlow Condensed |

### Reglas Tipográficas
- **Max ancho de línea**: 75 caracteres
- **Headings en mayúscula**: Solo para títulos de sección principales
- **Números de jugador**: Barlow Condensed Bold para legibilidad en camisetas
- **CTAs**: Barlow ExtraBold, mayúscula sostenida

---

## 4. Espaciado y Layout

### Sistema de Espaciado (4px base)

| Token | Pixels | Rem | Uso |
|-------|--------|-----|-----|
| `space-1` | 4px | 0.25rem | Micro-espaciado |
| `space-2` | 8px | 0.5rem | Iconos, gaps pequeños |
| `space-3` | 12px | 0.75rem | Padding interno compacto |
| `space-4` | 16px | 1rem | Padding estándar, gap cards |
| `space-5` | 20px | 1.25rem | Padding secciones |
| `space-6` | 24px | 1.5rem | Gap entre secciones |
| `space-8` | 32px | 2rem | Margen entre secciones grandes |
| `space-10` | 40px | 2.5rem | Padding de página |
| `space-12` | 48px | 3rem | Separación hero |
| `space-16` | 64px | 4rem | Secciones principales |

### Breakpoints Responsive

| Nombre | Min Width | Target |
|--------|-----------|--------|
| `sm` | 640px | Móvil landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Desktop grande |
| `2xl` | 1536px | Pantallas grandes |

### Grid System
- **Mobile**: 1 columna (stack vertical)
- **Tablet**: 2 columnas
- **Desktop**: 3-4 columnas según sección
- **Gap**: 1.5rem (24px) entre items
- **Max-width contenedor**: 1280px centrado

---

## 5. Componentes UI

### Botones

| Variante | Fondo | Texto | Borde | Uso |
|----------|-------|-------|-------|-----|
| **Primary** | Azul marino `#000080` | Blanco | — | Acciones principales |
| **Accent** | Naranjo `#FF6500` | Blanco | — | CTAs, comprar, suscribirse |
| **Outline** | Transparente | Azul marino | 2px azul | Acciones secundarias |
| **Ghost** | Transparente | Azul marino | — | Links, acciones suaves |
| **Danger** | Rojo `#EF4444` | Blanco | — | Eliminar, dar de baja |

**Estados**: default → hover (opacidad 90%) → active (opacidad 80%) → disabled (opacidad 50%)
**Tamaños**: sm (32px), md (40px), lg (48px), xl (56px)

### Cards

| Tipo | Uso |
|------|-----|
| **PlayerCard** | Jugador en plantilla: avatar, número, nombre, posición |
| **NewsCard** | Noticia: imagen, titular, fuente, fecha, resumen |
| **MatchCard** | Partido: rival, fecha, hora, estadio, precio |
| **TransferCard** | Fichaje: jugador, tipo, club, fecha |
| **PlanCard** | Membresía: nombre, precio, beneficios |

**Estados**: default → hover (sombra elevada, translateY -2px) → selected (borde naranja)

### Badges / Chips

| Variante | Color | Uso |
|----------|-------|-----|
| **Position** | Azul marino | Posición del jugador (POR, DEF, MED, DEL) |
| **Type** | Verde (alta) / Rojo (baja) | Tipo de fichaje |
| **Status** | Varios | Estado de membresía, partido |
| **Source** | Gris | Fuente de noticia |

### Formularios

- Inputs con borde gris (`#E9ECEF`), focus ring naranja (`#FF6500`)
- Labels en Barlow Medium 14px
- Mensajes de error en rojo debajo del input
- Placeholder en gris claro (`#9CA3AF`)

### Navegación

- **Header**: Fijo arriba, fondo azul marino, logo izquierda, menú centro, CTA derecha
- **Mobile**: Menú hamburguesa con drawer desde la derecha
- **Footer**: 4 columnas (Club, Equipo, Afición, Legal) + redes sociales + escudo
- **Admin Sidebar**: Ancho fijo 240px, fondo azul marino oscuro, iconos + texto

---

## 6. Estados UI

| Estado | Descripción | Implementación |
|--------|-------------|----------------|
| **Loading** | Carga inicial | Skeleton animation (bg gris claro con shimmer azul) |
| **Error** | Error en carga | Card rojo suave con icono, mensaje, botón reintentar |
| **Empty** | Sin datos | Icono ilustrativo + mensaje amigable + CTA |
| **Success** | Operación exitosa | Toast verde con check, auto-dismiss 3s |
| **Offline** | Sin conexión | Banner fijo abajo: "Sin conexión. Algunos datos pueden no estar disponibles." |

---

## 7. Iconografía

- **Estilo**: Outline, trazo 2px, esquinas redondeadas
- **Set**: Lucide Icons (compatible con shadcn/ui)
- **Tamaños**: 16px (inline), 20px (botones), 24px (cards), 32px+ (decorativos)
- **Color**: Hereda del texto o color del componente

---

## 8. Sombras

| Nivel | Sombra | Uso |
|-------|--------|-----|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Cards, inputs |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Modales, dropdowns |
| `shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Header, notificaciones |
| `shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Modales grandes |

---

## 9. Animaciones

| Elemento | Duración | Easing | Efecto |
|----------|----------|--------|--------|
| Hover en cards | 200ms | ease-out | Sombra + translateY(-2px) |
| Transición páginas | 300ms | ease-in-out | Fade in |
| Modal open | 200ms | ease-out | Scale + fade |
| Toast aparece | 300ms | ease-out | Slide up |
| Skeleton | 1.5s | linear | Shimmer infinito |
| Botón click | 100ms | ease-out | Scale 0.97 |
