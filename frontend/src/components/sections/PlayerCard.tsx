import type { Player } from '@/types/player'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const positionLabels: Record<string, string> = {
  POR: 'POR',
  DEF: 'DEF',
  MED: 'MED',
  DEL: 'DEL',
}

interface PlayerCardProps {
  player: Player
  onSelect: (player: Player) => void
}

function PlayerCard({ player, onSelect }: PlayerCardProps) {
  const initials = player.nombre
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)

  return (
    <button
      type="button"
      onClick={() => onSelect(player)}
      className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl"
    >
      <Card
        className="group/card cursor-pointer text-white transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5"
        style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
      >
        <CardContent className="flex flex-col items-center gap-3 pt-6 pb-4 text-center">
          {/* Avatar / Placeholder */}
          <div className="relative size-20 overflow-hidden rounded-full bg-white/20">
            {player.foto ? (
              <img
                src={`/${player.foto}`}
                alt={player.nombre}
                className="size-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex size-full items-center justify-center font-heading text-lg font-bold text-white/70">
                {initials}
              </div>
            )}

            {/* Número de camiseta */}
            <span
              className={cn(
                'absolute -bottom-1 -right-1 flex size-8 items-center justify-center',
                'rounded-full bg-accent text-sm font-bold text-white shadow-md',
                'font-number leading-none'
              )}
            >
              {player.numero}
            </span>
          </div>

          {/* Nombre */}
          <h3 className="text-sm font-semibold text-white line-clamp-1">
            {player.nombre}
          </h3>

          {/* Badge de posición */}
          <Badge variant="position" className="text-[10px]">
            {positionLabels[player.posicion] ?? player.posicion}
          </Badge>
        </CardContent>
      </Card>
    </button>
  )
}

export { PlayerCard }
