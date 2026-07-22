export type TipoFichaje = 'ALTA' | 'BAJA'

export interface Transfer {
  id: number
  jugadorId: number
  tipo: TipoFichaje
  clubOrigen: string
  clubDestino: string
  tipoOperacion: string
  fecha: string
  monto: number | null
  descripcion: string | null
  activo: boolean
  fotoUrl: string | null
  jugador: {
    id: number
    nombre: string
    numero: number
    posicion: string
    foto: string | null
  }
}

export interface TransferSummary {
  totalAltas: number
  totalBajas: number
  inversionTotal: number
}
