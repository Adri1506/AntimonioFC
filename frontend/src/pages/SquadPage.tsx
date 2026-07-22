import { useState, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { PlayerCard } from '@/components/sections/PlayerCard'
import { PlayerModal } from '@/components/sections/PlayerModal'
import { PositionFilter } from '@/components/sections/PositionFilter'
import { StaffSection } from '@/components/sections/StaffSection'
import { Skeleton } from '@/components/sections/Skeleton'
import { ErrorState } from '@/components/sections/ErrorState'
import { EmptyState } from '@/components/sections/EmptyState'
import { usePlayers } from '@/hooks/usePlayers'
import type { Player } from '@/types/player'

function SquadPage() {
  const location = useLocation()
  const [selectedPosicion, setSelectedPosicion] = useState<string | undefined>(undefined)
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

  // Always fetch full list for counts; filtered list for display
  const { data: allPlayers } = usePlayers()
  const { data: jugadores, isLoading, isError, error, refetch } = usePlayers(selectedPosicion)

  // Counts for filter badges — computed from total, not filtered
  const positionCounts = useMemo(() => {
    const all = allPlayers ?? []
    const counts: Record<string, number> = { POR: 0, DEF: 0, MED: 0, DEL: 0 }
    for (const p of all) {
      if (counts[p.posicion] !== undefined) counts[p.posicion]++
    }
    return counts
  }, [allPlayers])

  // Skeleton grid for loading state
  if (isLoading) {
    return (
      <Layout currentPath={location.pathname}>
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="heading-2 mb-10 text-center text-white">
              PLANTILLA 2026
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 rounded-xl p-6 shadow-md"
                  style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
                >
                  <Skeleton width="80px" height="80px" rounded="full" />
                  <Skeleton width="60%" height="14px" />
                  <Skeleton width="40%" height="20px" rounded="full" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout currentPath={location.pathname}>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="heading-2 mb-8 text-center text-white">
            PLANTILLA 2026
          </h1>

          {/* Filter */}
          <div className="mb-10 flex justify-center">
            <PositionFilter
              selected={selectedPosicion}
              onChange={setSelectedPosicion}
              counts={positionCounts}
            />
          </div>

          {/* Error state */}
          {isError && (
            <ErrorState
              message={error?.message ?? 'Error al cargar la plantilla'}
              onRetry={() => refetch()}
            />
          )}

          {/* Empty state */}
          {!isLoading && !isError && (!jugadores || jugadores.length === 0) && (
            <EmptyState
              title="No hay jugadores en esta categoría"
              description="No se encontraron jugadores con la posición seleccionada."
            />
          )}

          {/* Player grid */}
          {!isLoading && !isError && jugadores && jugadores.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jugadores.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onSelect={setSelectedPlayer}
                />
              ))}
            </div>
          )}

          {/* Staff Section */}
          <StaffSection />
        </div>
      </section>

      {/* Player Modal */}
      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />
    </Layout>
  )
}

export default SquadPage
