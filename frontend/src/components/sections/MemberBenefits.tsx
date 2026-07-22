import type { Membership } from '@/types/membership'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Percent, Calendar, RefreshCw } from 'lucide-react'

interface MemberBenefitsProps {
  membresia: Membership
}

export function MemberBenefits({ membresia }: MemberBenefitsProps) {
  const fechaFin = membresia.fechaFin ? new Date(membresia.fechaFin) : null
  const daysUntilExpiry = fechaFin
    ? Math.ceil((fechaFin.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : null

  const needsRenewal = daysUntilExpiry !== null && daysUntilExpiry < 30 && daysUntilExpiry > 0

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Percent className="size-5 text-accent" />
          Beneficios de Socio
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Percent className="size-5 text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Descuento en entradas</p>
            <p className="font-medium text-gray-900">
              {membresia.descuentoEntradas}% descuento en todas las entradas
            </p>
          </div>
        </div>

        {membresia.fechaFin && (
          <div className="flex items-center gap-3">
            <Calendar className="size-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Vigencia de membresía</p>
              <p className="font-medium text-gray-900">
                Hasta el{' '}
                {new Date(membresia.fechaFin).toLocaleDateString('es-CL', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        )}

        {needsRenewal && (
          <div className="flex items-center justify-between rounded-lg bg-amber-50 p-3">
            <div className="flex items-center gap-2">
              <RefreshCw className="size-5 text-amber-500" />
              <div>
                <p className="text-sm font-medium text-amber-800">
                  Tu membresía vence en {daysUntilExpiry} días
                </p>
              </div>
            </div>
            <Button size="sm" variant="outline">
              Renovar Membresía
            </Button>
          </div>
        )}

        {membresia.renovacionAutomatica && (
          <Badge variant="secondary" className="w-fit">
            Renovación automática activada
          </Badge>
        )}
      </CardContent>
    </Card>
  )
}
