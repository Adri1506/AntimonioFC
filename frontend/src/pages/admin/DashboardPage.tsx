import { useQuery } from '@tanstack/react-query'
import { DashboardCards } from '@/components/sections/DashboardCards'
import apiClient from '@/services/apiClient'

interface DashboardCounts {
  jugadores: number
  socios: number
  entradas: number
  noticias: number
}

async function fetchDashboard(): Promise<DashboardCounts> {
  const res = await apiClient.get<DashboardCounts>('/admin/dashboard')
  return res.data
}

export default function DashboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['admin-dashboard'],
    queryFn: fetchDashboard,
  })

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text">Dashboard</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Resumen general del club
        </p>
      </div>

      <DashboardCards
        counts={
          data ?? { jugadores: 0, socios: 0, entradas: 0, noticias: 0 }
        }
        isLoading={isLoading}
      />
    </div>
  )
}
