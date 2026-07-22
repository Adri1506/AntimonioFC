import { useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { Skeleton } from '@/components/sections/Skeleton'
import { usePlayer } from '@/hooks/usePlayers'
import type { Player } from '@/types/player'

const playerBio: Record<number, string> = {
  1: 'Matías Contreras es un arquero de gran envergadura y reflejos felinos. Formado en las divisiones inferiores del club, ha demostrado una seguridad impresionante bajo los tres palos.',
  2: 'Diego Muñoz es un lateral derecho de proyección ofensiva. Su velocidad por la banda y precisión en los centros lo convierten en un arma ofensiva constante.',
  3: 'José Díaz es el líder de la defensa. Central experimentado con gran lectura de juego y capacidad de anticipación. Su juego aéreo es una de sus mayores fortalezas.',
  4: 'Carlos Torres es un defensor central uruguayo de gran sobriedad. Su experiencia internacional aporta jerarquía a la zaga del equipo.',
  5: 'Francisco Pérez es un lateral izquierdo de gran recorrido. Combina disciplina defensiva con llegada al ataque por su sector.',
  6: 'Felipe Castro es el motor del mediocampo. Dueño de la recuperación y distribución del equipo, con una resistencia envidiable.',
  7: 'Pablo Vega es un volante mixto de gran técnica. Su visión de juego y precisión en los pases largos son fundamentales para la transición ofensiva.',
  8: 'Luis Mora es un mediocampista creativo con gran capacidad de asociación. Su juego en espacios reducidos y su llegada desde segunda línea son sus sellos.',
  9: 'Marcelo Rojas es el goleador histórico del club y capitán del equipo. Su olfato de gol y liderazgo dentro de la cancha lo convierten en una leyenda viva.',
  10: 'Ignacio Palma es el talento joven del mediocampo. Llegó desde Argentina y rápidamente se ganó la titularidad con su técnica depurada y asistencias precisas.',
  11: 'Lucas Soto es un delantero veloz y desequilibrante. Su capacidad para desmarcarse y encarar uno contra uno lo hace impredecible para las defensas rivales.',
  12: 'Benjamín Rojas es un arquero joven con gran proyección. Ágil y seguro, ha demostrado estar a la altura cuando le ha tocado responder.',
  13: 'Rodrigo González es un defensor versátil que puede jugar tanto de central como de lateral. Su polivalencia es un recurso valioso para el cuerpo técnico.',
  14: 'Mauricio Fuentes es un marcador central argentino de gran fortaleza física. Su juego duro pero limpio lo hace difícil de superar.',
  15: 'Andrés Figueroa es un volante de contención con gran despliegue físico. Dueño de la recuperación y el equilibrio del equipo en el mediocampo.',
  16: 'Sergio Campos es un joven mediocampista con técnica exquisita. Su habilidad para el último pase y su visión periférica son destacables.',
  17: 'Javier López es un delantero centro clásico, con buen juego de espaldas y definición precisa. Peligro constante en el área rival.',
  18: 'Tomás Martínez es una joven promesa del fútbol chileno. Extremo rápido y desequilibrante con excelente regate en el uno contra uno.',
  19: 'Gabriel Álvarez es un delantero argentino de área con gran capacidad goleadora. Su olfato de gol y su potente remate lo hacen letal.',
  20: 'Sebastián Espinoza es el juvenil más prometedor del club. Extremo veloz con desborde constante y buena capacidad de asistencia.',
  21: 'Matías Valenzuela es un delantero joven con mucho futuro. Su movilidad y capacidad de asociación lo convierten en un dolor de cabeza para las defensas.',
  22: 'Cristóbal Soto es un arquero juvenil en plena formación. Con excelentes reflejos y buena técnica, es considerado el futuro del arco del club.',
}

interface PlayerModalProps {
  player: Player | null
  onClose: () => void
}

function PlayerModal({ player, onClose }: PlayerModalProps) {
  const { data: playerDetail, isLoading } = usePlayer(player?.id ?? null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (player) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [player, onClose])

  if (!player) return null

  const detail = playerDetail ?? player
  const initials = detail.nombre
    .split(' ')
    .map((p: string) => p[0])
    .join('')
    .slice(0, 2)
  const bio = playerBio[detail.id] ?? 'Jugador profesional del Club AntimonioFC.'

  return (
    <Dialog open={!!player} onOpenChange={(open) => { if (!open) onClose() }}>
      <DialogContent className="sm:max-w-md" showCloseButton>
        <div className="flex flex-col items-center gap-4 pt-2">
          {isLoading ? (
            <div className="flex flex-col items-center gap-3 py-4">
              <Skeleton width="120px" height="120px" rounded="full" />
              <Skeleton width="180px" height="20px" />
              <Skeleton width="240px" height="14px" />
            </div>
          ) : (
            <>
              {/* Foto grande */}
              <div className="size-28 overflow-hidden rounded-full bg-secondary-dark shadow-lg">
                {detail.foto ? (
                  <img
                    src={`/${detail.foto}`}
                    alt={detail.nombre}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center font-heading text-2xl font-bold text-text-secondary">
                    {initials}
                  </div>
                )}
              </div>

              {/* Nombre y posición */}
              <div className="text-center">
                <DialogTitle className="text-xl font-bold text-text">
                  {detail.nombre}
                </DialogTitle>
                <span className="inline-block mt-1 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                  {detail.posicion} • #{detail.numero}
                </span>
              </div>

              {/* Datos personales */}
              <div className="flex w-full flex-col gap-3 rounded-lg bg-secondary p-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Edad</span>
                  <span className="font-medium text-text">{detail.edad} años</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Nacionalidad</span>
                  <span className="font-medium text-text">{detail.nacionalidad}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Posición</span>
                  <span className="font-medium text-text">{detail.posicion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Número</span>
                  <span className="font-medium text-text">#{detail.numero}</span>
                </div>
              </div>

              {/* Biografía */}
              <div className="w-full text-left">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  Biografía
                </h4>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {bio}
                </p>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { PlayerModal }
