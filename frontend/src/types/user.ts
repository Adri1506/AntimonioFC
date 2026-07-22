export interface User {
  id: number
  nombre: string
  email: string
  rol: string
  createdAt: string
}

export interface AuthResponse {
  token: string
  usuario: User
}
