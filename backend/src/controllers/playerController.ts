import type { Request, Response } from 'express'
import * as playerService from '../services/playerService'

export async function getAllJugadores(req: Request, res: Response) {
  const posicion = req.query.posicion as string | undefined
  const result = await playerService.getJugadores(posicion)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({ data: result.data })
}

export async function createPlayer(req: Request, res: Response) {
  const result = await playerService.createJugador(req.body)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.status(result.status).json({ data: result.data })
}

export async function getJugadorById(req: Request, res: Response) {
  const id = parseInt(String(req.params.id), 10)
  const result = await playerService.getJugadorById(id)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({ data: result.data })
}

export async function updatePlayer(req: Request, res: Response) {
  const id = parseInt(String(req.params.id), 10)
  const result = await playerService.updateJugador(id, req.body)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({ data: result.data })
}

export async function deactivatePlayer(req: Request, res: Response) {
  const id = parseInt(String(req.params.id), 10)
  const result = await playerService.deactivateJugador(id)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({ data: result.data })
}
