import { useQuery } from '@tanstack/react-query'
import { fetchFichajes, fetchResumen } from '@/services/transferService'
import type { Transfer, TransferSummary } from '@/types/transfer'

export function useFichajes(tipo?: string) {
  return useQuery<Transfer[]>({
    queryKey: ['fichajes', tipo ?? 'todas'],
    queryFn: () => fetchFichajes(tipo),
  })
}

export function useResumen() {
  return useQuery<TransferSummary>({
    queryKey: ['fichajes', 'resumen'],
    queryFn: fetchResumen,
  })
}
