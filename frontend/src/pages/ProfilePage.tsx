import { useAuth } from '@/hooks/useAuth'
import { useNavigate, Link } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PurchaseHistory } from '@/components/sections/PurchaseHistory'
import { DigitalCard } from '@/components/sections/DigitalCard'
import { MemberBenefits } from '@/components/sections/MemberBenefits'
import { useMyTickets } from '@/hooks/useTickets'
import { useMiMembresia } from '@/hooks/useMembership'
import { LogOut, User, Mail, Calendar, Shield, Award } from 'lucide-react'

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { data: tickets, isLoading: ticketsLoading } = useMyTickets()
  const { data: membresia, isLoading: loadingMembresia } = useMiMembresia()

  function handleLogout() {
    logout()
    navigate('/', { replace: true })
  }

  if (!user) return null

  const memberSince = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString('es-CL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Desconocida'

  return (
    <Layout currentPath="/perfil">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold text-gray-900">Mi Perfil</h1>

        {/* User info card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="size-5 text-accent" />
              Información Personal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="size-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Nombre</p>
                <p className="font-medium text-gray-900">{user.nombre}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="size-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Miembro desde</p>
                <p className="font-medium text-gray-900">{memberSince}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="size-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Rol</p>
                <p className="font-medium text-gray-900">
                  {user.rol === 'admin' ? 'Administrador' : 'Usuario'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Membership section */}
        {loadingMembresia ? (
          <Card className="mb-6">
            <CardContent className="flex items-center justify-center py-8">
              <div className="size-6 animate-spin rounded-full border-4 border-gray-200 border-t-accent" />
            </CardContent>
          </Card>
        ) : membresia ? (
          <>
            <div className="mb-6">
              <DigitalCard
                nombre={user?.nombre ?? ''}
                tipo={membresia.tipo}
                fechaInicio={membresia.fechaInicio}
                usuarioId={user?.id ?? 0}
              />
            </div>
            <MemberBenefits membresia={membresia} />
          </>
        ) : (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="size-5 text-accent" />
                Membresía
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                No tienes una membresía activa.{' '}
                <Link to="/socios" className="font-medium text-accent hover:underline">
                  Hazte Socio
                </Link>{' '}
                para disfrutar de beneficios exclusivos.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Purchase history */}
        <div className="mb-8">
          <PurchaseHistory tickets={tickets ?? []} isLoading={ticketsLoading} />
        </div>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full sm:w-auto"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 size-4" />
          Cerrar Sesión
        </Button>
      </div>
    </Layout>
  )
}
