import type { Player } from '@/types/player'

interface SubstitutesListProps {
  suplentes: Player[]
  onSelect: (player: Player) => void
}

const positionLabels: Record<string, string> = {
  POR: 'POR',
  DEF: 'DEF',
  MED: 'MED',
  DEL: 'DEL',
}

function SubstitutesList({ suplentes, onSelect }: SubstitutesListProps) {
  if (suplentes.length === 0) {
    return (
      <p className="text-center text-xs text-white/70">
        No hay suplentes disponibles
      </p>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      {suplentes.map((jugador) => {
        const initials = jugador.nombre
          .split(' ')
          .map((p) => p[0])
          .join('')
          .slice(0, 2)

        return (
          <button
            key={jugador.id}
            type="button"
            onClick={() => onSelect(jugador)}
            className="flex items-center gap-2 rounded-lg bg-white/10 p-2 text-left text-xs text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {/* Avatar pequeño */}
            <div className="size-8 shrink-0 overflow-hidden rounded-full bg-white/20">
              {jugador.foto ? (
                <img
                  src={`/${jugador.foto}`}
                  alt={jugador.nombre}
                  className="size-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex size-full items-center justify-center font-heading text-[10px] font-bold text-white/70">
                  {initials}
                </div>
              )}
            </div>

            {/* Nombre y datos */}
            <div className="flex-1 min-w-0">
              <p className="truncate font-medium text-white">
                {jugador.nombre}
              </p>
              <span className="text-[10px] text-white/70">
                #{jugador.numero} • {positionLabels[jugador.posicion] ?? jugador.posicion}
              </span>
            </div>
          </button>
        )
      })}
    </div>
  )
}

export { SubstitutesList }
