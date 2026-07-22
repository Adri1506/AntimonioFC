export interface Player {
  id: number
  nombre: string
  edad: number
  nacionalidad: string
  posicion: 'POR' | 'DEF' | 'MED' | 'DEL'
  numero: number
  foto: string | null
  activo: boolean
}

export interface Staff {
  id: number
  nombre: string
  edad: number
  rol: string
  nacionalidad: string
  foto: string | null
  descripcion: string | null
}
