import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ErrorStateProps = {
  message: string
  onRetry?: () => void
  className?: string
}

function ErrorState({ message, onRetry, className }: ErrorStateProps) {
  return (
    <Card
      role="alert"
      className={cn(
        "border border-error/30 bg-error/10 shadow-md",
        className
      )}
    >
      <CardContent className="flex flex-col items-center gap-4 py-8 text-center">
        <AlertCircle
          className="size-12 text-error"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold text-white">
            Algo salió mal
          </p>
          <p className="text-sm text-white/80">{message}</p>
        </div>
        {onRetry && (
          <Button
            variant="accent"
            size="sm"
            onClick={onRetry}
          >
            Reintentar
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export { ErrorState }
