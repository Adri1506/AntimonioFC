import { Users, HeartHandshake, Ticket, Newspaper } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DashboardCounts {
  jugadores: number
  socios: number
  entradas: number
  noticias: number
}

interface DashboardCardsProps {
  counts: DashboardCounts
  isLoading: boolean
}

const cards = [
  {
    key: 'jugadores' as const,
    label: 'Jugadores',
    icon: Users,
    color: 'bg-blue-500/10 text-blue-600',
    borderColor: 'border-blue-200',
  },
  {
    key: 'socios' as const,
    label: 'Socios',
    icon: HeartHandshake,
    color: 'bg-orange-500/10 text-orange-600',
    borderColor: 'border-orange-200',
  },
  {
    key: 'entradas' as const,
    label: 'Entradas',
    icon: Ticket,
    color: 'bg-green-500/10 text-green-600',
    borderColor: 'border-green-200',
  },
  {
    key: 'noticias' as const,
    label: 'Noticias',
    icon: Newspaper,
    color: 'bg-purple-500/10 text-purple-600',
    borderColor: 'border-purple-200',
  },
]

export function DashboardCards({ counts, isLoading }: DashboardCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.key}
          className={cn(
            'rounded-xl border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md',
            card.borderColor
          )}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">
                {card.label}
              </p>
              <p className="mt-1 text-3xl font-bold text-text">
                {isLoading ? (
                  <span className="inline-block h-8 w-12 animate-pulse rounded bg-secondary-dark" />
                ) : (
                  counts[card.key]
                )}
              </p>
            </div>
            <div className={cn('rounded-lg p-3', card.color)}>
              <card.icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
