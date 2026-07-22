import * as userRepository from '../repositories/userRepository'
import { hashPassword, verifyPassword } from '../utils/hash'
import { signToken } from '../utils/jwt'

export async function registerUser(data: {
  nombre: string
  email: string
  password: string
}) {
  const existing = await userRepository.findUserByEmail(data.email)
  if (existing) {
    return { error: 'El email ya está registrado', status: 409 }
  }

  const hashedPassword = await hashPassword(data.password)

  const user = await userRepository.createUser({
    nombre: data.nombre,
    email: data.email,
    password: hashedPassword,
  })

  const token = signToken({ id: user.id, email: user.email, rol: user.rol })
  const usuario = userRepository.excludePassword(user)

  return { data: { token, usuario }, status: 201 }
}

export async function loginUser(data: { email: string; password: string }) {
  const user = await userRepository.findUserByEmail(data.email)
  if (!user) {
    return { error: 'Credenciales incorrectas', status: 401 }
  }

  const valid = await verifyPassword(data.password, user.password)
  if (!valid) {
    return { error: 'Credenciales incorrectas', status: 401 }
  }

  const token = signToken({ id: user.id, email: user.email, rol: user.rol })
  const usuario = userRepository.excludePassword(user)

  return { data: { token, usuario }, status: 200 }
}

export async function getProfile(userId: number) {
  const user = await userRepository.findUserById(userId)
  if (!user) {
    return { error: 'Usuario no encontrado', status: 404 }
  }

  const usuario = userRepository.excludePassword(user)
  return { data: usuario, status: 200 }
}
