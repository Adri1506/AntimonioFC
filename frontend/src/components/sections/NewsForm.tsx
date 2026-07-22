import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { NewsItem } from '@/types/news'

const CATEGORIES = ['Partidos', 'Fichajes', 'Club', 'Entrevistas']

interface NewsFormProps {
  newsItem: NewsItem | null
  onSubmit: (data: any) => void
  onCancel: () => void
  isPending: boolean
}

export function NewsForm({
  newsItem,
  onSubmit,
  onCancel,
  isPending,
}: NewsFormProps) {
  const [titulo, setTitulo] = useState('')
  const [resumen, setResumen] = useState('')
  const [contenido, setContenido] = useState('')
  const [categoria, setCategoria] = useState('Partidos')
  const [fuente, setFuente] = useState('')
  const [url, setUrl] = useState('')
  const [imagen, setImagen] = useState('')

  useEffect(() => {
    if (newsItem) {
      setTitulo(newsItem.titulo)
      setResumen(newsItem.resumen)
      setContenido(newsItem.contenido)
      setCategoria(newsItem.categoria)
      setFuente(newsItem.fuente)
      setUrl(newsItem.url ?? '')
      setImagen(newsItem.imagen ?? '')
    } else {
      setTitulo('')
      setResumen('')
      setContenido('')
      setCategoria('Partidos')
      setFuente('')
      setUrl('')
      setImagen('')
    }
  }, [newsItem])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      titulo,
      resumen,
      contenido,
      categoria,
      fuente,
      url: url || undefined,
      imagen: imagen || undefined,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-text">Titular</label>
        <Input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título de la noticia"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">Categoría</label>
          <Select value={categoria} onValueChange={(v) => setCategoria(v ?? 'Partidos')}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">Fuente</label>
          <Input
            value={fuente}
            onChange={(e) => setFuente(e.target.value)}
            placeholder="Ej: Marca, AS"
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-text">Resumen</label>
        <Input
          value={resumen}
          onChange={(e) => setResumen(e.target.value)}
          placeholder="Breve resumen"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-text">Contenido</label>
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          placeholder="Contenido completo de la noticia"
          required
          rows={5}
          className="h-24 w-full min-w-0 rounded-lg border border-secondary-dark bg-surface px-2.5 py-1.5 text-sm text-text transition-colors outline-none placeholder:text-text-secondary focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-secondary/50 disabled:opacity-50"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">URL</label>
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">
            URL de imagen
          </label>
          <Input
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending
            ? 'Guardando...'
            : newsItem
              ? 'Guardar Cambios'
              : 'Crear Noticia'}
        </Button>
      </div>
    </form>
  )
}
