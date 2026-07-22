import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { NewsForm } from '@/components/sections/NewsForm'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import apiClient from '@/services/apiClient'
import type { NewsItem } from '@/types/news'

async function fetchNews() {
  const res = await apiClient.get<{ data: NewsItem[] }>('/noticias?limit=100')
  return res.data.data
}

async function createNews(data: Partial<NewsItem>) {
  const res = await apiClient.post('/noticias', data)
  return res.data
}

async function updateNews(id: number, data: Partial<NewsItem>) {
  const res = await apiClient.put(`/noticias/${id}`, data)
  return res.data
}

async function deleteNews(id: number) {
  const res = await apiClient.delete(`/noticias/${id}`)
  return res.data
}

export default function NewsAdminPage() {
  const queryClient = useQueryClient()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null)

  const { data: news, isLoading } = useQuery({
    queryKey: ['noticias-admin'],
    queryFn: fetchNews,
  })

  const createMutation = useMutation({
    mutationFn: (data: Partial<NewsItem>) => createNews(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['noticias-admin'] })
      setDialogOpen(false)
      setEditingNews(null)
    },
  })

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<NewsItem> }) =>
      updateNews(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['noticias-admin'] })
      setDialogOpen(false)
      setEditingNews(null)
    },
  })

  const deleteMutation = useMutation({
    mutationFn: deleteNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['noticias-admin'] })
    },
  })

  const handleCreate = () => {
    setEditingNews(null)
    setDialogOpen(true)
  }

  const handleEdit = (item: NewsItem) => {
    setEditingNews(item)
    setDialogOpen(true)
  }

  const handleDelete = (item: NewsItem) => {
    if (confirm(`¿Eliminar la noticia "${item.titulo}"?`)) {
      deleteMutation.mutate(item.id)
    }
  }

  const handleSubmit = (data: Partial<NewsItem>) => {
    if (editingNews) {
      updateMutation.mutate({ id: editingNews.id, data })
    } else {
      createMutation.mutate(data)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">Noticias</h1>
          <p className="mt-1 text-sm text-text-secondary">
            Gestión de noticias
          </p>
        </div>
        <Button onClick={handleCreate}>
          <Plus className="mr-1.5 h-4 w-4" />
          Crear Noticia
        </Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-secondary-dark bg-surface">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-secondary-dark bg-secondary/50">
              <th className="px-4 py-3 font-medium text-text-secondary">
                Titular
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Categoría
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Fuente
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Fecha
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {news?.map((item) => (
              <tr
                key={item.id}
                className="border-b border-secondary-dark transition-colors hover:bg-secondary/30"
              >
                <td className="max-w-xs truncate px-4 py-3 font-medium text-text">
                  {item.titulo}
                </td>
                <td className="px-4 py-3">
                  <Badge variant="secondary">{item.categoria}</Badge>
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  {item.fuente}
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  {new Date(item.fechaPublicacion).toLocaleDateString('es-ES')}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => handleEdit(item)}
                      title="Editar"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => handleDelete(item)}
                      title="Eliminar"
                    >
                      <Trash2 className="h-4 w-4 text-error" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            {(!news || news.length === 0) && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-text-secondary"
                >
                  No hay noticias registradas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editingNews ? 'Editar Noticia' : 'Crear Noticia'}
            </DialogTitle>
          </DialogHeader>
          <NewsForm
            newsItem={editingNews}
            onSubmit={handleSubmit}
            onCancel={() => {
              setDialogOpen(false)
              setEditingNews(null)
            }}
            isPending={createMutation.isPending || updateMutation.isPending}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
