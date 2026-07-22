import * as newsRepository from '../repositories/newsRepository'

const VALID_CATEGORIES = ['Partidos', 'Fichajes', 'Club', 'Entrevistas']

export async function getNoticias(
  page: number = 1,
  limit: number = 6,
  categoria?: string
) {
  if (page < 1 || !Number.isInteger(page)) {
    return { error: 'Page debe ser un entero positivo', status: 400 }
  }

  if (limit < 1 || limit > 50 || !Number.isInteger(limit)) {
    return { error: 'Limit debe ser un entero entre 1 y 50', status: 400 }
  }

  if (categoria && !VALID_CATEGORIES.includes(categoria)) {
    return {
      error: `Categoría inválida. Use: ${VALID_CATEGORIES.join(', ')}`,
      status: 400,
    }
  }

  const { data, total } = await newsRepository.findAllNoticias({
    page,
    limit,
    categoria,
  })

  const hasMore = page * limit < total

  return {
    data,
    total,
    page,
    limit,
    hasMore,
    status: 200,
  }
}

export async function getNoticiaById(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    return { error: 'ID inválido', status: 400 }
  }

  const noticia = await newsRepository.findNoticiaById(id)

  if (!noticia) {
    return { error: 'Noticia no encontrada', status: 404 }
  }

  return { data: noticia, status: 200 }
}

export async function createNoticia(body: Record<string, unknown>) {
  const { titulo, resumen, contenido, categoria, fuente, url, imagen } = body

  if (!titulo || typeof titulo !== 'string') {
    return { error: 'Titular requerido', status: 400 }
  }
  if (!resumen || typeof resumen !== 'string') {
    return { error: 'Resumen requerido', status: 400 }
  }
  if (!contenido || typeof contenido !== 'string') {
    return { error: 'Contenido requerido', status: 400 }
  }
  if (!categoria || !VALID_CATEGORIES.includes(categoria as string)) {
    return {
      error: `Categoría inválida. Use: ${VALID_CATEGORIES.join(', ')}`,
      status: 400,
    }
  }
  if (!fuente || typeof fuente !== 'string') {
    return { error: 'Fuente requerida', status: 400 }
  }

  const noticia = await newsRepository.createNoticia({
    titulo: titulo as string,
    resumen: resumen as string,
    contenido: contenido as string,
    categoria: categoria as string,
    fuente: fuente as string,
    url: (url as string) || null,
    imagen: (imagen as string) || null,
    fechaPublicacion: new Date(),
  })

  return { data: noticia, status: 201 }
}

export async function updateNoticia(id: number, body: Record<string, unknown>) {
  if (!Number.isInteger(id) || id <= 0) {
    return { error: 'ID inválido', status: 400 }
  }

  const existing = await newsRepository.findNoticiaById(id)
  if (!existing) {
    return { error: 'Noticia no encontrada', status: 404 }
  }

  const allowedFields = [
    'titulo',
    'resumen',
    'contenido',
    'categoria',
    'fuente',
    'url',
    'imagen',
  ]
  const updateData: Record<string, unknown> = {}

  for (const key of allowedFields) {
    if (body[key] !== undefined) {
      updateData[key] = body[key]
    }
  }

  if (updateData.categoria !== undefined && !VALID_CATEGORIES.includes(updateData.categoria as string)) {
    return {
      error: `Categoría inválida. Use: ${VALID_CATEGORIES.join(', ')}`,
      status: 400,
    }
  }

  const noticia = await newsRepository.updateNoticia(id, updateData as any)
  return { data: noticia, status: 200 }
}

export async function deleteNoticia(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    return { error: 'ID inválido', status: 400 }
  }

  const existing = await newsRepository.findNoticiaById(id)
  if (!existing) {
    return { error: 'Noticia no encontrada', status: 404 }
  }

  await newsRepository.deleteNoticia(id)
  return { data: null, status: 200 }
}
