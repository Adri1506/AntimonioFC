import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { MatchCard } from '@/components/sections/MatchCard'
import { TicketModal } from '@/components/sections/TicketModal'
import { PurchaseConfirm } from '@/components/sections/PurchaseConfirm'
import { Skeleton } from '@/components/sections/Skeleton'
import { ErrorState } from '@/components/sections/ErrorState'
import { SuccessToast } from '@/components/sections/SuccessToast'
import { useMatches, usePurchaseTicket } from '@/hooks/useTickets'
import { useAuth } from '@/hooks/useAuth'
import type { Match } from '@/types/match'
import type { Sector } from '@/types/match'
import type { PurchaseResponse } from '@/types/ticket'
import { Ticket } from 'lucide-react'

export default function TicketsPage() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const { data: matches, isLoading, isError, error } = useMatches()
  const purchaseMutation = usePurchaseTicket()

  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [purchaseResult, setPurchaseResult] = useState<PurchaseResponse | null>(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })

  function handleComprar(match: Match) {
    if (!isAuthenticated) {
      navigate('/login?returnUrl=/entradas')
      return
    }
    setSelectedMatch(match)
    setShowModal(true)
  }

  function handleConfirm(data: { partidoId: number; sector: Sector; cantidad: number }) {
    purchaseMutation.mutate(
      {
        partidoId: data.partidoId,
        sector: data.sector,
        cantidad: data.cantidad,
      },
      {
        onSuccess: (result) => {
          setShowModal(false)
          setPurchaseResult(result)
          setShowConfirm(true)
          setToast({ show: true, message: '¡Compra realizada con éxito!' })
        },
        onError: () => {
          setToast({ show: true, message: 'Error al procesar la compra. Intenta nuevamente.' })
        },
      }
    )
  }

  return (
    <Layout currentPath="/entradas">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <Ticket className="size-8 text-accent" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Entradas</h1>
            <p className="text-sm text-gray-500">
              Compra tus entradas para los próximos partidos
            </p>
          </div>
        </div>

        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        )}

        {isError && (
          <ErrorState
            message={(error as Error)?.message || 'No se pudieron cargar los partidos'}
          />
        )}

        {matches && matches.length === 0 && (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <Ticket className="size-16 text-gray-300" />
            <h2 className="text-xl font-semibold text-gray-900">No hay partidos próximos</h2>
            <p className="text-gray-500">Vuelve pronto para ver los próximos partidos disponibles.</p>
          </div>
        )}

        {matches && matches.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onComprar={handleComprar}
              />
            ))}
          </div>
        )}
      </div>

      {/* Ticket Modal */}
      {selectedMatch && (
        <TicketModal
          match={selectedMatch}
          open={showModal}
          onOpenChange={setShowModal}
          onConfirm={handleConfirm}
          isPending={purchaseMutation.isPending}
        />
      )}

      {/* Purchase Confirmation */}
      {purchaseResult && (
        <PurchaseConfirm
          open={showConfirm}
          onOpenChange={setShowConfirm}
          codigoQr={purchaseResult.codigoQr}
          total={purchaseResult.total}
          sector={purchaseResult.sector}
          cantidad={purchaseResult.cantidad}
        />
      )}

      {/* Toast */}
      <SuccessToast
        message={toast.message}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </Layout>
  )
}
