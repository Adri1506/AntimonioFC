import type { Request, Response } from 'express'
import * as membershipService from '../services/membershipService'

function getFirstError(error: import('zod').ZodError): string {
  return error.issues[0]?.message || 'Datos inválidos'
}

export async function afiliarSocio(req: Request, res: Response) {
  const parsed = membershipService.afiliarSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: getFirstError(parsed.error) })
    return
  }

  const usuarioId = req.user?.id
  if (!usuarioId) {
    res.status(401).json({ error: 'No autenticado' })
    return
  }

  const result = await membershipService.afiliarSocio({
    ...parsed.data,
    usuarioId,
  })

  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.status(result.status).json(result.data)
}

export async function getMiMembresia(req: Request, res: Response) {
  const usuarioId = req.user?.id
  if (!usuarioId) {
    res.status(401).json({ error: 'No autenticado' })
    return
  }

  const result = await membershipService.getMiMembresia(usuarioId)
  res.json(result.data)
}
