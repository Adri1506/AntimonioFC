import { type Page, type Locator } from '@playwright/test'

export class RegisterPage {
  readonly page: Page
  readonly nameInput: Locator
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly confirmPasswordInput: Locator
  readonly submitButton: Locator

  constructor(page: Page) {
    this.page = page
    this.nameInput = page.locator('#nombre')
    this.emailInput = page.locator('#email')
    this.passwordInput = page.locator('#password')
    this.confirmPasswordInput = page.locator('#confirmar')
    this.submitButton = page.locator('button[type="submit"]')
  }

  async goto() {
    await this.page.goto('/register')
  }

  async fillName(name: string) {
    await this.nameInput.fill(name)
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email)
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password)
  }

  async fillConfirmPassword(password: string) {
    await this.confirmPasswordInput.fill(password)
  }

  async submit() {
    await this.submitButton.click()
  }
}
