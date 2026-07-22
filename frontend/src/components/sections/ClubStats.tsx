import { useEffect, useRef, useState } from "react"
import { Users, Calendar, Trophy, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatItem {
  icon: React.ComponentType<{
    className?: string
    "aria-hidden"?: boolean | "true" | "false"
    style?: React.CSSProperties
  }>
  label: string
  target: number
  suffix?: string
}

const stats: StatItem[] = [
  { icon: Users, label: "Socios", target: 1250 },
  { icon: Calendar, label: "Partidos Jugados", target: 468 },
  { icon: Trophy, label: "Goles", target: 892 },
  { icon: Clock, label: "Años de Historia", target: 68 },
]

function AnimatedCounter({
  target,
  suffix = "",
  duration = 1500,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function ClubStats() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-16" style={{ backgroundImage: 'url(/img/hinchas.png)' }}>
      {/* Capa de oscuridad */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 30, 0.75)' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="heading-3 mb-12 text-center text-white">
          El Club en Números
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={cn(
                  "flex flex-col items-center gap-3 rounded-xl bg-white/10 p-6 text-center",
                  "backdrop-blur-sm transition-all duration-200 hover:bg-white/15",
                )}
              >
                <div className="flex size-14 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(255, 101, 0, 0.2)' }}>
                  <Icon className="size-7" style={{ color: '#FF6500' }} aria-hidden="true" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-number text-3xl font-bold text-white md:text-4xl">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix ?? ""} />
                  </span>
                  <span className="text-sm text-white/70">{stat.label}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { ClubStats }
