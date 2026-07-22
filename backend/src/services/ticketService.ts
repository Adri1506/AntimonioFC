import * as ticketRepository from '../repositories/ticketRepository'
import * as matchRepository from '../repositories/matchRepository'
import { z } from 'zod'

const purchaseSchema = z.object({
  partidoId: z.number().int().positive('ID de partido inválido'),
  sector: z.enum(['Preferencia', 'General', 'Visita'], {
    message: 'Sector inválido. Use: Preferencia, General o Visita',
  }),
  cantidad: z
    .number()
    .int()
    .min(1, 'La cantidad mínima es 1')
    .max(10, 'La cantidad máxima es 10'),
})

type PurchaseInput = z.infer<typeof purchaseSchema>

const PRECIO_KEY: Record<string, keyof { precioPreferencia: number; precioGeneral: number; precioVisita: number }> = {
  Preferencia: 'precioPreferencia',
  General: 'precioGeneral',
  Visita: 'precioVisita',
}

export { purchaseSchema }
export type { PurchaseInput }

export async function comprarEntrada(data: PurchaseInput & { usuarioId: number }) {
  const partido = await matchRepository.findMatchById(data.partidoId)
  if (!partido) {
    return { error: 'Partido no encontrado', status: 404 }
  }

  const precioKey = PRECIO_KEY[data.sector]
  const precioUnitario = partido[precioKey]
  const total = precioUnitario * data.cantidad

  const timestamp = Date.now()
  const codigoQr = `ANTIMONIOFC-${data.partidoId}-${data.usuarioId}-${timestamp}`

  const entrada = await ticketRepository.createEntrada({
    usuarioId: data.usuarioId,
    partidoId: data.partidoId,
    sector: data.sector,
    cantidad: data.cantidad,
    total,
    codigoQr,
  })

  return {
    data: {
      id: entrada.id,
      partidoId: entrada.partidoId,
      sector: entrada.sector,
      cantidad: entrada.cantidad,
      total: entrada.total,
      codigoQr: entrada.codigoQr,
      fechaCompra: entrada.fechaCompra.toISOString(),
    },
    status: 201,
  }
}

export async function getMisEntradas(usuarioId: number) {
  const entradas = await ticketRepository.findEntradasByUsuarioId(usuarioId)

  const data = entradas.map((e) => ({
    id: e.id,
    partidoId: e.partidoId,
    rival: e.partido.rival,
    fechaPartido: e.partido.fecha.toISOString().split('T')[0],
    horaPartido: e.partido.hora,
    sector: e.sector,
    cantidad: e.cantidad,
    total: e.total,
    codigoQr: e.codigoQr,
    fechaCompra: e.fechaCompra.toISOString(),
  }))

  return { data, status: 200 }
}
