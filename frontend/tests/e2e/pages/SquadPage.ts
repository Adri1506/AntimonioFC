import { type Page } from '@playwright/test'

const positionLabelMap: Record<string, string> = {
  POR: 'Porteros',
  DEF: 'Defensas',
  MED: 'Mediocampistas',
  DEL: 'Delanteros',
}

export class SquadPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto('/plantilla')
  }

  async filterByPosition(posicion: string) {
    const label = positionLabelMap[posicion] ?? posicion
    await this.page.locator(`button[role="tab"]:has-text("${label}")`).click()
  }

}
