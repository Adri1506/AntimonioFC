import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Layout } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { login as loginApi } from '@/services/authService'
import { useAuthStore } from '@/stores/authStore'

const loginSchema = z.object({
  email: z.string().email('Ingresa un email válido'),
  password: z.string().min(1, 'La contraseña es requerida'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const loginStore = useAuthStore((s) => s.login)
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const returnUrl = searchParams.get('returnUrl') || '/'

  async function onSubmit(data: LoginFormData) {
    setServerError('')
    setLoading(true)
    try {
      const res = await loginApi(data.email, data.password)
      loginStore(res.token, res.usuario)
      navigate(returnUrl, { replace: true })
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosErr = err as { response?: { data?: { error?: string } } }
        setServerError(axiosErr.response?.data?.error || 'Error al iniciar sesión')
      } else {
        setServerError('Error de conexión')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout currentPath="/login">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md flex-col items-center justify-center px-4">
        <div className="w-full rounded-xl bg-white p-8 shadow-lg">
          {/* Shield */}
          <div className="mb-6 flex flex-col items-center gap-2">
            <img
              src="/img/escudo.png"
              alt="AntimonioFC"
              className="h-16 w-16 rounded-full ring-2 ring-primary/20"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.style.display = 'none'
                const fallback = img.parentElement?.querySelector('[data-fallback="shield"]') as HTMLElement | null
                if (fallback) {
                  fallback.style.display = 'flex'
                }
              }}
            />
            <span
              data-fallback="shield"
              className="hidden h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-bold text-white"
            >
              AFC
            </span>
            <h1 className="text-xl font-bold text-gray-900">Iniciar Sesión</h1>
            <p className="text-sm text-gray-500">Accede a tu cuenta de AntimonioFC</p>
          </div>

          {/* Server error */}
          {serverError && (
            <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register('password')}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="font-medium text-accent hover:underline">
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}
