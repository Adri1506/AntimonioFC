import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Ticket } from 'lucide-react'
import type { Ticket as TicketType } from '@/types/ticket'

interface PurchaseHistoryProps {
  tickets: TicketType[]
  isLoading: boolean
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function formatCurrency(value: number): string {
  return `$${value.toFixed(2)}`
}

export function PurchaseHistory({ tickets, isLoading }: PurchaseHistoryProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ticket className="size-5 text-accent" />
            Mis Compras
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 animate-pulse rounded-lg bg-secondary-dark/30" />
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!tickets || tickets.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ticket className="size-5 text-accent" />
            Mis Compras
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <Ticket className="size-12 text-gray-300" />
            <p className="text-gray-500">Aún no has comprado entradas</p>
            <Link to="/entradas">
              <Button variant="accent" size="sm">
                Ver Partidos
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="size-5 text-accent" />
          Historial de Compras
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-secondary-dark text-xs uppercase tracking-wider text-text-secondary">
                <th className="pb-2 pr-4 font-medium">Partido</th>
                <th className="pb-2 pr-4 font-medium">Sector</th>
                <th className="pb-2 pr-4 font-medium">Cant.</th>
                <th className="pb-2 pr-4 font-medium">Total</th>
                <th className="pb-2 font-medium">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b border-secondary-dark/50 last:border-0">
                  <td className="py-3 pr-4 font-medium text-text">
                    {ticket.rival}
                  </td>
                  <td className="py-3 pr-4 text-text-secondary">{ticket.sector}</td>
                  <td className="py-3 pr-4 text-text-secondary">{ticket.cantidad}</td>
                  <td className="py-3 pr-4 font-semibold text-accent">
                    {formatCurrency(ticket.total)}
                  </td>
                  <td className="py-3 text-xs text-text-secondary">
                    {formatDate(ticket.fechaCompra)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
