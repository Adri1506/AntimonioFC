import { type Page } from '@playwright/test'

export class FormationPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto('/formacion')
  }

  async selectFormation(formacion: string) {
    // Formation buttons contain the formation name like "4-3-3", "4-4-2", etc.
    await this.page.locator(`button:has(span:has-text("${formacion}"))`).click()
  }
}
