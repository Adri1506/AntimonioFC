import prisma from '../utils/prisma'
import type { Socio } from '@prisma/client'

export async function createSocio(data: {
  usuarioId: number
  tipo: string
  descuentoEntradas: number
  renovacionAutomatica: boolean
  fechaFin?: Date
}): Promise<Socio> {
  return prisma.socio.create({
    data: {
      usuarioId: data.usuarioId,
      tipo: data.tipo,
      descuentoEntradas: data.descuentoEntradas,
      renovacionAutomatica: data.renovacionAutomatica,
      fechaFin: data.fechaFin,
      activo: true,
    },
  })
}

export async function findSocioActivoByUsuarioId(
  usuarioId: number
): Promise<Socio | null> {
  return prisma.socio.findFirst({
    where: { usuarioId, activo: true },
  })
}

export async function findSocioByUsuarioId(
  usuarioId: number
): Promise<Socio | null> {
  return prisma.socio.findUnique({
    where: { usuarioId },
  })
}
