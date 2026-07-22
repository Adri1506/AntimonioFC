import apiClient from './apiClient'
import type { AfiliarRequest, AfiliarResponse, Membership } from '@/types/membership'

export async function afiliarSocio(data: AfiliarRequest): Promise<AfiliarResponse> {
  const res = await apiClient.post<AfiliarResponse>('/socios', data)
  return res.data
}

export async function fetchMiMembresia(): Promise<Membership | null> {
  const res = await apiClient.get<Membership | null>('/mi-membresia')
  return res.data
}
