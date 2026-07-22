import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { MembershipPlans } from '@/components/sections/MembershipPlans'
import { MembershipForm } from '@/components/sections/MembershipForm'
import { DigitalCard } from '@/components/sections/DigitalCard'
import { useAuth } from '@/hooks/useAuth'
import { useMiMembresia, useAfiliarSocio } from '@/hooks/useMembership'
import type { PlanInfo, AfiliarResponse } from '@/types/membership'
import { Heart, ArrowLeft, CheckCircle } from 'lucide-react'

type Step = 'plans' | 'form' | 'success'

export default function MembershipPage() {
  const { isAuthenticated, user } = useAuth()
  const navigate = useNavigate()

  const { data: membresia, isLoading: loadingMembresia } = useMiMembresia()
  const afiliarMutation = useAfiliarSocio()

  const [step, setStep] = useState<Step>('plans')
  const [selectedPlan, setSelectedPlan] = useState<PlanInfo | null>(null)
  const [result, setResult] = useState<AfiliarResponse | null>(null)

  function handleSelectPlan(plan: PlanInfo) {
    setSelectedPlan(plan)
    setStep('form')
  }

  function handleLoginRedirect() {
    navigate('/login?returnUrl=/socios')
  }

  function handleFormSubmit(_formData: { nombre: string; email: string; telefono?: string }) {
    if (!selectedPlan) return

    afiliarMutation.mutate(
      { tipo: selectedPlan.tipo },
      {
        onSuccess: (res) => {
          setResult(res)
          setStep('success')
        },
        onError: () => {
          // Error handled by mutation
        },
      }
    )
  }

  function handleBackToPlans() {
    setStep('plans')
    setSelectedPlan(null)
  }

  // If user already has active membership, show their card
  if (!loadingMembresia && membresia) {
    return (
      <Layout currentPath="/socios">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Heart className="size-8 text-accent" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Mi Membresía</h1>
              <p className="text-sm text-gray-500">
                Ya eres parte de la familia AntimonioFC
              </p>
            </div>
          </div>

          <DigitalCard
            nombre={user?.nombre ?? ''}
            tipo={membresia.tipo}
            fechaInicio={membresia.fechaInicio}
            usuarioId={user?.id ?? 0}
          />
        </div>
      </Layout>
    )
  }

  return (
    <Layout currentPath="/socios">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <Heart className="size-8 text-accent" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hazte Socio</h1>
            <p className="text-sm text-gray-500">
              Elige el plan que más se adapte a ti y disfruta de beneficios exclusivos
            </p>
          </div>
        </div>

        {/* Step: Plans */}
        {step === 'plans' && (
          <MembershipPlans
            onSelectPlan={handleSelectPlan}
            isAuthenticated={isAuthenticated}
            onLoginRedirect={handleLoginRedirect}
          />
        )}

        {/* Step: Form */}
        {step === 'form' && selectedPlan && (
          <div className="space-y-6">
            <button
              onClick={handleBackToPlans}
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft className="size-4" />
              Volver a planes
            </button>
            <MembershipForm
              plan={selectedPlan}
              onSubmit={handleFormSubmit}
              isPending={afiliarMutation.isPending}
            />
          </div>
        )}

        {/* Step: Success */}
        {step === 'success' && result && (
          <div className="mx-auto max-w-lg space-y-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <CheckCircle className="size-16 text-green-500" />
              <h2 className="text-xl font-bold text-gray-900">
                ¡Bienvenido a la familia AntimonioFC!
              </h2>
              <p className="text-gray-500">
                Tu membresía ha sido activada exitosamente.
              </p>
            </div>

            <DigitalCard
              nombre={user?.nombre ?? ''}
              tipo={result.tipo}
              fechaInicio={result.fechaInicio}
              usuarioId={user?.id ?? 0}
            />
          </div>
        )}

        {/* Loading state */}
        {loadingMembresia && (
          <div className="flex items-center justify-center py-16">
            <div className="size-8 animate-spin rounded-full border-4 border-gray-200 border-t-accent" />
          </div>
        )}
      </div>
    </Layout>
  )
}
