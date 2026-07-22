import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import apiClient from '@/services/apiClient'
import type { Match } from '@/types/match'

interface EntradaData {
  id: number
  sector: string
  cantidad: number
  total: number
  fechaCompra: string
  usuario: {
    id: number
    nombre: string
    email: string
  }
  partido: {
    id: number
    rival: string
    fecha: string
    hora: string
  }
}

async function fetchMatches() {
  const res = await apiClient.get<{ data: Match[] }>('/partidos')
  return res.data.data
}

async function fetchTickets(partidoId?: number) {
  const params = partidoId ? `?partidoId=${partidoId}` : ''
  const res = await apiClient.get<{ data: EntradaData[] }>(`/admin/entradas${params}`)
  return res.data.data
}

export default function TicketsAdminPage() {
  const [selectedMatch, setSelectedMatch] = useState<string>('all')

  const { data: matches } = useQuery({
    queryKey: ['partidos-list'],
    queryFn: fetchMatches,
  })

  const { data: tickets, isLoading } = useQuery({
    queryKey: ['admin-entradas', selectedMatch],
    queryFn: () =>
      fetchTickets(
        selectedMatch !== 'all' ? Number(selectedMatch) : undefined
      ),
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
        <h1 className="text-2xl font-bold text-text">Entradas</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Listado de entradas vendidas
        </p>
      </div>

      <div className="mb-4">
        <Select value={selectedMatch} onValueChange={(v) => setSelectedMatch(v ?? 'all')}>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Filtrar por partido" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los partidos</SelectItem>
            {matches?.map((match) => (
              <SelectItem key={match.id} value={String(match.id)}>
                {match.rival} -{' '}
                {new Date(match.fecha).toLocaleDateString('es-ES')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto rounded-xl border border-secondary-dark bg-surface">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-secondary-dark bg-secondary/50">
              <th className="px-4 py-3 font-medium text-text-secondary">
                Partido
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Usuario
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Sector
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Cantidad
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Total
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets?.map((ticket) => (
              <tr
                key={ticket.id}
                className="border-b border-secondary-dark transition-colors hover:bg-secondary/30"
              >
                <td className="px-4 py-3 font-medium text-text">
                  {ticket.partido.rival}
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  {ticket.usuario.nombre}
                </td>
                <td className="px-4 py-3 text-text">{ticket.sector}</td>
                <td className="px-4 py-3 text-text">{ticket.cantidad}</td>
                <td className="px-4 py-3 font-medium text-text">
                  {ticket.total.toFixed(2)} €
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  {new Date(ticket.fechaCompra).toLocaleDateString('es-ES')}
                </td>
              </tr>
            ))}
            {(!tickets || tickets.length === 0) && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-8 text-center text-text-secondary"
                >
                  No hay entradas registradas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
