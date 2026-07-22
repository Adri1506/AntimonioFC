import { useState, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { FormationField } from '@/components/sections/FormationField'
import { FormationSelector } from '@/components/sections/FormationSelector'
import { PlayerOnPitch } from '@/components/sections/PlayerOnPitch'
import { SubstitutesList } from '@/components/sections/SubstitutesList'
import { PlayerModal } from '@/components/sections/PlayerModal'
import { Skeleton } from '@/components/sections/Skeleton'
import { ErrorState } from '@/components/sections/ErrorState'
import { EmptyState } from '@/components/sections/EmptyState'
import { usePlayers } from '@/hooks/usePlayers'
import { formations, formacionPorDefecto } from '@/data/formations'
import type { Player } from '@/types/player'

const legendItems = [
  { label: 'POR', color: 'bg-amber-500' },
  { label: 'DEF', color: 'bg-blue-500' },
  { label: 'MED', color: 'bg-emerald-500' },
  { label: 'DEL', color: 'bg-orange-500' },
] as const

function FormationPage() {
  const location = useLocation()
  const [selectedFormacion, setSelectedFormacion] = useState(formacionPorDefecto)
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

  const { data: jugadores, isLoading, isError, error, refetch } = usePlayers()

  // Calcular titulares y suplentes según la formación activa
  const { titulares, suplentes } = useMemo(() => {
    if (!jugadores) return { titulares: [], suplentes: [] }

    const formacion = formations[selectedFormacion]
    if (!formacion) return { titulares: [], suplentes: [] }

    const numerosTitulares = new Set(formacion.posiciones.map((p) => p.numero))

    const titularesMap = new Map<number, Player>()
    const suplentesList: Player[] = []

    for (const jugador of jugadores) {
      if (numerosTitulares.has(jugador.numero)) {
        titularesMap.set(jugador.numero, jugador)
      } else {
        suplentesList.push(jugador)
      }
    }

    // Mantener el orden de las posiciones de la formación
    const titularesListados: { jugador: Player; x: number; y: number }[] = []
    for (const pos of formacion.posiciones) {
      const jugador = titularesMap.get(pos.numero)
      if (jugador) {
        titularesListados.push({ jugador, x: pos.x, y: pos.y })
      }
    }

    return { titulares: titularesListados, suplentes: suplentesList }
  }, [jugadores, selectedFormacion])

  // Loading state
  if (isLoading) {
    return (
      <Layout currentPath={location.pathname}>
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="heading-2 mb-10 text-center text-white">
              FORMACIÓN TITULAR
            </h1>
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
              <div className="w-full max-w-lg lg:w-[70%]">
                <div className="flex justify-center gap-3 mb-6">
                  <Skeleton width="100px" height="40px" rounded="lg" count={3} />
                </div>
                <div className="aspect-[100/140] w-full rounded-xl bg-secondary-dark/50" />
              </div>
              <div className="w-full lg:w-[30%] space-y-4">
                <Skeleton width="100%" height="120px" rounded="lg" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  // Error state
  if (isError) {
    return (
      <Layout currentPath={location.pathname}>
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="heading-2 mb-10 text-center text-white">
              FORMACIÓN TITULAR
            </h1>
            <ErrorState
              message={error?.message ?? 'Error al cargar la plantilla'}
              onRetry={() => refetch()}
            />
          </div>
        </section>
      </Layout>
    )
  }

  // Empty state
  if (!jugadores || jugadores.length === 0) {
    return (
      <Layout currentPath={location.pathname}>
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="heading-2 mb-10 text-center text-white">
              FORMACIÓN TITULAR
            </h1>
            <EmptyState
              title="Sin formación disponible"
              description="No hay jugadores registrados en la plantilla para mostrar la formación."
            />
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout currentPath={location.pathname}>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <h1 className="heading-2 mb-8 text-center text-white">
            FORMACIÓN TITULAR
          </h1>

          {/* Selector de formación */}
          <div className="mb-10">
            <FormationSelector
              selected={selectedFormacion}
              onChange={setSelectedFormacion}
            />
          </div>

          {/* Campo + Suplentes */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Campo de fútbol */}
            <div className="w-full max-w-lg mx-auto lg:mx-0 lg:w-[70%] lg:max-w-none">
              <div className="rounded-xl bg-secondary-dark/20 p-3 shadow-lg">
                <FormationField>
                  {titulares.map(({ jugador, x, y }) => (
                    <PlayerOnPitch
                      key={jugador.id}
                      jugador={jugador}
                      x={x}
                      y={y}
                      onClick={setSelectedPlayer}
                    />
                  ))}
                </FormationField>
              </div>
            </div>

            {/* Leyenda + Suplentes */}
            <div className="w-full lg:w-[30%] space-y-6">
              {/* Leyenda de colores */}
              <div
                className="rounded-xl p-4 shadow-md text-white"
                style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
              >
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/80">
                  Leyenda
                </h3>
                <div className="flex flex-wrap gap-3">
                  {legendItems.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span
                        className={`inline-block size-3 rounded-full ${item.color}`}
                      />
                      <span className="text-xs font-medium text-white">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suplentes */}
              <div
                className="rounded-xl p-4 shadow-md text-white"
                style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
              >
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/80">
                  Suplentes ({suplentes.length})
                </h3>
                <SubstitutesList
                  suplentes={suplentes}
                  onSelect={setSelectedPlayer}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de jugador */}
      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />
    </Layout>
  )
}

export default FormationPage
