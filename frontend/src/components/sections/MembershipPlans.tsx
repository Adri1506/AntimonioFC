import { PLANES, type PlanInfo } from '@/types/membership'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Star } from 'lucide-react'

interface MembershipPlansProps {
  onSelectPlan: (plan: PlanInfo) => void
  isAuthenticated: boolean
  onLoginRedirect: () => void
}

export function MembershipPlans({ onSelectPlan, isAuthenticated, onLoginRedirect }: MembershipPlansProps) {
  function handleClick(plan: PlanInfo) {
    if (!isAuthenticated) {
      onLoginRedirect()
      return
    }
    onSelectPlan(plan)
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PLANES.map((plan) => (
        <Card
          key={plan.tipo}
          className={`relative flex flex-col transition-shadow hover:shadow-lg ${
            plan.destacado
              ? 'border-accent ring-2 ring-accent/20'
              : 'border-gray-200'
          }`}
        >
          {plan.destacado && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-sm">
                <Star className="size-3.5" />
                Recomendado
              </span>
            </div>
          )}

          <CardHeader className={`text-center ${plan.destacado ? 'pt-8' : ''}`}>
            <CardTitle className="text-xl font-bold text-gray-900">
              {plan.nombre}
            </CardTitle>
            <CardDescription className="mt-2">
              <span className="text-3xl font-bold text-gray-900">${plan.precio}</span>
              <span className="text-gray-500">/mes</span>
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1">
            <ul className="space-y-3">
              {plan.beneficios.map((beneficio) => (
                <li key={beneficio} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                  <span className="text-sm text-gray-600">{beneficio}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter>
            <Button
              className="w-full"
              variant={plan.destacado ? 'default' : 'outline'}
              onClick={() => handleClick(plan)}
            >
              Afiliarse
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
