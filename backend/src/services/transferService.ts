import * as transferRepository from '../repositories/transferRepository'

const ALLOWED_TIPOS = ['ALTA', 'BAJA'] as const

export async function getFichajes(tipo?: string) {
  if (tipo && !ALLOWED_TIPOS.includes(tipo as typeof ALLOWED_TIPOS[number])) {
    return { error: 'Tipo inválido. Use: ALTA o BAJA', status: 400 }
  }

  const fichajes = await transferRepository.findAllFichajes(tipo)
  return { data: fichajes, status: 200 }
}

export async function getResumen() {
  const resumen = await transferRepository.getResumenStats()
  return { data: resumen, status: 200 }
}
