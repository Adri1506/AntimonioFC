import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Newspaper } from "lucide-react"
import { Layout } from "@/components/layout"
import { NewsCard } from "@/components/sections/NewsCard"
import { NewsFilter } from "@/components/sections/NewsFilter"
import { NewsPagination } from "@/components/sections/NewsPagination"
import { Skeleton } from "@/components/sections/Skeleton"
import { ErrorState } from "@/components/sections/ErrorState"
import { EmptyState } from "@/components/sections/EmptyState"
import { useNewsPage } from "@/hooks/useNews"
import type { NewsCategory } from "@/types/news"

const PAGE_SIZE = 6

function NewsPageSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: PAGE_SIZE }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-3 rounded-xl p-4 shadow-md"
          style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
        >
          <Skeleton width="100%" height="180px" rounded="lg" />
          <Skeleton width="40%" height="14px" />
          <Skeleton width="90%" height="18px" />
          <Skeleton width="100%" height="14px" />
          <Skeleton width="80%" height="14px" />
          <div className="flex justify-between">
            <Skeleton width="40%" height="12px" />
            <Skeleton width="25%" height="12px" />
          </div>
        </div>
      ))}
    </div>
  )
}

function NewsPage() {
  const location = useLocation()
  const [categoria, setCategoria] = useState<NewsCategory>("Todas")
  const [page, setPage] = useState(1)

  const { data, isLoading, isError, error, refetch } = useNewsPage(
    page,
    PAGE_SIZE,
    categoria
  )

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 0

  const handleCategoryChange = (category: NewsCategory) => {
    setCategoria(category)
    setPage(1)
  }

  return (
    <Layout currentPath={location.pathname}>
      {/* Hero small */}
      <section className="py-12" style={{ background: 'linear-gradient(135deg, #000052 0%, #000080 100%)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="heading-2 text-white">NOTICIAS</h1>
          <p className="mt-2 text-base text-white/70">
            Mantente al tanto de las últimas novedades del club
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filtros */}
          <div className="mb-8">
            <NewsFilter selected={categoria} onChange={handleCategoryChange} />
          </div>

          {/* Loading */}
          {isLoading && <NewsPageSkeleton />}

          {/* Error */}
          {isError && (
            <ErrorState
              message={error?.message ?? "No pudimos cargar las noticias"}
              onRetry={() => refetch()}
            />
          )}

          {/* Empty */}
          {!isLoading &&
            !isError &&
            data &&
            data.data.length === 0 && (
              <EmptyState
                icon={Newspaper}
                title="No hay noticias disponibles"
                description={
                  categoria !== "Todas"
                    ? `No encontramos noticias en la categoría "${categoria}".`
                    : "Próximamente publicaremos las últimas novedades del club."
                }
              />
            )}

          {/* Grid */}
          {!isLoading && !isError && data && data.data.length > 0 && (
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.data.map((item) => (
                  <NewsCard key={item.id} newsItem={item} />
                ))}
              </div>

              <NewsPagination
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default NewsPage
