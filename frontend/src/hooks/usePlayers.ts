import { useQuery } from '@tanstack/react-query'
import { fetchJugadores, fetchJugadorById } from '@/services/playerService'
import type { Player } from '@/types/player'

export function usePlayers(posicion?: string) {
  return useQuery<Player[]>({
    queryKey: ['jugadores', posicion ?? 'todas'],
    queryFn: () => fetchJugadores(posicion),
  })
}

export function usePlayer(id: number | null) {
  return useQuery<Player>({
    queryKey: ['jugador', id],
    queryFn: () => fetchJugadorById(id!),
    enabled: id !== null && id > 0,
  })
}
