import { cn } from '@/lib/utils'

type TransferFilterProps = {
  active: string
  onChange: (tipo: string) => void
}

const FILTERS = [
  { key: '', label: 'Todos' },
  { key: 'ALTA', label: 'Altas' },
  { key: 'BAJA', label: 'Bajas' },
]

function TransferFilter({ active, onChange }: TransferFilterProps) {
  return (
    <div className="flex gap-1 rounded-xl bg-white/10 p-1" role="tablist">
      {FILTERS.map((filter) => (
        <button
          key={filter.key}
          role="tab"
          aria-selected={active === filter.key}
          onClick={() => onChange(filter.key)}
          className={cn(
            'flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all',
            active === filter.key
              ? 'bg-accent text-white shadow-sm'
              : 'text-white/70 hover:text-white'
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export { TransferFilter }
