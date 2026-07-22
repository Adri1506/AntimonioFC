import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '@/hooks/useAuth'
import type { PlanInfo } from '@/types/membership'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Loader2 } from 'lucide-react'

const afiliarFormSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefono: z
    .string()
    .min(8, 'El teléfono debe tener al menos 8 dígitos')
    .max(15, 'Teléfono demasiado largo')
    .regex(/^[+]?[\d\s()-]+$/, 'Formato de teléfono inválido')
    .optional()
    .or(z.literal('')),
})

type AfiliarFormValues = z.infer<typeof afiliarFormSchema>

interface MembershipFormProps {
  plan: PlanInfo
  onSubmit: (data: AfiliarFormValues) => void
  isPending: boolean
}

export function MembershipForm({ plan, onSubmit, isPending }: MembershipFormProps) {
  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AfiliarFormValues>({
    resolver: zodResolver(afiliarFormSchema),
    defaultValues: {
      nombre: user?.nombre ?? '',
      email: user?.email ?? '',
      telefono: '',
    },
  })

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Confirma tu afiliación</CardTitle>
            <CardDescription>
              Completa tus datos para asociarte al club
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-base">
            Plan {plan.nombre}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <Input
              id="nombre"
              placeholder="Tu nombre"
              {...register('nombre')}
            />
            {errors.nombre && (
              <p className="text-sm text-red-500">{errors.nombre.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              placeholder="tu@email.com"
              type="email"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="telefono" className="text-sm font-medium text-gray-700">
              Teléfono (opcional)
            </label>
            <Input
              id="telefono"
              placeholder="+56 9 1234 5678"
              {...register('telefono')}
            />
            {errors.telefono && (
              <p className="text-sm text-red-500">{errors.telefono.message}</p>
            )}
          </div>

          <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
            <p className="font-medium">Resumen del plan</p>
            <p>Plan {plan.nombre} — ${plan.precio}/mes</p>
            <p>{plan.descuento}% descuento en entradas</p>
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Procesando...
              </>
            ) : (
              'Confirmar Afiliación'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export type { AfiliarFormValues }
