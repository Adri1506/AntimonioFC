import * as membershipRepository from '../repositories/membershipRepository'
import { z } from 'zod'

const afiliarSchema = z.object({
  tipo: z.enum(['BRONCE', 'PLATA', 'ORO'], {
    message: 'Tipo inválido. Use: BRONCE, PLATA o ORO',
  }),
})

type AfiliarInput = z.infer<typeof afiliarSchema>

const DESCUENTO_POR_TIPO: Record<string, number> = {
  BRONCE: 5,
  PLATA: 10,
  ORO: 20,
}

export { afiliarSchema }
export type { AfiliarInput }

export async function afiliarSocio(data: AfiliarInput & { usuarioId: number }) {
  // Check if user already has an active membership
  const existente = await membershipRepository.findSocioActivoByUsuarioId(data.usuarioId)
  if (existente) {
    return { error: 'Ya eres socio', status: 409 }
  }

  const descuentoEntradas = DESCUENTO_POR_TIPO[data.tipo]
  const now = new Date()
  // Membership valid for 1 year
  const fechaFin = new Date(now)
  fechaFin.setFullYear(fechaFin.getFullYear() + 1)

  const socio = await membershipRepository.createSocio({
    usuarioId: data.usuarioId,
    tipo: data.tipo,
    descuentoEntradas,
    renovacionAutomatica: false,
    fechaFin,
  })

  return {
    data: {
      id: socio.id,
      tipo: socio.tipo,
      fechaInicio: socio.fechaInicio.toISOString(),
      fechaFin: socio.fechaFin?.toISOString() ?? null,
      descuentoEntradas: socio.descuentoEntradas,
      renovacionAutomatica: socio.renovacionAutomatica,
      activo: socio.activo,
    },
    status: 201,
  }
}

export async function getMiMembresia(usuarioId: number) {
  const socio = await membershipRepository.findSocioActivoByUsuarioId(usuarioId)

  if (!socio) {
    return { data: null, status: 200 }
  }

  return {
    data: {
      id: socio.id,
      tipo: socio.tipo,
      fechaInicio: socio.fechaInicio.toISOString(),
      fechaFin: socio.fechaFin?.toISOString() ?? null,
      descuentoEntradas: socio.descuentoEntradas,
      renovacionAutomatica: socio.renovacionAutomatica,
      activo: socio.activo,
    },
    status: 200,
  }
}
