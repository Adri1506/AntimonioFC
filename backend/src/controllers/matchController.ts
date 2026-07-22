import type { Request, Response } from 'express'
import * as matchService from '../services/matchService'

export async function getProximosPartidos(req: Request, res: Response) {
  const result = await matchService.getProximosPartidos()
  res.json({ data: result.data })
}

export async function getTodosPartidos(req: Request, res: Response) {
  const result = await matchService.getTodosPartidos()
  res.json({ data: result.data })
}

export async function getPartidoById(req: Request, res: Response) {
  const id = parseInt(String(req.params.id), 10)
  const result = await matchService.getPartidoById(id)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({ data: result.data })
}

export async function createMatch(req: Request, res: Response) {
  const result = await matchService.createPartido(req.body)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.status(result.status).json({ data: result.data })
}

export async function updateMatch(req: Request, res: Response) {
  const id = parseInt(String(req.params.id), 10)
  const result = await matchService.updatePartido(id, req.body)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({ data: result.data })
}

export async function deleteMatch(req: Request, res: Response) {
  const id = parseInt(String(req.params.id), 10)
  const result = await matchService.deletePartido(id)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({ data: result.data })
}
