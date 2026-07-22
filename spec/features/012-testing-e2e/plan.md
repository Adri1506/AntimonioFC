# Plan: F12 — Testing E2E

## Configuración
- **Framework**: Playwright con TypeScript
- **Ubicación**: `frontend/tests/e2e/`
- **Config**: `playwright.config.ts` en raíz de frontend
- **Browser**: Chromium (default), Firefox (opcional)

## Tests Planificados

| Test ID | Nombre | Flujo | Cobertura |
|---------|--------|-------|-----------|
| E2E-01 | Navegación completa | / → /plantilla → /formacion → /noticias → /entradas → /socios → /fichajes | F02-F08 |
| E2E-02 | Registro usuario | /registro → formulario → éxito | F09 |
| E2E-03 | Login usuario | /login → credenciales → header nombre | F09 |
| E2E-04 | Compra entradas | login → /entradas → seleccionar → confirmar → QR | F06 |
| E2E-05 | Filtro plantilla | /plantilla → filtro "Delanteros" → solo DEL | F03 |
| E2E-06 | Cambio formación | /formacion → 4-3-3 → reposicionamiento | F04 |
| E2E-07 | Responsive hamburguesa | viewport móvil → hamburguesa → drawer | F11 |

## Data Flow
```
playwright.config.ts
└── tests/
    ├── navigation.spec.ts (E2E-01)
    ├── auth.spec.ts (E2E-02, E2E-03)
    ├── tickets.spec.ts (E2E-04)
    └── squad.spec.ts (E2E-05, E2E-06)
    └── responsive.spec.ts (E2E-07)
```

## Patrones Aplicados
- **Page Object Model** — Cada página tiene su clase Page Object que encapsula selectores y métodos. `use_when`: separar lógica de test de implementación de UI. Reduce duplicación cuando la UI cambia.

## Dependencias Externas
- @playwright/test (latest)
- playwright.config.ts con baseURL = "http://localhost:5173"

## Database Changes
- Ninguno (usa BD de desarrollo con seed data)
