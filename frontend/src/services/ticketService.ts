import apiClient from './apiClient'
import type { Match } from '@/types/match'
import type { PurchaseRequest, PurchaseResponse, Ticket } from '@/types/ticket'

export async function fetchMatches(): Promise<Match[]> {
  const res = await apiClient.get<{ data: Match[] }>('/partidos?proximos=true')
  return res.data.data
}

export async function purchaseTicket(data: PurchaseRequest): Promise<PurchaseResponse> {
  const res = await apiClient.post<PurchaseResponse>('/entradas', data)
  return res.data
}

export async function fetchMyTickets(): Promise<Ticket[]> {
  const res = await apiClient.get<Ticket[]>('/mis-entradas')
  return res.data
}
