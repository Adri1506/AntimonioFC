import prisma from '../utils/prisma'
import type { Jugador } from '@prisma/client'

// ---- Jugadores ----

export async function findAllJugadores(posicion?: string): Promise<Jugador[]> {
  const where = posicion ? { posicion } : {}
  return prisma.jugador.findMany({
    where,
    orderBy: { numero: 'asc' },
  })
}

export async function createJugador(
  data: Pick<Jugador, 'nombre' | 'edad' | 'posicion' | 'numero' | 'nacionalidad'>
): Promise<Jugador> {
  return prisma.jugador.create({
    data: {
      nombre: data.nombre,
      edad: data.edad,
      posicion: data.posicion,
      numero: data.numero,
      nacionalidad: data.nacionalidad,
      activo: true,
    },
  })
}

export async function findJugadorById(id: number): Promise<Jugador | null> {
  return prisma.jugador.findUnique({
    where: { id },
  })
}

export async function updateJugador(
  id: number,
  data: Partial<Pick<Jugador, 'nombre' | 'edad' | 'posicion' | 'numero' | 'nacionalidad' | 'activo'>>
): Promise<Jugador> {
  return prisma.jugador.update({
    where: { id },
    data,
  })
}

export async function deactivateJugador(id: number): Promise<Jugador> {
  return prisma.jugador.update({
    where: { id },
    data: { activo: false },
  })
}
