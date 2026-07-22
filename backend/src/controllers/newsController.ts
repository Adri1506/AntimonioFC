import type { Request, Response } from 'express'
import * as newsService from '../services/newsService'

export async function getAllNoticias(req: Request, res: Response) {
  const page = parseInt(String(req.query.page), 10) || 1
  const limit = parseInt(String(req.query.limit), 10) || 6
  const categoria = req.query.categoria as string | undefined

  const result = await newsService.getNoticias(page, limit, categoria)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({
    data: result.data,
    total: result.total,
    page: result.page,
    limit: result.limit,
    hasMore: result.hasMore,
  })
}

export async function getNoticiaById(req: Request, res: Response) {
  const id = parseInt(String(req.params.id), 10)
  const result = await newsService.getNoticiaById(id)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({ data: result.data })
}

export async function createNoticia(req: Request, res: Response) {
  const result = await newsService.createNoticia(req.body)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.status(result.status).json({ data: result.data })
}

export async function updateNoticia(req: Request, res: Response) {
  const id = parseInt(String(req.params.id), 10)
  const result = await newsService.updateNoticia(id, req.body)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({ data: result.data })
}

export async function deleteNoticia(req: Request, res: Response) {
  const id = parseInt(String(req.params.id), 10)
  const result = await newsService.deleteNoticia(id)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({ data: result.data })
}
