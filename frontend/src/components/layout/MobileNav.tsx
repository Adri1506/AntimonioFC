import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Menu, LogOut, User } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navItems } from "@/components/layout/Navigation"
import { useAuth } from "@/hooks/useAuth"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  currentPath?: string
}

function MobileNav({ currentPath = "/" }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  function handleNavigation(href: string) {
    setOpen(false)
    navigate(href)
  }

  function handleLogout() {
    setOpen(false)
    logout()
    navigate("/", { replace: true })
  }

  const isActive = (href: string) =>
    currentPath === href || (href !== "/" && currentPath.startsWith(href))

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex md:hidden items-center justify-center rounded-lg p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Abrir menú"
      >
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[280px] border-l border-white/10 bg-[#000080] p-0"
      >
        <div className="flex flex-col h-full">
          {/* Header del menú */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="text-base font-bold text-white">
              AntimonioFC
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar menú"
            >
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navegación */}
          <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-left",
                    isActive(item.href)
                      ? "bg-white/15 text-white"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Footer con auth */}
          <div className="border-t border-white/10 px-3 py-4 space-y-2">
            {isAuthenticated && user ? (
              <>
                <button
                  type="button"
                  onClick={() => handleNavigation("/perfil")}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors text-left"
                >
                  <User className="size-4 shrink-0" />
                  <span>Hola, {user.nombre.split(" ")[0]}</span>
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white transition-colors text-left"
                >
                  <LogOut className="size-4 shrink-0" />
                  <span>Cerrar Sesión</span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => handleNavigation("/login")}
                  className="flex w-full items-center justify-center rounded-lg border border-white/20 px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Iniciar Sesión
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigation("/socios")}
                  className="flex w-full items-center justify-center rounded-lg bg-accent px-3 py-2.5 text-sm font-medium text-white hover:opacity-90 active:opacity-80 transition-colors"
                >
                  Hazte Socio
                </button>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export { MobileNav }
