import { test, expect } from '@playwright/test'

test.describe('Responsive — móvil', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('navegación móvil con menú hamburguesa', async ({ page }) => {
    await page.goto('/')

    // Verificar hamburguesa visible (botón con aria-label "Abrir menú")
    const hamburger = page.locator('button[aria-label="Abrir menú"]')
    await expect(hamburger).toBeVisible()

    // Click hamburguesa → drawer visible con links
    await hamburger.click()

    // Wait for the Sheet/drawer to open
    const drawer = page.locator('[role="dialog"]')
    await expect(drawer).toBeVisible({ timeout: 5000 })

    // The drawer should contain navigation links
    await expect(drawer.locator('text=Inicio')).toBeVisible()
    await expect(drawer.locator('text=Plantilla')).toBeVisible()
    await expect(drawer.locator('text=Formación')).toBeVisible()
    await expect(drawer.locator('text=Noticias')).toBeVisible()
    await expect(drawer.locator('text=Entradas')).toBeVisible()
    await expect(drawer.locator('text=Socios')).toBeVisible()
    await expect(drawer.locator('text=Fichajes')).toBeVisible()

    // Click "Plantilla" → drawer se cierra, navega a /plantilla
    await drawer.locator('text=Plantilla').click()

    // Drawer should be closed
    await expect(drawer).not.toBeVisible({ timeout: 5000 })

    // Should have navigated to /plantilla
    await expect(page).toHaveURL('/plantilla')
  })
})
