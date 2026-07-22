import type { Request, Response } from 'express'
import prisma from '../utils/prisma'
import * as adminService from '../services/adminService'

export async function getDashboard(req: Request, res: Response) {
  const counts = await adminService.getDashboardCounts()
  res.json(counts)
}

export async function getSocios(req: Request, res: Response) {
  const socios = await prisma.socio.findMany({
    include: {
      usuario: {
        select: { id: true, nombre: true, email: true },
      },
    },
    orderBy: { fechaInicio: 'desc' },
  })

  res.json({ data: socios })
}

export async function getEntradas(req: Request, res: Response) {
  const partidoId = req.query.partidoId ? parseInt(String(req.query.partidoId), 10) : undefined

  const where = partidoId ? { partidoId } : {}

  const entradas = await prisma.entrada.findMany({
    where,
    include: {
      usuario: {
        select: { id: true, nombre: true, email: true },
      },
      partido: {
        select: { id: true, rival: true, fecha: true, hora: true },
      },
    },
    orderBy: { fechaCompra: 'desc' },
  })

  res.json({ data: entradas })
}
