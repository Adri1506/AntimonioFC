import prisma from '../utils/prisma'
import type { Entrada } from '@prisma/client'

export async function createEntrada(data: {
  usuarioId: number
  partidoId: number
  sector: string
  cantidad: number
  total: number
  codigoQr: string
}): Promise<Entrada> {
  return prisma.entrada.create({
    data: {
      usuarioId: data.usuarioId,
      partidoId: data.partidoId,
      sector: data.sector,
      cantidad: data.cantidad,
      total: data.total,
      codigoQr: data.codigoQr,
    },
  })
}

export async function findEntradasByUsuarioId(
  usuarioId: number
): Promise<(Entrada & { partido: { rival: string; fecha: Date; hora: string } })[]> {
  return prisma.entrada.findMany({
    where: { usuarioId },
    include: {
      partido: {
        select: {
          rival: true,
          fecha: true,
          hora: true,
        },
      },
    },
    orderBy: { fechaCompra: 'desc' },
  })
}
