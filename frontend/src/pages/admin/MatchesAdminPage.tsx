import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { MatchForm } from '@/components/sections/MatchForm'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import {
  fetchAllMatches,
  createMatch as createMatchApi,
  updateMatch as updateMatchApi,
  deleteMatch as deleteMatchApi,
} from '@/services/matchService'
import type { Match } from '@/types/match'

export default function MatchesAdminPage() {
  const queryClient = useQueryClient()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingMatch, setEditingMatch] = useState<Match | null>(null)

  const { data: matches, isLoading } = useQuery({
    queryKey: ['partidos-admin'],
    queryFn: fetchAllMatches,
  })

  const createMutation = useMutation({
    mutationFn: (data: Partial<Match>) => createMatchApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['partidos-admin'] })
      setDialogOpen(false)
      setEditingMatch(null)
    },
  })

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Match> }) =>
      updateMatchApi(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['partidos-admin'] })
      setDialogOpen(false)
      setEditingMatch(null)
    },
  })

  const deleteMutation = useMutation({
    mutationFn: deleteMatchApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['partidos-admin'] })
    },
  })

  const handleCreate = () => {
    setEditingMatch(null)
    setDialogOpen(true)
  }

  const handleEdit = (match: Match) => {
    setEditingMatch(match)
    setDialogOpen(true)
  }

  const handleDelete = (match: Match) => {
    if (confirm(`¿Eliminar el partido contra ${match.rival}?`)) {
      deleteMutation.mutate(match.id)
    }
  }

  const handleSubmit = (data: Partial<Match>) => {
    if (editingMatch) {
      updateMutation.mutate({ id: editingMatch.id, data })
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
          <h1 className="text-2xl font-bold text-text">Partidos</h1>
          <p className="mt-1 text-sm text-text-secondary">
            Gestión de partidos
          </p>
        </div>
        <Button onClick={handleCreate}>
          <Plus className="mr-1.5 h-4 w-4" />
          Crear Partido
        </Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-secondary-dark bg-surface">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-secondary-dark bg-secondary/50">
              <th className="px-4 py-3 font-medium text-text-secondary">
                Rival
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Fecha
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Competición
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Local/Visita
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {matches?.map((match) => (
              <tr
                key={match.id}
                className="border-b border-secondary-dark transition-colors hover:bg-secondary/30"
              >
                <td className="px-4 py-3 font-medium text-text">
                  {match.rival}
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  {new Date(match.fecha).toLocaleDateString('es-ES')}
                </td>
                <td className="px-4 py-3 text-text">{match.competicion}</td>
                <td className="px-4 py-3">
                  {match.local ? 'Local' : 'Visita'}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => handleEdit(match)}
                      title="Editar"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => handleDelete(match)}
                      title="Eliminar"
                    >
                      <Trash2 className="h-4 w-4 text-error" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            {(!matches || matches.length === 0) && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-text-secondary"
                >
                  No hay partidos registrados
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
              {editingMatch ? 'Editar Partido' : 'Crear Partido'}
            </DialogTitle>
          </DialogHeader>
          <MatchForm
            match={editingMatch}
            onSubmit={handleSubmit}
            onCancel={() => {
              setDialogOpen(false)
              setEditingMatch(null)
            }}
            isPending={createMutation.isPending || updateMutation.isPending}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
