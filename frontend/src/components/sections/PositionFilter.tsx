import { cn } from '@/lib/utils'

interface PositionFilterProps {
  selected: string | undefined
  onChange: (posicion: string | undefined) => void
  counts: Record<string, number>
}

const filters = [
  { key: undefined, label: 'Todos' },
  { key: 'POR', label: 'Porteros' },
  { key: 'DEF', label: 'Defensas' },
  { key: 'MED', label: 'Mediocampistas' },
  { key: 'DEL', label: 'Delanteros' },
] as const

function PositionFilter({ selected, onChange, counts }: PositionFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por posición">
      {filters.map((filter) => {
        const isActive = selected === filter.key
        const count = filter.key ? (counts[filter.key] ?? 0) : Object.values(counts).reduce((a, b) => a + b, 0)

        return (
          <button
            key={filter.label}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.key)}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
              isActive
                ? 'bg-accent text-white shadow-md'
                : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
            )}
          >
            <span>{filter.label}</span>
            <span
              className={cn(
                'inline-flex size-5 items-center justify-center rounded-full text-xs font-bold',
                isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-white/80'
              )}
            >
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export { PositionFilter }
