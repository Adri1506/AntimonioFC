import type { Request, Response } from 'express'
import * as authService from '../services/authService'
import { z } from 'zod'

const registerSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo'),
  email: z.string().email('Email inválido'),
  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
    .regex(/[0-9]/, 'Debe contener al menos un número')
    .max(100),
})

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'La contraseña es requerida'),
})

function getFirstError(error: z.ZodError): string {
  return error.issues[0]?.message || 'Datos inválidos'
}

export async function register(req: Request, res: Response) {
  const parsed = registerSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: getFirstError(parsed.error) })
    return
  }

  const result = await authService.registerUser(parsed.data)
  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.status(result.status).json(result.data)
}

export async function login(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: getFirstError(parsed.error) })
    return
  }

  const result = await authService.loginUser(parsed.data)
  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.status(result.status).json(result.data)
}

export async function perfil(req: Request, res: Response) {
  const userId = (req as any).user?.id
  if (!userId) {
    res.status(401).json({ error: 'No autenticado' })
    return
  }

  const result = await authService.getProfile(userId)
  if (result.error) {
    res.status(result.status).json({ error: result.error })
    return
  }

  res.json(result.data)
}
