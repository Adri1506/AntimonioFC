import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type { Match, Sector } from '@/types/match'
import { Loader2 } from 'lucide-react'

interface TicketModalProps {
  match: Match
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: (data: { partidoId: number; sector: Sector; cantidad: number }) => void
  isPending: boolean
}

const SECTORES: { sector: Sector; label: string }[] = [
  { sector: 'Preferencia', label: 'Preferencia' },
  { sector: 'General', label: 'General' },
  { sector: 'Visita', label: 'Visita' },
]

function formatCurrency(value: number): string {
  return `$${value.toFixed(2)}`
}

export function TicketModal({ match, open, onOpenChange, onConfirm, isPending }: TicketModalProps) {
  const [selectedSector, setSelectedSector] = useState<Sector>('General')
  const [cantidad, setCantidad] = useState(1)

  const precioMap: Record<Sector, number> = {
    Preferencia: match.precioPreferencia,
    General: match.precioGeneral,
    Visita: match.precioVisita,
  }

  const precioUnitario = precioMap[selectedSector]
  const subtotal = precioUnitario * cantidad

  function handleConfirm() {
    onConfirm({
      partidoId: match.id,
      sector: selectedSector,
      cantidad,
    })
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      setSelectedSector('General')
      setCantidad(1)
    }
    onOpenChange(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Comprar Entradas</DialogTitle>
          <DialogDescription>
            {match.rival} — {match.estadio}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Sector selector */}
          <div>
            <label className="mb-2 block text-sm font-medium">Sector</label>
            <div className="space-y-2">
              {SECTORES.map(({ sector, label }) => (
                <label
                  key={sector}
                  className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-colors ${
                    selectedSector === sector
                      ? 'border-accent bg-accent/5 ring-1 ring-accent'
                      : 'border-secondary-dark hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="sector"
                      value={sector}
                      checked={selectedSector === sector}
                      onChange={() => setSelectedSector(sector)}
                      className="size-4 accent-accent"
                    />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                  <span className="text-sm font-semibold text-primary">
                    {formatCurrency(precioMap[sector])}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Quantity selector */}
          <div>
            <label htmlFor="cantidad" className="mb-2 block text-sm font-medium">
              Cantidad
            </label>
            <Input
              id="cantidad"
              type="number"
              min={1}
              max={10}
              value={cantidad}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10)
                if (val >= 1 && val <= 10) setCantidad(val)
              }}
              className="w-24"
            />
          </div>

          {/* Total */}
          <div className="rounded-lg bg-secondary p-4">
            <div className="flex justify-between text-sm text-text-secondary">
              <span>
                {formatCurrency(precioUnitario)} x {cantidad}
              </span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-secondary-dark pt-2 text-base font-bold">
              <span>Total</span>
              <span className="text-accent">{formatCurrency(subtotal)}</span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => handleOpenChange(false)}>
            Cancelar
          </Button>
          <Button
            variant="accent"
            onClick={handleConfirm}
            disabled={isPending}
          >
            {isPending && <Loader2 className="mr-2 size-4 animate-spin" />}
            {isPending ? 'Procesando...' : 'Confirmar Compra'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
