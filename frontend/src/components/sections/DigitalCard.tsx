import type { PlanTipo } from '@/types/membership'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface DigitalCardProps {
  nombre: string
  tipo: PlanTipo
  fechaInicio: string
  usuarioId: number
}

const COLORES_POR_TIPO: Record<PlanTipo, { bg: string; border: string; badge: string }> = {
  BRONCE: {
    bg: 'from-amber-700 to-amber-900',
    border: 'border-amber-600',
    badge: 'bg-amber-500 text-white',
  },
  PLATA: {
    bg: 'from-slate-400 to-slate-600',
    border: 'border-slate-500',
    badge: 'bg-slate-500 text-white',
  },
  ORO: {
    bg: 'from-yellow-500 to-yellow-700',
    border: 'border-yellow-500',
    badge: 'bg-yellow-500 text-white',
  },
}

export function DigitalCard({ nombre, tipo, fechaInicio, usuarioId }: DigitalCardProps) {
  const colores = COLORES_POR_TIPO[tipo]
  const fecha = new Date(fechaInicio).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const qrCode = `ANTIMONIOFC-SOCIO-${usuarioId}`

  return (
    <Card className={`overflow-hidden border-2 ${colores.border}`}>
      <CardContent className="p-0">
        <div className={`bg-gradient-to-br ${colores.bg} p-6 text-white`}>
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚽</span>
              <span className="text-lg font-bold">AntimonioFC</span>
            </div>
            <Badge className={colores.badge}>Socio {tipo}</Badge>
          </div>

          {/* Info */}
          <div className="mb-4 space-y-1">
            <p className="text-lg font-semibold">{nombre}</p>
            <p className="text-sm opacity-80">Desde: {fecha}</p>
          </div>

          {/* Simulated QR */}
          <div className="flex items-center justify-center">
            <div className="rounded-lg bg-white p-3">
              <div className="flex flex-col items-center gap-1">
                <div className="grid grid-cols-5 gap-0.5">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={`size-2 rounded-sm ${
                        Math.random() > 0.5 ? 'bg-gray-900' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[8px] font-mono text-gray-500">{qrCode}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
