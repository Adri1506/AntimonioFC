export interface NewsItem {
  id: number
  titulo: string
  resumen: string
  contenido: string
  fuente: string
  url: string | null
  imagen: string | null
  categoria: string
  fechaPublicacion: string
  createdAt: string
}

export interface NewsPaginationResponse {
  data: NewsItem[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

export const NEWS_CATEGORIES = [
  'Todas',
  'Partidos',
  'Fichajes',
  'Club',
  'Entrevistas',
] as const

export type NewsCategory = (typeof NEWS_CATEGORIES)[number]
