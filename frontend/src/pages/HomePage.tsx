import { useLocation } from "react-router-dom"
import { Layout } from "@/components/layout"
import { HeroSection } from "@/components/sections/HeroSection"
import { UpcomingMatches } from "@/components/sections/UpcomingMatches"
import { ClubStats } from "@/components/sections/ClubStats"
import { StadiumSection } from "@/components/sections/StadiumSection"
import { Skeleton } from "@/components/sections/Skeleton"
import { useNews } from "@/hooks/useNews"
import { ErrorState } from "@/components/sections/ErrorState"
import { EmptyState } from "@/components/sections/EmptyState"
import { NewsCard } from "@/components/sections/NewsCard"
import { Newspaper } from "lucide-react"

function HomePage() {
  const location = useLocation()
  const { data: news, isLoading, isError, error, refetch } = useNews()

  return (
    <Layout currentPath={location.pathname}>
      {/* Hero Section */}
      <HeroSection />

      {/* Próximos Partidos */}
      <UpcomingMatches />

      {/* Últimas Noticias */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-3 mb-8 text-center text-white">
            📰 ÚLTIMAS NOTICIAS
          </h2>

          {isLoading && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-3 rounded-xl p-4 shadow-md" style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}>
                  <Skeleton width="100%" height="160px" rounded="lg" />
                  <Skeleton width="60%" height="14px" />
                  <Skeleton width="90%" height="18px" />
                  <Skeleton width="100%" height="14px" />
                  <div className="flex justify-between">
                    <Skeleton width="40%" height="12px" />
                    <Skeleton width="25%" height="12px" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {isError && (
            <ErrorState
              message={error?.message ?? "No pudimos cargar las noticias"}
              onRetry={() => refetch()}
            />
          )}

          {!isLoading && !isError && (!news || news.length === 0) && (
            <EmptyState
              icon={Newspaper}
              title="No hay noticias disponibles"
              description="Próximamente publicaremos las últimas novedades del club."
            />
          )}

          {!isLoading && !isError && news && news.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {news.slice(0, 3).map((item) => (
                <NewsCard key={item.id} newsItem={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Nuestro Estadio */}
      <StadiumSection />

      {/* Club en Números */}
      <ClubStats />
    </Layout>
  )
}

export default HomePage
