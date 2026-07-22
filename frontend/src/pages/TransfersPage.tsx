import { useState } from 'react'
import { useFichajes, useResumen } from '@/hooks/useTransfers'
import { Layout } from '@/components/layout'
import { TransferTimeline } from '@/components/sections/TransferTimeline'
import { TransferFilter } from '@/components/sections/TransferFilter'
import { MarketSummary } from '@/components/sections/MarketSummary'
import { ErrorState } from '@/components/sections/ErrorState'
import { EmptyState } from '@/components/sections/EmptyState'
import { ArrowLeftRight } from 'lucide-react'

function TransfersPage() {
  const [filter, setFilter] = useState('')
  const { data: fichajes, isLoading, isError, error, refetch } = useFichajes(filter || undefined)
  const { data: resumen } = useResumen()

  const handleFilterChange = (tipo: string) => {
    setFilter(tipo)
  }

  return (
    <Layout currentPath="/fichajes">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="heading-3 text-white">Fichajes</h1>
          <p className="mt-1 text-white/70">
            Altas y bajas de la temporada
          </p>
        </div>

        {/* Market Summary */}
        <section className="mb-8">
          <MarketSummary summary={resumen} />
        </section>

        {/* Filter */}
        <section className="mb-8">
          <TransferFilter active={filter} onChange={handleFilterChange} />
        </section>

        {/* Timeline */}
        <section>
          {isError ? (
            <ErrorState
              message={(error as Error)?.message ?? 'Error al cargar fichajes'}
              onRetry={() => refetch()}
            />
          ) : !isLoading && fichajes && fichajes.length === 0 ? (
            <EmptyState
              icon={ArrowLeftRight}
              title="Sin movimientos"
              description="No hay movimientos en este mercado"
            />
          ) : (
            <TransferTimeline
              transfers={fichajes ?? []}
              isLoading={isLoading}
            />
          )}
        </section>
      </div>
    </Layout>
  )
}

export default TransfersPage
