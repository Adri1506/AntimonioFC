import type { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'
import type { JwtPayload } from '../utils/jwt'

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload | null
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization

  if (!header || !header.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Token requerido' })
    return
  }

  const token = header.slice(7)

  try {
    const payload = verifyToken(token)
    req.user = payload
    next()
  } catch (err: any) {
    if (err.name === 'TokenExpiredError') {
      res.status(401).json({ error: 'Token expirado' })
      return
    }
    res.status(401).json({ error: 'Token inválido' })
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization

  if (!header || !header.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Token requerido' })
    return
  }

  const token = header.slice(7)

  try {
    const payload = verifyToken(token)
    if (payload.rol !== 'admin') {
      res.status(403).json({ error: 'Acceso denegado: se requieren permisos de administrador' })
      return
    }
    req.user = payload
    next()
  } catch (err: any) {
    if (err.name === 'TokenExpiredError') {
      res.status(401).json({ error: 'Token expirado' })
      return
    }
    res.status(401).json({ error: 'Token inválido' })
  }
}

export function optionalAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization

  if (!header || !header.startsWith('Bearer ')) {
    req.user = null
    next()
    return
  }

  const token = header.slice(7)

  try {
    const payload = verifyToken(token)
    req.user = payload
  } catch {
    req.user = null
  }

  next()
}
