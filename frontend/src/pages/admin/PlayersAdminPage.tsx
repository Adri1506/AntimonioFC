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
import { PlayerForm } from '@/components/sections/PlayerForm'
import { Plus, Pencil, XCircle } from 'lucide-react'
import apiClient from '@/services/apiClient'
import type { Player } from '@/types/player'

async function fetchPlayers() {
  const res = await apiClient.get<{ data: Player[] }>('/jugadores')
  return res.data.data
}

async function createPlayer(data: Partial<Player>) {
  const res = await apiClient.post('/jugadores', data)
  return res.data
}

async function updatePlayer(id: number, data: Partial<Player>) {
  const res = await apiClient.put(`/jugadores/${id}`, data)
  return res.data
}

async function deactivatePlayer(id: number) {
  const res = await apiClient.delete(`/jugadores/${id}`)
  return res.data
}

export default function PlayersAdminPage() {
  const queryClient = useQueryClient()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null)

  const { data: players, isLoading } = useQuery({
    queryKey: ['jugadores'],
    queryFn: fetchPlayers,
  })

  const createMutation = useMutation({
    mutationFn: (data: Partial<Player>) => createPlayer(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jugadores'] })
      setDialogOpen(false)
      setEditingPlayer(null)
    },
  })

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Player> }) =>
      updatePlayer(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jugadores'] })
      setDialogOpen(false)
      setEditingPlayer(null)
    },
  })

  const deactivateMutation = useMutation({
    mutationFn: deactivatePlayer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jugadores'] })
    },
  })

  const handleEdit = (player: Player) => {
    setEditingPlayer(player)
    setDialogOpen(true)
  }

  const handleCreate = () => {
    setEditingPlayer(null)
    setDialogOpen(true)
  }

  const handleSubmit = (data: Partial<Player>) => {
    if (editingPlayer) {
      updateMutation.mutate({ id: editingPlayer.id, data })
    } else {
      createMutation.mutate(data)
    }
  }

  const handleDeactivate = (player: Player) => {
    if (confirm(`¿Desactivar a ${player.nombre}?`)) {
      deactivateMutation.mutate(player.id)
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
          <h1 className="text-2xl font-bold text-text">Jugadores</h1>
          <p className="mt-1 text-sm text-text-secondary">
            Gestión de la plantilla
          </p>
        </div>
        <Button onClick={handleCreate}>
          <Plus className="mr-1.5 h-4 w-4" />
          Crear Jugador
        </Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-secondary-dark bg-surface">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-secondary-dark bg-secondary/50">
              <th className="px-4 py-3 font-medium text-text-secondary">#</th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Nombre
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Edad
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Posición
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Nacionalidad
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Estado
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {players?.map((player) => (
              <tr
                key={player.id}
                className="border-b border-secondary-dark transition-colors hover:bg-secondary/30"
              >
                <td className="px-4 py-3 font-medium text-text">
                  {player.numero}
                </td>
                <td className="px-4 py-3 text-text">{player.nombre}</td>
                <td className="px-4 py-3 text-text">{player.edad}</td>
                <td className="px-4 py-3">
                  <Badge variant="position">{player.posicion}</Badge>
                </td>
                <td className="px-4 py-3 text-text">{player.nacionalidad}</td>
                <td className="px-4 py-3">
                  <Badge variant={player.activo ? 'default' : 'destructive'}>
                    {player.activo ? 'Activo' : 'Inactivo'}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => handleEdit(player)}
                      title="Editar"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    {player.activo && (
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => handleDeactivate(player)}
                        title="Desactivar"
                      >
                        <XCircle className="h-4 w-4 text-error" />
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {(!players || players.length === 0) && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-8 text-center text-text-secondary"
                >
                  No hay jugadores registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingPlayer ? 'Editar Jugador' : 'Crear Jugador'}
            </DialogTitle>
          </DialogHeader>
          <PlayerForm
            player={editingPlayer}
            onSubmit={handleSubmit}
            onCancel={() => {
              setDialogOpen(false)
              setEditingPlayer(null)
            }}
            isPending={updateMutation.isPending || createMutation.isPending}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
