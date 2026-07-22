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
import type { Player } from '@/types/player'

const POSITIONS = [
  { value: 'POR', label: 'Portero' },
  { value: 'DEF', label: 'Defensa' },
  { value: 'MED', label: 'Mediocampista' },
  { value: 'DEL', label: 'Delantero' },
]

interface PlayerFormProps {
  player: Player | null
  onSubmit: (data: Partial<Player>) => void
  onCancel: () => void
  isPending: boolean
}

export function PlayerForm({
  player,
  onSubmit,
  onCancel,
  isPending,
}: PlayerFormProps) {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState<number>(18)
  const [posicion, setPosicion] = useState('POR')
  const [numero, setNumero] = useState<number>(1)
  const [nacionalidad, setNacionalidad] = useState('')

  useEffect(() => {
    if (player) {
      setNombre(player.nombre)
      setEdad(player.edad)
      setPosicion(player.posicion)
      setNumero(player.numero)
      setNacionalidad(player.nacionalidad)
    } else {
      setNombre('')
      setEdad(18)
      setPosicion('POR')
      setNumero(1)
      setNacionalidad('')
    }
  }, [player])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      nombre,
      edad,
      posicion: posicion as Player['posicion'],
      numero,
      nacionalidad,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-text">Nombre</label>
        <Input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del jugador"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">Edad</label>
          <Input
            type="number"
            min={15}
            max={50}
            value={edad}
            onChange={(e) => setEdad(Number(e.target.value))}
            required
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">Número</label>
          <Input
            type="number"
            min={1}
            max={99}
            value={numero}
            onChange={(e) => setNumero(Number(e.target.value))}
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-text">Posición</label>
        <Select value={posicion} onValueChange={(v) => setPosicion(v ?? 'POR')}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {POSITIONS.map((pos) => (
              <SelectItem key={pos.value} value={pos.value}>
                {pos.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-text">Nacionalidad</label>
        <Input
          value={nacionalidad}
          onChange={(e) => setNacionalidad(e.target.value)}
          placeholder="Ej: Argentina"
          required
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending
            ? 'Guardando...'
            : player
              ? 'Guardar Cambios'
              : 'Crear Jugador'}
        </Button>
      </div>
    </form>
  )
}
