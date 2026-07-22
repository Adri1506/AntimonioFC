import { test, expect } from '@playwright/test'

test.describe('Navegación principal', () => {
  test('navega secuencialmente por todas las rutas principales', async ({ page }) => {
    // 1. Home — hero section y escudo visible
    await page.goto('/')
    await expect(page.locator('[data-testid="hero-bg"]')).toBeVisible()
    await expect(page.locator('img[alt="AntimonioFC"]').first()).toBeVisible()

    // 2. Plantilla — grid de jugadores con al menos 1 card
    await page.goto('/plantilla')
    await expect(page.locator('h1')).toContainText('PLANTILLA')
    // Wait for player cards to load (they are buttons wrapping cards)
    await page.waitForLoadState('networkidle')
    const playerCards = page.locator('button >> [class*="card"]').first()
    // Alternatively, check that at least one badge with position text exists
    await expect(page.locator('text=POR').or(page.locator('text=DEF')).or(page.locator('text=MED')).or(page.locator('text=DEL')).first()).toBeVisible({ timeout: 10000 })

    // 3. Formación — campo SVG visible
    await page.goto('/formacion')
    await expect(page.locator('svg[aria-label="Campo de fútbol con formación táctica"]')).toBeVisible()

    // 4. Noticias — grid de noticias con al menos 1 NewsCard
    await page.goto('/noticias')
    await expect(page.locator('h1')).toContainText('NOTICIAS')
    await page.waitForLoadState('networkidle')
    // Check at least one news article card is rendered
    await expect(page.locator('main a[href^="/noticias/"], section a[href^="/noticias/"]').first()).toBeVisible({ timeout: 10000 })

    // 5. Entradas — MatchCard visible
    await page.goto('/entradas')
    await expect(page.locator('h1')).toContainText('Entradas')
    await page.waitForLoadState('networkidle')
    // Check for a match card button
    await expect(page.locator('button:has-text("Comprar Entradas")').first()).toBeVisible({ timeout: 10000 })

    // 6. Socios — 3 planes de membresía
    await page.goto('/socios')
    await expect(page.locator('h1')).toContainText('Hazte Socio')
    await page.waitForLoadState('networkidle')
    // There should be 3 plan cards with "Afiliarse" buttons
    await expect(page.locator('button:has-text("Afiliarse")')).toHaveCount(3, { timeout: 10000 })

    // 7. Fichajes — timeline visible
    await page.goto('/fichajes')
    await expect(page.locator('h1')).toContainText('Fichajes')
    await page.waitForLoadState('networkidle')
    // The timeline section should be present
    await expect(page.locator('section:has-text("Altas"), section:has-text("movimientos")').first()).toBeVisible({ timeout: 10000 })
  })
})
