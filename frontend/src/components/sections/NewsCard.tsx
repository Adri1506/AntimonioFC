import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import type { NewsItem } from "@/types/news"

interface NewsCardProps {
  newsItem: NewsItem
}

function timeAgo(dateStr: string): string {
  const now = Date.now()
  const date = new Date(dateStr).getTime()
  const diffMs = now - date
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffHours / 24)

  if (diffHours < 1) return "hace unos minutos"
  if (diffHours < 24) return `hace ${diffHours} hora${diffHours !== 1 ? "s" : ""}`
  if (diffDays === 1) return "hace 1 día"
  if (diffDays < 30) return `hace ${diffDays} días`
  const diffMonths = Math.floor(diffDays / 30)
  return `hace ${diffMonths} mes${diffMonths !== 1 ? "es" : ""}`
}

function NewsCard({ newsItem }: NewsCardProps) {
  return (
    <Link to={`/noticias/${newsItem.id}`} className="block group">
      <Card
        className="h-full overflow-hidden text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
        style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
      >
        {/* Imagen 16:9 */}
        <div className="relative aspect-video w-full overflow-hidden bg-secondary-dark">
          {newsItem.imagen ? (
            <img
              src={newsItem.imagen}
              alt={newsItem.titulo}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-4xl">📰</span>
            </div>
          )}
        </div>

        <CardContent className="flex flex-col gap-2 pt-4">
          {/* Categoría */}
          <span className="inline-block w-fit rounded-full bg-white/20 px-3 py-0.5 text-xs font-medium text-white uppercase tracking-wider">
            {newsItem.categoria}
          </span>

          {/* Titular */}
          <h3 className="font-heading text-base font-semibold text-white line-clamp-2 group-hover:text-white/80 transition-colors">
            {newsItem.titulo}
          </h3>

          {/* Resumen */}
          <p className="text-sm text-white/80 line-clamp-2">
            {newsItem.resumen}
          </p>

          {/* Fuente y fecha */}
          <div className="mt-auto flex items-center justify-between pt-2 text-xs text-white/70">
            <span>
              Extraído de{" "}
              <span className="font-medium text-white">{newsItem.fuente}</span>
            </span>
            <span>{timeAgo(newsItem.fechaPublicacion)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export { NewsCard }
