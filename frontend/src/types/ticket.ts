import type { Sector } from './match'

export interface Ticket {
  id: number
  partidoId: number
  rival: string
  fechaPartido: string
  horaPartido: string
  sector: string
  cantidad: number
  total: number
  codigoQr: string
  fechaCompra: string
}

export interface PurchaseRequest {
  partidoId: number
  sector: Sector
  cantidad: number
}

export interface PurchaseResponse {
  id: number
  partidoId: number
  sector: string
  cantidad: number
  total: number
  codigoQr: string
  fechaCompra: string
}

export interface SectorPrice {
  sector: Sector
  label: string
  precio: number
}
