import * as matchRepository from '../repositories/matchRepository'

function serializePartido(p: import('@prisma/client').Partido) {
  return {
    id: p.id,
    rival: p.rival,
    fecha: p.fecha.toISOString().split('T')[0],
    hora: p.hora,
    estadio: p.estadio,
    competicion: p.competicion,
    local: p.local,
    precioPreferencia: p.precioPreferencia,
    precioGeneral: p.precioGeneral,
    precioVisita: p.precioVisita,
  }
}

export async function getProximosPartidos() {
  const partidos = await matchRepository.findUpcomingMatches()
  const data = partidos.map(serializePartido)
  return { data, status: 200 }
}

export async function getTodosPartidos() {
  const partidos = await matchRepository.findAllPartidos()
  const data = partidos.map(serializePartido)
  return { data, status: 200 }
}

export async function getPartidoById(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    return { error: 'ID inválido', status: 400 }
  }

  const partido = await matchRepository.findMatchById(id)
  if (!partido) {
    return { error: 'Partido no encontrado', status: 404 }
  }

  return { data: serializePartido(partido), status: 200 }
}

export async function createPartido(body: Record<string, unknown>) {
  const {
    rival,
    fecha,
    hora,
    estadio,
    competicion,
    local,
    precioPreferencia,
    precioGeneral,
    precioVisita,
  } = body

  if (!rival || typeof rival !== 'string') {
    return { error: 'Rival requerido', status: 400 }
  }
  if (!fecha || typeof fecha !== 'string') {
    return { error: 'Fecha requerida', status: 400 }
  }
  if (!hora || typeof hora !== 'string') {
    return { error: 'Hora requerida', status: 400 }
  }
  if (!estadio || typeof estadio !== 'string') {
    return { error: 'Estadio requerido', status: 400 }
  }
  if (!competicion || typeof competicion !== 'string') {
    return { error: 'Competición requerida', status: 400 }
  }

  const partido = await matchRepository.createPartido({
    rival: rival as string,
    fecha: new Date(fecha as string),
    hora: hora as string,
    estadio: estadio as string,
    competicion: competicion as string,
    local: local === true || local === false ? (local as boolean) : true,
    precioPreferencia: typeof precioPreferencia === 'number' ? precioPreferencia : 15,
    precioGeneral: typeof precioGeneral === 'number' ? precioGeneral : 10,
    precioVisita: typeof precioVisita === 'number' ? precioVisita : 12,
  })

  return { data: partido, status: 201 }
}

export async function updatePartido(id: number, body: Record<string, unknown>) {
  if (!Number.isInteger(id) || id <= 0) {
    return { error: 'ID inválido', status: 400 }
  }

  const existing = await matchRepository.findMatchById(id)
  if (!existing) {
    return { error: 'Partido no encontrado', status: 404 }
  }

  const allowedFields = [
    'rival',
    'fecha',
    'hora',
    'estadio',
    'competicion',
    'local',
    'precioPreferencia',
    'precioGeneral',
    'precioVisita',
  ]
  const updateData: Record<string, unknown> = {}

  for (const key of allowedFields) {
    if (body[key] !== undefined) {
      if (key === 'fecha') {
        updateData[key] = new Date(body[key] as string)
      } else {
        updateData[key] = body[key]
      }
    }
  }

  const partido = await matchRepository.updatePartido(id, updateData as any)
  return { data: partido, status: 200 }
}

export async function deletePartido(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    return { error: 'ID inválido', status: 400 }
  }

  const existing = await matchRepository.findMatchById(id)
  if (!existing) {
    return { error: 'Partido no encontrado', status: 404 }
  }

  const entradasCount = await matchRepository.countEntradasByPartidoId(id)
  if (entradasCount > 0) {
    return {
      error: 'No se puede eliminar un partido que tiene entradas vendidas',
      status: 409,
    }
  }

  await matchRepository.deletePartido(id)
  return { data: null, status: 200 }
}
