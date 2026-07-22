import { useQuery } from '@tanstack/react-query'
import { Badge } from '@/components/ui/badge'
import apiClient from '@/services/apiClient'

interface SocioData {
  id: number
  tipo: string
  fechaInicio: string
  activo: boolean
  usuario: {
    id: number
    nombre: string
    email: string
  }
}

async function fetchSocios() {
  const res = await apiClient.get<{ data: SocioData[] }>('/admin/socios')
  return res.data.data
}

export default function MembersAdminPage() {
  const { data: socios, isLoading } = useQuery({
    queryKey: ['admin-socios'],
    queryFn: fetchSocios,
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text">Socios</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Listado de socios del club
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-secondary-dark bg-surface">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-secondary-dark bg-secondary/50">
              <th className="px-4 py-3 font-medium text-text-secondary">
                Nombre
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Email
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Tipo
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Desde
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Activo
              </th>
            </tr>
          </thead>
          <tbody>
            {socios?.map((socio) => (
              <tr
                key={socio.id}
                className="border-b border-secondary-dark transition-colors hover:bg-secondary/30"
              >
                <td className="px-4 py-3 font-medium text-text">
                  {socio.usuario.nombre}
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  {socio.usuario.email}
                </td>
                <td className="px-4 py-3">
                  <Badge
                    variant={
                      socio.tipo === 'ORO'
                        ? 'default'
                        : socio.tipo === 'PLATA'
                          ? 'secondary'
                          : 'outline'
                    }
                  >
                    {socio.tipo}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  {new Date(socio.fechaInicio).toLocaleDateString('es-ES')}
                </td>
                <td className="px-4 py-3">
                  {socio.activo ? 'Sí' : 'No'}
                </td>
              </tr>
            ))}
            {(!socios || socios.length === 0) && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-text-secondary"
                >
                  No hay socios registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
