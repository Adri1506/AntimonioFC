import prisma from '../utils/prisma'
import type { Partido } from '@prisma/client'

export async function findAllPartidos(): Promise<Partido[]> {
  return prisma.partido.findMany({
    orderBy: { fecha: 'desc' },
  })
}

export async function findUpcomingMatches(): Promise<Partido[]> {
  const now = new Date()
  return prisma.partido.findMany({
    where: {
      fecha: { gte: now },
    },
    orderBy: { fecha: 'asc' },
  })
}

export async function findMatchById(id: number): Promise<Partido | null> {
  return prisma.partido.findUnique({
    where: { id },
  })
}

export async function createPartido(
  data: Omit<Partido, 'id' | 'createdAt' | 'entradas'>
): Promise<Partido> {
  return prisma.partido.create({ data })
}

export async function updatePartido(
  id: number,
  data: Partial<Omit<Partido, 'id' | 'createdAt' | 'entradas'>>
): Promise<Partido> {
  return prisma.partido.update({ where: { id }, data })
}

export async function deletePartido(id: number): Promise<Partido> {
  return prisma.partido.delete({ where: { id } })
}

export async function countEntradasByPartidoId(
  partidoId: number
): Promise<number> {
  return prisma.entrada.count({ where: { partidoId } })
}
