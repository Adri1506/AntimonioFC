import type { Transfer } from '@/types/transfer'
import { TransferCard } from './TransferCard'
import { Skeleton } from './Skeleton'

type TransferTimelineProps = {
  transfers: Transfer[]
  isLoading: boolean
}

function TimelineSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-start gap-4">
          <Skeleton width="w-4" height="h-4" rounded="full" className="mt-6 shrink-0" />
          <div
            className="flex-1 space-y-3 rounded-xl p-4 shadow-md ring-1 ring-white/20"
            style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
          >
            <div className="flex items-center gap-3">
              <Skeleton width="w-14" height="h-14" rounded="full" />
              <div className="flex-1 space-y-2">
                <Skeleton width="w-40" height="h-5" />
                <Skeleton width="w-24" height="h-4" />
              </div>
            </div>
            <Skeleton width="w-3/4" height="h-4" />
            <Skeleton width="w-1/3" height="h-3" />
          </div>
        </div>
      ))}
    </div>
  )
}

function TransferTimeline({ transfers, isLoading }: TransferTimelineProps) {
  if (isLoading) {
    return <TimelineSkeleton />
  }

  return (
    <div className="relative">
      {/* Vertical central line - desktop */}
      <div className="hidden md:absolute md:left-1/2 md:top-0 md:block md:h-full md:w-0.5 md:-translate-x-1/2 md:bg-white/30" />

      {/* Vertical left line - mobile */}
      <div className="absolute left-[21px] top-0 h-full w-0.5 bg-white/30 md:hidden" />

      <div className="space-y-6 md:space-y-10">
        {transfers.map((transfer, index) => (
          <div
            key={transfer.id}
            className={`flex items-start gap-4 md:gap-8 ${
              index % 2 === 0 ? 'flex-row md:flex-row-reverse' : 'flex-row'
            }`}
          >
            {/* Dot on desktop - always in the visual center */}
            <div className="relative z-10 mt-6 hidden shrink-0 md:block">
              <div className="size-4 rounded-full bg-accent ring-4 ring-white/30" />
              {/* Horizontal connector from dot towards card */}
              <div
                className={`absolute top-2 h-0.5 w-4 bg-white/30 ${
                  index % 2 === 0 ? 'left-4' : 'right-4'
                }`}
              />
            </div>

            {/* Dot on mobile */}
            <div className="relative z-10 mt-6 shrink-0 md:hidden">
              <div className="size-4 rounded-full bg-accent ring-4 ring-white/30" />
            </div>

            {/* Card */}
            <div className="min-w-0 flex-1">
              <TransferCard transfer={transfer} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { TransferTimeline }
