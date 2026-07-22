import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Copy } from 'lucide-react'
import { useState } from 'react'

interface PurchaseConfirmProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  codigoQr: string
  total: number
  sector: string
  cantidad: number
}

function formatCurrency(value: number): string {
  return `$${value.toFixed(2)}`
}

export function PurchaseConfirm({
  open,
  onOpenChange,
  codigoQr,
  total,
  sector,
  cantidad,
}: PurchaseConfirmProps) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(codigoQr)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-success">
            <CheckCircle2 className="size-6" />
            Compra Exitosa
          </DialogTitle>
          <DialogDescription>
            Tus entradas han sido confirmadas. Presenta el código QR en el estadio.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* QR Code (simulado) */}
          <div className="flex flex-col items-center gap-3 rounded-lg border-2 border-dashed border-secondary-dark bg-secondary p-6">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex size-32 items-center justify-center">
                <div className="text-center">
                  <div className="mb-1 text-3xl">🎟️</div>
                  <div className="text-[8px] font-mono leading-tight text-gray-400 break-all max-w-[120px]">
                    {codigoQr}
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-primary hover:underline"
            >
              <Copy className="size-3.5" />
              {copied ? '¡Copiado!' : 'Copiar código'}
            </button>
          </div>

          {/* Detalles */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">Sector</span>
              <span className="font-medium">{sector}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Cantidad</span>
              <span className="font-medium">{cantidad}</span>
            </div>
            <div className="flex justify-between border-t border-secondary-dark pt-2">
              <span className="font-semibold">Total pagado</span>
              <span className="font-bold text-accent">{formatCurrency(total)}</span>
            </div>
          </div>
        </div>

        <DialogFooter showCloseButton>
          <Button variant="default" onClick={() => onOpenChange(false)}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
