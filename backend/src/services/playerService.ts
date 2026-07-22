import * as playerRepository from '../repositories/playerRepository'

const allowedPositions = ['POR', 'DEF', 'MED', 'DEL']

export async function getJugadores(posicion?: string) {
  if (posicion && !allowedPositions.includes(posicion)) {
    return { error: 'Posición inválida. Use: POR, DEF, MED o DEL', status: 400 }
  }

  const jugadores = await playerRepository.findAllJugadores(posicion)
  return { data: jugadores, status: 200 }
}

export async function getJugadorById(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    return { error: 'ID inválido', status: 400 }
  }

  const jugador = await playerRepository.findJugadorById(id)

  if (!jugador) {
    return { error: 'Jugador no encontrado', status: 404 }
  }

  return { data: jugador, status: 200 }
}

export async function createJugador(body: Record<string, unknown>) {
  const { nombre, edad, posicion, numero, nacionalidad } = body

  if (!nombre || typeof nombre !== 'string') {
    return { error: 'Nombre requerido', status: 400 }
  }
  if (!edad || typeof edad !== 'number' || edad < 15 || edad > 50) {
    return { error: 'Edad debe ser un número entre 15 y 50', status: 400 }
  }
  if (!posicion || !allowedPositions.includes(posicion as string)) {
    return { error: 'Posición inválida. Use: POR, DEF, MED o DEL', status: 400 }
  }
  if (!numero || typeof numero !== 'number' || numero < 1 || numero > 99) {
    return { error: 'Número debe ser entre 1 y 99', status: 400 }
  }
  if (!nacionalidad || typeof nacionalidad !== 'string') {
    return { error: 'Nacionalidad requerida', status: 400 }
  }

  const jugador = await playerRepository.createJugador({
    nombre: nombre as string,
    edad: edad as number,
    posicion: posicion as string,
    numero: numero as number,
    nacionalidad: nacionalidad as string,
  })

  return { data: jugador, status: 201 }
}

export async function updateJugador(id: number, body: Record<string, unknown>) {
  if (!Number.isInteger(id) || id <= 0) {
    return { error: 'ID inválido', status: 400 }
  }

  const existing = await playerRepository.findJugadorById(id)
  if (!existing) {
    return { error: 'Jugador no encontrado', status: 404 }
  }

  // Validate fields
  const allowedFields = ['nombre', 'edad', 'posicion', 'numero', 'nacionalidad', 'activo']
  const updateData: Record<string, unknown> = {}

  for (const key of allowedFields) {
    if (body[key] !== undefined) {
      updateData[key] = body[key]
    }
  }

  if (updateData.nombre !== undefined && typeof updateData.nombre !== 'string') {
    return { error: 'Nombre debe ser texto', status: 400 }
  }
  if (updateData.edad !== undefined && (typeof updateData.edad !== 'number' || updateData.edad < 15 || updateData.edad > 50)) {
    return { error: 'Edad debe ser un número entre 15 y 50', status: 400 }
  }
  if (updateData.posicion !== undefined && !allowedPositions.includes(updateData.posicion as string)) {
    return { error: 'Posición inválida. Use: POR, DEF, MED o DEL', status: 400 }
  }
  if (updateData.numero !== undefined && (typeof updateData.numero !== 'number' || updateData.numero < 1 || updateData.numero > 99)) {
    return { error: 'Número debe ser entre 1 y 99', status: 400 }
  }
  if (updateData.nacionalidad !== undefined && typeof updateData.nacionalidad !== 'string') {
    return { error: 'Nacionalidad debe ser texto', status: 400 }
  }
  if (updateData.activo !== undefined && typeof updateData.activo !== 'boolean') {
    return { error: 'Activo debe ser booleano', status: 400 }
  }

  const jugador = await playerRepository.updateJugador(id, updateData as any)
  return { data: jugador, status: 200 }
}

export async function deactivateJugador(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    return { error: 'ID inválido', status: 400 }
  }

  const existing = await playerRepository.findJugadorById(id)
  if (!existing) {
    return { error: 'Jugador no encontrado', status: 404 }
  }

  const jugador = await playerRepository.deactivateJugador(id)
  return { data: jugador, status: 200 }
}
