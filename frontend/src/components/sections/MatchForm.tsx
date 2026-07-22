import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type { Match } from '@/types/match'

interface MatchFormProps {
  match: Match | null
  onSubmit: (data: any) => void
  onCancel: () => void
  isPending: boolean
}

export function MatchForm({
  match,
  onSubmit,
  onCancel,
  isPending,
}: MatchFormProps) {
  const [rival, setRival] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [estadio, setEstadio] = useState('')
  const [competicion, setCompeticion] = useState('')
  const [local, setLocal] = useState(true)
  const [precioPreferencia, setPrecioPreferencia] = useState(15)
  const [precioGeneral, setPrecioGeneral] = useState(10)
  const [precioVisita, setPrecioVisita] = useState(12)

  useEffect(() => {
    if (match) {
      setRival(match.rival)
      setFecha(match.fecha)
      setHora(match.hora)
      setEstadio(match.estadio)
      setCompeticion(match.competicion)
      setLocal(match.local)
      setPrecioPreferencia(match.precioPreferencia)
      setPrecioGeneral(match.precioGeneral)
      setPrecioVisita(match.precioVisita)
    } else {
      setRival('')
      setFecha('')
      setHora('')
      setEstadio('')
      setCompeticion('')
      setLocal(true)
      setPrecioPreferencia(15)
      setPrecioGeneral(10)
      setPrecioVisita(12)
    }
  }, [match])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      rival,
      fecha,
      hora,
      estadio,
      competicion,
      local,
      precioPreferencia,
      precioGeneral,
      precioVisita,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">Rival</label>
          <Input
            value={rival}
            onChange={(e) => setRival(e.target.value)}
            placeholder="Nombre del rival"
            required
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">Competición</label>
          <Input
            value={competicion}
            onChange={(e) => setCompeticion(e.target.value)}
            placeholder="Ej: Liga, Copa"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">Fecha</label>
          <Input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">Hora</label>
          <Input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-text">Estadio</label>
        <Input
          value={estadio}
          onChange={(e) => setEstadio(e.target.value)}
          placeholder="Nombre del estadio"
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-text">Local</label>
        <button
          type="button"
          onClick={() => setLocal(!local)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            local ? 'bg-primary' : 'bg-secondary-dark'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              local ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        <span className="text-sm text-text-secondary">
          {local ? 'Local' : 'Visita'}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">
            Precio Preferencia
          </label>
          <Input
            type="number"
            min={0}
            step={0.5}
            value={precioPreferencia}
            onChange={(e) => setPrecioPreferencia(Number(e.target.value))}
            required
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">
            Precio General
          </label>
          <Input
            type="number"
            min={0}
            step={0.5}
            value={precioGeneral}
            onChange={(e) => setPrecioGeneral(Number(e.target.value))}
            required
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-text">
            Precio Visita
          </label>
          <Input
            type="number"
            min={0}
            step={0.5}
            value={precioVisita}
            onChange={(e) => setPrecioVisita(Number(e.target.value))}
            required
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
            : match
              ? 'Guardar Cambios'
              : 'Crear Partido'}
        </Button>
      </div>
    </form>
  )
}
