import type { ReactNode } from 'react'

interface FormationFieldProps {
  children?: ReactNode
  className?: string
}

function FormationField({ children, className = '' }: FormationFieldProps) {
  return (
    <svg
      viewBox="0 0 100 140"
      preserveAspectRatio="xMidYMid meet"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label="Campo de fútbol con formación táctica"
    >
      <defs>
        <linearGradient id="pitchGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d7d3a" />
          <stop offset="50%" stopColor="#3a9d4a" />
          <stop offset="100%" stopColor="#2d7d3a" />
        </linearGradient>

        <pattern
          id="pitchTexture"
          patternUnits="userSpaceOnUse"
          width="4"
          height="4"
        >
          <rect width="4" height="4" fill="url(#pitchGradient)" />
          <rect width="2" height="4" fill="#2d7d3a" opacity="0.15" />
        </pattern>

        <clipPath id="fieldClip">
          <rect x="0" y="5" width="100" height="130" rx="1" />
        </clipPath>
      </defs>

      {/* Fondo del campo con textura */}
      <rect x="0" y="0" width="100" height="140" fill="url(#pitchTexture)" />

      {/* Líneas del campo — opacidad 0.6 */}
      <g
        stroke="white"
        strokeWidth="0.4"
        fill="none"
        opacity="0.6"
        clipPath="url(#fieldClip)"
      >
        {/* Banda exterior */}
        <rect x="0" y="5" width="100" height="130" rx="1" />

        {/* Medio campo */}
        <line x1="0" y1="70" x2="100" y2="70" />

        {/* Círculo central */}
        <circle cx="50" cy="70" r="12" />

        {/* Área penal superior */}
        <rect x="20" y="5" width="60" height="20" />

        {/* Área penal inferior */}
        <rect x="20" y="115" width="60" height="20" />

        {/* Área chica superior */}
        <rect x="35" y="5" width="30" height="8" />

        {/* Área chica inferior */}
        <rect x="35" y="127" width="30" height="8" />

        {/* Punto penal superior */}
        <circle cx="50" cy="18" r="0.8" fill="white" />

        {/* Punto penal inferior */}
        <circle cx="50" cy="122" r="0.8" fill="white" />
      </g>

      {/* Jugadores posicionados */}
      {children}
    </svg>
  )
}

export { FormationField }
