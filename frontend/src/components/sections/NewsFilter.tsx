import { cn } from "@/lib/utils"
import { NEWS_CATEGORIES } from "@/types/news"
import type { NewsCategory } from "@/types/news"

interface NewsFilterProps {
  selected: NewsCategory
  onChange: (category: NewsCategory) => void
}

function NewsFilter({ selected, onChange }: NewsFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por categoría">
      {NEWS_CATEGORIES.map((category) => {
        const isActive = selected === category

        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
              isActive
                ? "bg-accent text-white shadow-md"
                : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
            )}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export { NewsFilter }
