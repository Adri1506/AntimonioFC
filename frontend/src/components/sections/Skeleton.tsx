import { cn } from "@/lib/utils"

type SkeletonProps = {
  width?: string
  height?: string
  rounded?: "sm" | "md" | "lg" | "xl" | "full"
  count?: number
  className?: string
}

const roundedMap = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
} as const

function SkeletonItem({
  width,
  height,
  rounded = "md",
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-shimmer bg-secondary-dark/60",
        roundedMap[rounded],
        width ?? "w-full",
        height ?? "h-4"
      )}
    />
  )
}

function Skeleton({
  width,
  height,
  rounded = "md",
  count = 1,
  className,
}: SkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("flex flex-col gap-3", className)}
    >
      {Array.from({ length: count }, (_, i) => (
        <SkeletonItem
          key={i}
          width={width}
          height={height}
          rounded={rounded}
        />
      ))}
      <span className="sr-only">Cargando...</span>
    </div>
  )
}

export { Skeleton }
