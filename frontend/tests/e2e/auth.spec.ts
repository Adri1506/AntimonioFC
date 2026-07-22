import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

const ADMIN_EMAIL = 'admin@antimoniofc.cl'
const ADMIN_PASSWORD = 'admin123'

test.describe('Autenticación', () => {
  test('registro con email único', async ({ page }) => {
    const registerPage = new RegisterPage(page)
    const timestamp = Date.now()
    const uniqueEmail = `testuser_${timestamp}@antimoniofc.cl`

    await registerPage.goto()
    await registerPage.fillName('Test User')
    await registerPage.fillEmail(uniqueEmail)
    await registerPage.fillPassword('testpass123')
    await registerPage.fillConfirmPassword('testpass123')
    await registerPage.submit()

    // After successful registration, user should be redirected to home
    await page.waitForURL('/', { timeout: 10000 })
    await expect(page).toHaveURL('/')

    // The header should show the user's name
    await expect(page.locator('text=Hola, Test')).toBeVisible({ timeout: 5000 })
  })

  test('login con credenciales admin', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.fillEmail(ADMIN_EMAIL)
    await loginPage.fillPassword(ADMIN_PASSWORD)
    await loginPage.submit()

    // After successful login, should redirect to home
    await page.waitForURL('/', { timeout: 10000 })
    await expect(page).toHaveURL('/')

    // The header should show the admin name
    await expect(page.locator('text=Hola,').first()).toBeVisible({ timeout: 5000 })
  })

  test('logout', async ({ page }) => {
    // First login
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.fillEmail(ADMIN_EMAIL)
    await loginPage.fillPassword(ADMIN_PASSWORD)
    await loginPage.submit()
    await page.waitForURL('/', { timeout: 10000 })

    // Click "Cerrar Sesión"
    await page.locator('button:has-text("Cerrar Sesión")').click()

    // Verify "Iniciar Sesión" is visible after logout
    await expect(page.locator('a:has-text("Iniciar Sesión"), button:has-text("Iniciar Sesión")').first()).toBeVisible({ timeout: 5000 })
  })
})
