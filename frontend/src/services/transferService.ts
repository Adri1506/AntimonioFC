import apiClient from './apiClient'
import type { Transfer, TransferSummary } from '@/types/transfer'

export async function fetchFichajes(tipo?: string): Promise<Transfer[]> {
  const params = tipo ? `?tipo=${encodeURIComponent(tipo)}` : ''
  const res = await apiClient.get<{ data: Transfer[] }>(`/fichajes${params}`)
  return res.data.data
}

export async function fetchResumen(): Promise<TransferSummary> {
  const res = await apiClient.get<{ data: TransferSummary }>('/fichajes/resumen')
  return res.data.data
}
