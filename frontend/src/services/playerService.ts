import type { Player } from '@/types/player'

export async function fetchJugadores(posicion?: string): Promise<Player[]> {
  const params = posicion ? `?posicion=${encodeURIComponent(posicion)}` : ''
  const res = await fetch(`/api/jugadores${params}`)
  if (!res.ok) {
    throw new Error('Error al cargar la plantilla')
  }
  const json = await res.json()
  return json.data as Player[]
}

export async function fetchJugadorById(id: number): Promise<Player> {
  const res = await fetch(`/api/jugadores/${id}`)
  if (!res.ok) {
    if (res.status === 404) throw new Error('Jugador no encontrado')
    throw new Error('Error al cargar el jugador')
  }
  const json = await res.json()
  return json.data as Player
}
