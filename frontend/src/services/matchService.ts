import apiClient from './apiClient'
import type { Match } from "@/types/match"

export async function fetchUpcomingMatches(): Promise<Match[]> {
  const res = await apiClient.get<{ data: Match[] }>("/partidos/proximos")
  return res.data.data
}

export async function fetchAllMatches(): Promise<Match[]> {
  const res = await apiClient.get<{ data: Match[] }>("/partidos")
  return res.data.data
}

export async function createMatch(data: Partial<Match>): Promise<Match> {
  const res = await apiClient.post<Match>("/partidos", data)
  return res.data
}

export async function updateMatch(id: number, data: Partial<Match>): Promise<Match> {
  const res = await apiClient.put<Match>(`/partidos/${id}`, data)
  return res.data
}

export async function deleteMatch(id: number): Promise<void> {
  await apiClient.delete(`/partidos/${id}`)
}
