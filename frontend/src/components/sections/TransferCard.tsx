import type { Transfer } from '@/types/transfer'
import { cn } from '@/lib/utils'

type TransferCardProps = {
  transfer: Transfer
}

function formatMonto(monto: number | null): string | null {
  if (monto === null || monto === undefined) return null
  const millones = monto / 1_000_000
  return `$${millones.toFixed(1)}M`
}

function formatFecha(fechaStr: string): string {
  const fecha = new Date(fechaStr)
  return fecha.toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

const OPERACION_LABELS: Record<string, string> = {
  TRASPASO: 'Traspaso',
  CESION: 'Cesión',
  FIN_CONTRATO: 'Fin de contrato',
}

function TransferCard({ transfer }: TransferCardProps) {
  const { tipo, jugador, clubOrigen, clubDestino, tipoOperacion, monto, fecha } = transfer
  const isAlta = tipo === 'ALTA'

  return (
    <div
      className={cn(
        'flex gap-4 rounded-xl p-4 shadow-md ring-1 ring-white/20 transition-all duration-200 hover:shadow-lg text-white',
        isAlta ? 'border-l-4 border-l-success' : 'border-l-4 border-l-error'
      )}
      style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        {jugador.foto ? (
          <img
            src={`/${jugador.foto}`}
            alt={jugador.nombre}
            className="size-14 rounded-full object-cover ring-2 ring-secondary-dark"
            loading="lazy"
          />
        ) : (
          <div className="flex size-14 items-center justify-center rounded-full bg-primary text-sm font-bold text-white ring-2 ring-secondary-dark">
            {getInitials(jugador.nombre)}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        {/* Name + badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="truncate text-base font-semibold text-white">
            {jugador.nombre}
          </span>
          <span
            className={cn(
              'inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
              isAlta
                ? 'bg-white/20 text-white'
                : 'bg-white/20 text-white'
            )}
          >
            {tipo}
          </span>
        </div>

        {/* Clubs */}
        <div className="flex items-center gap-1.5 text-sm text-white/80">
          <span className="truncate">{clubOrigen}</span>
          <span className="shrink-0" aria-hidden="true">➔</span>
          <span className="truncate font-medium text-white">{clubDestino}</span>
        </div>

        {/* Operation type + monto */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/80">
          <span>{OPERACION_LABELS[tipoOperacion] ?? tipoOperacion}</span>
          {formatMonto(monto) && (
            <>
              <span className="hidden sm:inline" aria-hidden="true">•</span>
              <span className="font-semibold text-white">{formatMonto(monto)}</span>
            </>
          )}
        </div>

        {/* Date */}
        <span className="text-xs text-white/70">{formatFecha(fecha)}</span>
      </div>
    </div>
  )
}

export { TransferCard }
