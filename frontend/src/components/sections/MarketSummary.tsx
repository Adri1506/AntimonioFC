import type { TransferSummary } from '@/types/transfer'

type MarketSummaryProps = {
  summary: TransferSummary | undefined
}

function formatInversion(monto: number): string {
  if (monto >= 1_000_000) {
    return `$${(monto / 1_000_000).toFixed(1)}M`
  }
  if (monto >= 1_000) {
    return `$${(monto / 1_000).toFixed(0)}K`
  }
  return `$${monto}`
}

function MarketSummary({ summary }: MarketSummaryProps) {
  if (!summary) return null

  const totalMovimientos = summary.totalAltas + summary.totalBajas

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {/* Altas */}
      <div
        className="flex items-center gap-4 rounded-xl p-4 shadow-md ring-1 ring-white/20"
        style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
      >
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
          <span className="text-xl" role="img" aria-label="Altas">🟢</span>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">{summary.totalAltas}</p>
          <p className="text-sm text-white/80">Altas</p>
        </div>
      </div>

      {/* Bajas */}
      <div
        className="flex items-center gap-4 rounded-xl p-4 shadow-md ring-1 ring-white/20"
        style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
      >
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
          <span className="text-xl" role="img" aria-label="Bajas">🔴</span>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">{summary.totalBajas}</p>
          <p className="text-sm text-white/80">Bajas</p>
        </div>
      </div>

      {/* Inversión */}
      <div
        className="flex items-center gap-4 rounded-xl p-4 shadow-md ring-1 ring-white/20"
        style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
      >
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
          <span className="text-xl" role="img" aria-label="Inversión">💰</span>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">
            {formatInversion(summary.inversionTotal)}
          </p>
          <p className="text-sm text-white/80">Invertidos</p>
        </div>
      </div>

      {/* Total badge */}
      <p className="col-span-full text-center text-sm text-white/80">
        {totalMovimientos} fichajes • {summary.totalAltas} altas • {summary.totalBajas} bajas • {formatInversion(summary.inversionTotal)} invertidos
      </p>
    </div>
  )
}

export { MarketSummary }
