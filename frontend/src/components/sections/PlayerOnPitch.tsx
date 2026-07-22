import type { Player } from '@/types/player'

interface PlayerOnPitchProps {
  jugador: Player
  x: number
  y: number
  onClick: (player: Player) => void
}

const positionColors: Record<string, string> = {
  POR: '#D97706', // amber
  DEF: '#2563EB', // blue
  MED: '#059669', // emerald
  DEL: '#EA580C', // orange
}

function PlayerOnPitch({ jugador, x, y, onClick }: PlayerOnPitchProps) {
  const color = positionColors[jugador.posicion] ?? '#6B7280'
  const initials = jugador.nombre
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)

  return (
    <g
      className="cursor-pointer transition-transform duration-300 hover:scale-110"
      style={{ transformOrigin: `${x}px ${y}px` }}
      onClick={() => onClick(jugador)}
      role="button"
      aria-label={`${jugador.nombre} - ${jugador.posicion} #${jugador.numero}`}
    >
      {/* Tooltip al hover - SVG nativo */}
      <title>{`${jugador.nombre} • #${jugador.numero}`}</title>

      {/* Círculo exterior con color de posición */}
      <circle cx={x} cy={y} r="5.5" fill={color} opacity="0.25" />
      <circle cx={x} cy={y} r="5" fill={color} opacity="0.85" />

      {/* Clip path para el avatar */}
      <clipPath id={`player-clip-${jugador.id}`}>
        <circle cx={x} cy={y} r="4.2" />
      </clipPath>

      {/* Avatar del jugador o iniciales */}
      {jugador.foto ? (
        <image
          href={`/${jugador.foto}`}
          x={x - 4.2}
          y={y - 4.2}
          width="8.4"
          height="8.4"
          clipPath={`url(#player-clip-${jugador.id})`}
          preserveAspectRatio="xMidYMid slice"
        />
      ) : (
        <circle cx={x} cy={y} r="4.2" fill="white" opacity="0.9" />
      )}

      {/* Iniciales si no hay foto */}
      {!jugador.foto && (
        <text
          x={x}
          y={y + 1}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#1A1A2E"
          fontSize="3"
          fontWeight="700"
          fontFamily="Barlow, sans-serif"
        >
          {initials}
        </text>
      )}

      {/* Número del jugador */}
      <text
        x={x}
        y={y + 6.5}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="3"
        fontWeight="800"
        fontFamily="Barlow Condensed, sans-serif"
        stroke="#1A1A2E"
        strokeWidth="0.3"
        paintOrder="stroke fill"
      >
        {jugador.numero}
      </text>
    </g>
  )
}

export { PlayerOnPitch }
