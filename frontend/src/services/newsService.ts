import type { NewsItem, NewsPaginationResponse } from "@/types/news"

export async function fetchLatestNews(limit = 3): Promise<NewsItem[]> {
  const res = await fetch(`/api/noticias?limit=${limit}`)
  if (!res.ok) {
    throw new Error("Error al cargar las últimas noticias")
  }
  const json = (await res.json()) as NewsPaginationResponse
  return json.data as NewsItem[]
}

export async function fetchNewsPage(
  page: number = 1,
  limit: number = 6,
  categoria?: string
): Promise<NewsPaginationResponse> {
  const params = new URLSearchParams()
  params.set("page", String(page))
  params.set("limit", String(limit))
  if (categoria && categoria !== "Todas") {
    params.set("categoria", categoria)
  }

  const res = await fetch(`/api/noticias?${params.toString()}`)
  if (!res.ok) {
    throw new Error("Error al cargar noticias")
  }
  return res.json() as Promise<NewsPaginationResponse>
}

export async function fetchNoticiaById(
  id: number
): Promise<NewsItem> {
  const res = await fetch(`/api/noticias/${id}`)
  if (!res.ok) {
    if (res.status === 404) throw new Error("Noticia no encontrada")
    throw new Error("Error al cargar la noticia")
  }
  const json = (await res.json()) as { data: NewsItem }
  return json.data
}
