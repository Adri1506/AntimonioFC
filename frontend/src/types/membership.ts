export type PlanTipo = 'BRONCE' | 'PLATA' | 'ORO'

export interface Membership {
  id: number
  tipo: PlanTipo
  fechaInicio: string
  fechaFin: string | null
  descuentoEntradas: number
  renovacionAutomatica: boolean
  activo: boolean
}

export interface AfiliarRequest {
  tipo: PlanTipo
}

export interface AfiliarResponse {
  id: number
  tipo: PlanTipo
  fechaInicio: string
  fechaFin: string | null
  descuentoEntradas: number
  renovacionAutomatica: boolean
  activo: boolean
}

export interface PlanInfo {
  tipo: PlanTipo
  nombre: string
  precio: number
  descuento: number
  beneficios: string[]
  destacado?: boolean
}

export const PLANES: PlanInfo[] = [
  {
    tipo: 'BRONCE',
    nombre: 'Bronce',
    precio: 5,
    descuento: 5,
    beneficios: [
      '5% descuento en entradas',
      'Acceso a noticias exclusivas',
      'Carnet digital de socio',
    ],
  },
  {
    tipo: 'PLATA',
    nombre: 'Plata',
    precio: 10,
    descuento: 10,
    beneficios: [
      '10% descuento en entradas',
      'Acceso a noticias exclusivas',
      'Carnet digital de socio',
      'Prioridad en compra de entradas',
    ],
  },
  {
    tipo: 'ORO',
    nombre: 'Oro',
    precio: 20,
    descuento: 20,
    beneficios: [
      '20% descuento en entradas',
      'Acceso a noticias exclusivas',
      'Carnet digital de socio',
      'Prioridad en compra de entradas',
      'Contenido exclusivo del club',
      'Invitaciones a eventos especiales',
    ],
    destacado: true,
  },
]
