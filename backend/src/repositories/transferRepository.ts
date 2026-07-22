import prisma from '../utils/prisma'
import type { TipoFichaje } from '@prisma/client'

export type FichajeWithJugador = {
  id: number
  jugadorId: number
  tipo: TipoFichaje
  clubOrigen: string
  clubDestino: string
  tipoOperacion: string
  fecha: Date
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

export async function findAllFichajes(tipo?: string): Promise<FichajeWithJugador[]> {
  const where: Record<string, unknown> = {}
  if (tipo === 'ALTA' || tipo === 'BAJA') {
    where.tipo = tipo
  }

  return prisma.fichaje.findMany({
    where,
    include: {
      jugador: {
        select: {
          id: true,
          nombre: true,
          numero: true,
          posicion: true,
          foto: true,
        },
      },
    },
    orderBy: { fecha: 'desc' },
  }) as Promise<FichajeWithJugador[]>
}

export async function getResumenStats() {
  const [altas, bajas, fichajes] = await Promise.all([
    prisma.fichaje.findMany({ where: { tipo: 'ALTA' } }),
    prisma.fichaje.findMany({ where: { tipo: 'BAJA' } }),
    prisma.fichaje.findMany(),
  ])

  const inversionTotal = fichajes
    .filter((f) => f.tipo === 'ALTA' && f.monto != null)
    .reduce((sum, f) => sum + (f.monto as number), 0)

  return {
    totalAltas: altas.length,
    totalBajas: bajas.length,
    inversionTotal,
  }
}
