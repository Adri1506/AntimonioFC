import { useParams, useLocation, Link } from "react-router-dom"
import { ArrowLeft, ExternalLink, Calendar, Newspaper } from "lucide-react"
import { Layout } from "@/components/layout"
import { NewsCard } from "@/components/sections/NewsCard"
import { Skeleton } from "@/components/sections/Skeleton"
import { ErrorState } from "@/components/sections/ErrorState"
import { Button } from "@/components/ui/button"
import { useNoticia, useNewsPage } from "@/hooks/useNews"

function NewsDetailSkeleton() {
  return (
    <div className="mx-auto max-w-4xl">
      <Skeleton width="200px" height="16px" rounded="md" />
      <div className="mt-6">
        <Skeleton width="100%" height="400px" rounded="xl" />
      </div>
      <div className="mt-6 space-y-3">
        <Skeleton width="60%" height="32px" />
        <div className="flex gap-4">
          <Skeleton width="120px" height="14px" />
          <Skeleton width="160px" height="14px" />
        </div>
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} width="100%" height="18px" />
        ))}
      </div>
    </div>
  )
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function NewsDetailPage() {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const noticiaId = parseInt(id ?? "0", 10)

  const {
    data: noticia,
    isLoading,
    isError,
    error,
    refetch,
  } = useNoticia(noticiaId)

  const { data: relatedPage } = useNewsPage(1, 4)

  const relatedNews = relatedPage?.data.filter((n) => n.id !== noticiaId).slice(0, 3) ?? []

  if (isLoading) {
    return (
      <Layout currentPath={location.pathname}>
        <section className="py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <NewsDetailSkeleton />
          </div>
        </section>
      </Layout>
    )
  }

  if (isError) {
    return (
      <Layout currentPath={location.pathname}>
        <section className="py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ErrorState
              message={
                error?.message === "Noticia no encontrada"
                  ? "La noticia que buscas no existe o ha sido eliminada."
                  : (error?.message ?? "Error al cargar la noticia")
              }
              onRetry={() => refetch()}
            />
            <div className="mt-6 text-center">
              <Link to="/noticias">
                <Button variant="outline">
                  <ArrowLeft className="size-4" />
                  Volver a noticias
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  if (!noticia) {
    return (
      <Layout currentPath={location.pathname}>
        <section className="py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ErrorState
              message="La noticia que buscas no existe."
              onRetry={() => refetch()}
            />
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout currentPath={location.pathname}>
      <article>
        {/* Breadcrumb */}
        <section className="bg-gradient-hero py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-white/60">
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/noticias"
                className="transition-colors hover:text-white"
              >
                Noticias
              </Link>
              <span>/</span>
              <span className="max-w-[300px] truncate text-white/80 sm:max-w-md">
                {noticia.titulo}
              </span>
            </nav>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Imagen destacada */}
            <div className="mb-8 overflow-hidden rounded-xl bg-secondary-dark">
              {noticia.imagen ? (
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex aspect-video w-full items-center justify-center">
                  <Newspaper className="size-20 text-text-secondary/40" />
                </div>
              )}
            </div>

            {/* Categoría badge */}
            <span className="mb-4 inline-block w-fit rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent uppercase tracking-wider">
              {noticia.categoria}
            </span>

            {/* Titular */}
            <h1 className="heading-3 mb-4 text-text sm:heading-2">
              {noticia.titulo}
            </h1>

            {/* Fecha y fuente */}
            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                {formatDate(noticia.fechaPublicacion)}
              </span>
              <span className="rounded-md bg-secondary-dark px-3 py-1 text-xs font-medium">
                Extraído de{" "}
                <span className="text-primary">{noticia.fuente}</span>
              </span>
            </div>

            {/* Contenido */}
            <div className="prose prose-text max-w-none">
              {noticia.contenido.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-4 leading-relaxed text-text-secondary"
                  style={{ maxWidth: "75ch" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Botón fuente original */}
            {noticia.url && (
              <div className="mt-8 border-t border-secondary-dark pt-6">
                <a
                  href={noticia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="accent">
                    <ExternalLink className="size-4" />
                    Ver fuente original
                  </Button>
                </a>
              </div>
            )}

            {/* Volver */}
            <div className="mt-6">
              <Link to="/noticias">
                <Button variant="outline">
                  <ArrowLeft className="size-4" />
                  Volver a noticias
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Noticias Relacionadas */}
        {relatedNews.length > 0 && (
          <section className="bg-secondary py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="heading-4 mb-8 text-center text-primary">
                NOTICIAS RELACIONADAS
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedNews.map((item) => (
                  <NewsCard key={item.id} newsItem={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </Layout>
  )
}

export default NewsDetailPage
