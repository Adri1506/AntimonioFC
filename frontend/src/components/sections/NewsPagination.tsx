import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NewsPaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

function NewsPagination({ page, totalPages, onPageChange }: NewsPaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-4 pt-8">
      <Button
        variant="outline"
        size="sm"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft className="size-4" />
        Anterior
      </Button>

      <span className="text-sm text-text-secondary">
        Página <span className="font-semibold text-text">{page}</span> de{" "}
        <span className="font-semibold text-text">{totalPages}</span>
      </span>

      <Button
        variant="outline"
        size="sm"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Siguiente
        <ChevronRight className="size-4" />
      </Button>
    </div>
  )
}

export { NewsPagination }
