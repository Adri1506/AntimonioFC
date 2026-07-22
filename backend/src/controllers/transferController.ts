import type { Request, Response } from 'express'
import * as transferService from '../services/transferService'

export async function getAllFichajes(req: Request, res: Response) {
  const tipo = req.query.tipo as string | undefined
  const result = await transferService.getFichajes(tipo)

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json({ data: result.data })
}

export async function getFichajesResumen(_req: Request, res: Response) {
  const result = await transferService.getResumen()
  res.json({ data: result.data })
}
