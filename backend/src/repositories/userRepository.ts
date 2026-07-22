import prisma from '../utils/prisma'
import type { Usuario } from '@prisma/client'

export async function findUserByEmail(email: string): Promise<Usuario | null> {
  return prisma.usuario.findUnique({
    where: { email },
  })
}

export async function findUserById(id: number): Promise<Usuario | null> {
  return prisma.usuario.findUnique({
    where: { id },
  })
}

export async function createUser(data: {
  nombre: string
  email: string
  password: string
  rol?: string
}): Promise<Usuario> {
  return prisma.usuario.create({
    data: {
      nombre: data.nombre,
      email: data.email,
      password: data.password,
      rol: data.rol ?? 'user',
    },
  })
}

export function excludePassword<T extends { password?: string }>(
  user: T,
): Omit<T, 'password'> {
  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}
