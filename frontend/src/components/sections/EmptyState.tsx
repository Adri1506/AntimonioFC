import type { LucideIcon } from "lucide-react"
import { Inbox } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type EmptyStateProps = {
  icon?: LucideIcon
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
  className?: string
}

function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-12 text-center",
        className
      )}
    >
      <div className="flex size-16 items-center justify-center rounded-full bg-white/10">
        <Icon
          className="size-8 text-white/70"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="max-w-sm text-sm text-white/70">
          {description}
        </p>
      </div>
      {actionLabel && onAction && (
        <Button
          variant="accent"
          size="sm"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

export { EmptyState }
