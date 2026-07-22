export interface Match {
  id: number
  rival: string
  fecha: string
  hora: string
  estadio: string
  competicion: string
  local: boolean
  precioPreferencia: number
  precioGeneral: number
  precioVisita: number
}

export type Sector = 'Preferencia' | 'General' | 'Visita'

export const SECTOR_LABELS: Record<Sector, string> = {
  Preferencia: 'Preferencia',
  General: 'General',
  Visita: 'Visita',
}
