import { useQuery } from "@tanstack/react-query"
import {
  fetchLatestNews,
  fetchNewsPage,
  fetchNoticiaById,
} from "@/services/newsService"
import type { NewsCategory } from "@/types/news"

export function useNews(limit = 3) {
  return useQuery({
    queryKey: ["latest-news", limit],
    queryFn: () => fetchLatestNews(limit),
  })
}

export function useNewsPage(
  page: number,
  limit: number = 6,
  categoria?: NewsCategory
) {
  return useQuery({
    queryKey: ["news-page", page, limit, categoria],
    queryFn: () => fetchNewsPage(page, limit, categoria),
    placeholderData: (prev) => prev,
  })
}

export function useNoticia(id: number) {
  return useQuery({
    queryKey: ["noticia", id],
    queryFn: () => fetchNoticiaById(id),
    enabled: !!id && id > 0,
  })
}
