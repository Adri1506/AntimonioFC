import { useNavigate } from "react-router-dom"
import { Skeleton } from "@/components/sections/Skeleton"
import { ErrorState } from "@/components/sections/ErrorState"
import { EmptyState } from "@/components/sections/EmptyState"
import { MatchCard } from "@/components/sections/MatchCard"
import { Calendar } from "lucide-react"
import { useMatches } from "@/hooks/useMatches"

function UpcomingMatches() {
  const navigate = useNavigate()
  const { data: matches, isLoading, isError, error, refetch } = useMatches()

  function handleComprar() {
    navigate('/entradas')
  }

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-3 mb-8 text-center text-white">
            📅 PRÓXIMOS PARTIDOS
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-xl p-6 shadow-md"
                style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
              >
                <Skeleton className="mx-auto" width="56px" height="56px" rounded="full" />
                <Skeleton width="80%" height="20px" className="mx-auto" />
                <Skeleton width="60%" height="14px" className="mx-auto" />
                <Skeleton width="70%" height="16px" className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-3 mb-8 text-center text-white">
            📅 PRÓXIMOS PARTIDOS
          </h2>
          <ErrorState
            message={error?.message ?? "No pudimos cargar los partidos"}
            onRetry={() => refetch()}
          />
        </div>
      </section>
    )
  }

  if (!matches || matches.length === 0) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-3 mb-8 text-center text-white">
            📅 PRÓXIMOS PARTIDOS
          </h2>
          <EmptyState
            icon={Calendar}
            title="Próximamente más partidos"
            description="No hay partidos programados por el momento. Vuelve pronto para ver las novedades."
          />
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="heading-3 mb-8 text-center text-white">
          📅 PRÓXIMOS PARTIDOS
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {matches.slice(0, 4).map((match) => (
            <MatchCard key={match.id} match={match} onComprar={handleComprar} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { UpcomingMatches }
