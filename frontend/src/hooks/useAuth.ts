import { useAuthStore } from '@/stores/authStore'

export function useAuth() {
  const token = useAuthStore((s) => s.token)
  const user = useAuthStore((s) => s.user)
  const login = useAuthStore((s) => s.login)
  const logout = useAuthStore((s) => s.logout)
  const setUser = useAuthStore((s) => s.setUser)

  return {
    token,
    user,
    isAuthenticated: !!token && !!user,
    login,
    logout,
    setUser,
  }
}
