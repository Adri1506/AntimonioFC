import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Match } from "@/types/match"

interface MatchCardProps {
  match: Match
  onComprar: (match: Match) => void
}

function formatDate(fecha: string): string {
  const date = new Date(fecha + "T12:00:00")
  const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
  const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
  ]
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear().toString().slice(-2)}`
}

function MatchCard({ match, onComprar }: MatchCardProps) {
  const precioDesde = Math.min(
    match.precioPreferencia,
    match.precioGeneral,
    match.precioVisita
  )

  return (
    <Card
      className="flex flex-col text-white"
      style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
    >
      <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
        {/* Icono */}
        <span className="flex size-14 items-center justify-center rounded-full bg-white/20 text-2xl">
          ⚽
        </span>

        {/* Rival */}
        <h3 className="text-base font-semibold text-white">{match.rival}</h3>

        {/* Competición */}
        <Badge variant="secondary" className="text-xs">
          {match.competicion}
        </Badge>

        {/* Fecha y hora */}
        <div className="flex items-center gap-3 text-sm text-white/80">
          <span className="font-semibold text-white">
            {formatDate(match.fecha)}
          </span>
          <span className="text-xs">•</span>
          <span>{match.hora}</span>
        </div>

        {/* Estadio */}
        <p className="text-xs text-white/70">{match.estadio}</p>

        {/* Precio */}
        <p className="mt-1 text-lg font-bold text-white">
          Desde ${precioDesde}
        </p>
      </CardContent>

      <CardFooter className="justify-center">
        <Button variant="outline" size="sm" onClick={() => onComprar(match)}>
          🎟️ Comprar Entradas
        </Button>
      </CardFooter>
    </Card>
  )
}

export { MatchCard }
