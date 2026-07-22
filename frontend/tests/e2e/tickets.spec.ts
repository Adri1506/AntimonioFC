import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/LoginPage'
import { TicketsPage } from './pages/TicketsPage'

const ADMIN_EMAIL = 'admin@antimoniofc.cl'
const ADMIN_PASSWORD = 'admin123'

test.describe('Compra de entradas', () => {
  test('flujo completo de compra', async ({ page }) => {
    // 1. Login como admin
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.fillEmail(ADMIN_EMAIL)
    await loginPage.fillPassword(ADMIN_PASSWORD)
    await loginPage.submit()
    await page.waitForURL('/', { timeout: 10000 })

    // 2. Navegar a /entradas
    const ticketsPage = new TicketsPage(page)
    await ticketsPage.goto()
    await page.waitForLoadState('networkidle')

    // 3. Click "Comprar" en el primer partido
    await ticketsPage.clickComprar(0)

    // 4. Seleccionar sector "General" (already default, but explicitly select it)
    await ticketsPage.selectSector('General')

    // 5. Ingresar cantidad 2
    await ticketsPage.fillCantidad(2)

    // 6. Confirmar compra
    await ticketsPage.clickConfirmar()

    // 7. Verificar QR visible + mensaje de éxito
    await expect(page.locator('text=Compra Exitosa')).toBeVisible({ timeout: 10000 })
    // QR code section should be visible (the dashed border container)
    await expect(page.locator('text=Copiar código')).toBeVisible({ timeout: 5000 })
  })
})
