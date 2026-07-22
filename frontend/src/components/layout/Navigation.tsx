import { Home, Users, LayoutGrid, Newspaper, Ticket, Heart, ArrowLeftRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Plantilla", href: "/plantilla", icon: Users },
  { label: "Formación", href: "/formacion", icon: LayoutGrid },
  { label: "Noticias", href: "/noticias", icon: Newspaper },
  { label: "Entradas", href: "/entradas", icon: Ticket },
  { label: "Socios", href: "/socios", icon: Heart },
  { label: "Fichajes", href: "/fichajes", icon: ArrowLeftRight },
]

interface NavigationProps {
  currentPath?: string
  className?: string
  onItemClick?: () => void
}

function Navigation({ currentPath = "/", className, onItemClick }: NavigationProps) {
  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = currentPath === item.href ||
          (item.href !== "/" && currentPath.startsWith(item.href))

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
              isActive
                ? "text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-4 after:bg-accent after:rounded-full"
                : "text-white/70 hover:text-white hover:bg-white/10"
            )}
          >
            <Icon className="size-4" />
            <span>{item.label}</span>
          </a>
        )
      })}
    </nav>
  )
}

export { Navigation }
