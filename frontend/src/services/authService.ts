import apiClient from './apiClient'
import type { AuthResponse, User } from '@/types/user'

export async function login(email: string, password: string): Promise<AuthResponse> {
  const res = await apiClient.post<AuthResponse>('/auth/login', { email, password })
  return res.data
}

export async function register(nombre: string, email: string, password: string): Promise<AuthResponse> {
  const res = await apiClient.post<AuthResponse>('/auth/register', { nombre, email, password })
  return res.data
}

export async function getProfile(): Promise<User> {
  const res = await apiClient.get<User>('/auth/perfil')
  return res.data
}
