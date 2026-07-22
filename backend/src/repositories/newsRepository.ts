import prisma from '../utils/prisma'
import type { Noticia } from '@prisma/client'

interface FindAllParams {
  page: number
  limit: number
  categoria?: string
}

interface PaginatedResult {
  data: Noticia[]
  total: number
}

export async function findAllNoticias({
  page,
  limit,
  categoria,
}: FindAllParams): Promise<PaginatedResult> {
  const where = categoria ? { categoria } : {}
  const skip = (page - 1) * limit

  const [data, total] = await Promise.all([
    prisma.noticia.findMany({
      where,
      orderBy: { fechaPublicacion: 'desc' },
      skip,
      take: limit,
    }),
    prisma.noticia.count({ where }),
  ])

  return { data, total }
}

export async function findNoticiaById(id: number): Promise<Noticia | null> {
  return prisma.noticia.findUnique({
    where: { id },
  })
}

export async function findRelatedNoticias(
  excludeId: number,
  limit: number = 3
): Promise<Noticia[]> {
  return prisma.noticia.findMany({
    where: { id: { not: excludeId } },
    orderBy: { fechaPublicacion: 'desc' },
    take: limit,
  })
}

export async function createNoticia(
  data: Omit<Noticia, 'id' | 'createdAt'>
): Promise<Noticia> {
  return prisma.noticia.create({ data })
}

export async function updateNoticia(
  id: number,
  data: Partial<Omit<Noticia, 'id' | 'createdAt'>>
): Promise<Noticia> {
  return prisma.noticia.update({ where: { id }, data })
}

export async function deleteNoticia(id: number): Promise<Noticia> {
  return prisma.noticia.delete({ where: { id } })
}
