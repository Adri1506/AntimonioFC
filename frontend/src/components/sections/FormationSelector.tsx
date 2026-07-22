import { formations } from '@/data/formations'
import { cn } from '@/lib/utils'

interface FormationSelectorProps {
  selected: string
  onChange: (id: string) => void
}

function FormationSelector({ selected, onChange }: FormationSelectorProps) {
  const formationList = Object.values(formations)

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {formationList.map((f) => {
        const isActive = f.id === selected
        return (
          <button
            key={f.id}
            type="button"
            onClick={() => onChange(f.id)}
            className={cn(
              'flex flex-col items-center gap-1 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200',
              'border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
              isActive
                ? 'border-accent bg-accent/10 text-accent shadow-md'
                : 'border-secondary-dark bg-surface text-text-secondary hover:border-primary/30 hover:text-text'
            )}
          >
            <span className="font-heading text-base">{f.nombre}</span>
            <span className="text-[11px] font-normal opacity-70">
              {f.descripcion}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export { FormationSelector }
