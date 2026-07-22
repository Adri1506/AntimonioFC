# Misión: Club Deportivo AntimonioFC

## What
Página web profesional, moderna e interactiva para el **Club Deportivo AntimonioFC**, un club de fútbol con sede en Antimonio (Chile). El sitio funcionará como el centro digital oficial del club, combinando identidad visual deportiva con funcionalidades interactivas para hinchas, socios y visitantes.

## For Whom
- **Hinchas / Aficionados**: Consultan noticias, plantilla, resultados y próximos partidos.
- **Socios**: Gestión de membresía, compra de abonos y entradas con descuento.
- **Visitantes / Público general**: Información institucional, contacto, historia del club.
- **Administración del club**: Gestión de plantilla, altas/bajas, contenido noticias.
- **Staff técnico**: Consulta táctica, perfiles de jugadores, datos del plantel.

## Problem
Los clubes de fútbol de divisiones inferiores carecen de presencia digital profesional. Dependen de redes sociales para comunicación fragmentada. Los hinchas no tienen un lugar centralizado para:
- Conocer la plantilla y el cuerpo técnico
- Comprar entradas o hacerse socios
- Seguir noticias del club desde múltiples fuentes
- Ver la formación táctica del equipo
- Enterarse de fichajes y salidas

## Value
- **Centraliza** la identidad digital del club en un solo sitio profesional.
- **Engancha** a la afición con contenido interactivo (formación táctica, fichajes, noticias).
- **Facilita** la monetización mediante venta de entradas y captación de socios.
- **Proyecta** una imagen profesional que atrae patrocinios y nuevos talentos.
- **Automatiza** la agregación de noticias del club desde fuentes externas.

## User Roles

| Rol | Descripción | Permisos |
|-----|-------------|----------|
| **Visitante** | Usuario no registrado | Ver home, plantilla, noticias, formación táctica, fichajes |
| **Hincha** | Usuario registrado | Lo mismo que visitante + comentar noticias, seguir al club |
| **Socio** | Usuario con membresía activa | Lo mismo que hincha + comprar entradas con descuento, acceder a contenido exclusivo |
| **Admin** | Administrador del sitio | CRUD completo de plantilla, fichajes, noticias, gestión de entradas y socios |

## Dependencies
- **Node.js 18+** / **Bun 1.x** como runtime
- **Acceso a Internet** para el scraping de noticias
- **APIs externas**: NewsAPI o scraper de medios deportivos locales
- **Proveedor de hosting** para frontend + backend
- **Servicio de imágenes**: IA generativa externa (Midjourney / DALL-E / Stable Diffusion) para assets visuales
- **Google Fonts** para tipografía
- **Base de datos** PostgreSQL o SQLite

## Scope (Incluye)
- Página de inicio profesional con hero, noticias destacadas, próximos partidos
- Módulo de plantilla interactiva con formación táctica (11 titulares + suplentes)
- Base de datos completa de 22 jugadores + cuerpo técnico
- API de scraping de noticias desde medios deportivos públicos
- Módulo de entradas y socios (simulado con BD local)
- Módulo de fichajes (altas y bajas)
- Sistema de diseño completo con colores del club (#000080, #FF6500)
- 10+ imágenes generadas por IA (escudo, estadio, avatares, banners)

## Scope (No incluye)
- Pasarela de pago real (simulada con BD local)
- Streaming de partidos en vivo
- App móvil nativa (versión responsive web)
- CMS complejo (CRUD básico para admin)
- Integración con redes sociales para publicación automática
