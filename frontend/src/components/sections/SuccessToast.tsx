import { useEffect } from "react"
import { CheckCircle2, X } from "lucide-react"
import { cn } from "@/lib/utils"

type SuccessToastProps = {
  message: string
  show: boolean
  onClose: () => void
  className?: string
}

function SuccessToast({
  message,
  show,
  onClose,
  className,
}: SuccessToastProps) {
  useEffect(() => {
    if (!show) return

    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [show, onClose])

  if (!show) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed bottom-4 right-4 z-50 flex animate-slide-up items-center gap-3 rounded-xl bg-success px-5 py-3 text-white shadow-lg",
        className
      )}
    >
      <CheckCircle2 className="size-5 shrink-0" aria-hidden="true" />
      <p className="text-sm font-medium">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
        aria-label="Cerrar"
      >
        <X className="size-3.5" />
      </button>
    </div>
  )
}

export { SuccessToast }
