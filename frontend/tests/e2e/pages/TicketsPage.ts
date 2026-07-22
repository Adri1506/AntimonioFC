import { type Page } from '@playwright/test'

export class TicketsPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto('/entradas')
  }

  async clickComprar(index: number = 0) {
    const buttons = this.page.locator('button:has-text("Comprar Entradas")')
    await buttons.nth(index).click()
  }

  async selectSector(sector: string) {
    // Sector is selected via radio input
    await this.page.locator(`input[type="radio"][value="${sector}"]`).check()
  }

  async fillCantidad(n: number) {
    await this.page.locator('#cantidad').fill(String(n))
  }

  async clickConfirmar() {
    await this.page.locator('button:has-text("Confirmar Compra")').click()
  }

  async qrIsVisible() {
    // The purchase confirmation dialog shows a QR section with "Compra Exitosa" title
    return this.page.locator('text=Compra Exitosa').first()
  }
}
