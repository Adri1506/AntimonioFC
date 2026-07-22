import { Navigation } from "@/components/layout/Navigation"
import { MobileNav } from "@/components/layout/MobileNav"
import { LogOut, User } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"
import { useNavigate } from "react-router-dom"

interface HeaderProps {
  currentPath?: string
}

function Header({ currentPath = "/" }: HeaderProps) {
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/", { replace: true })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg" style={{ backgroundColor: '#000080' }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/img/escudo.png"
            alt="AntimonioFC"
            className="h-10 w-10 rounded-full ring-2 ring-white/20"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget
              img.style.display = "none"
              const fallback = img.parentElement?.querySelector('[data-fallback="shield"]') as HTMLElement | null
              if (fallback) {
                fallback.style.display = "flex"
              }
            }}
          />
          <span
            className="hidden sm:flex items-center text-lg font-bold text-white"
          >
            AntimonioFC
          </span>
          {/* Fallback cuando no carga la imagen */}
          <span
            data-fallback="shield"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white"
          >
            AFC
          </span>
        </a>

        {/* Desktop Navigation */}
        <Navigation
          currentPath={currentPath}
          className="hidden md:flex"
        />

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated && user ? (
            <>
              <a
                href="/perfil"
                className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-white/10 px-3 text-sm font-medium text-white transition-all hover:bg-white/20"
              >
                <User className="size-4" />
                <span>Hola, {user.nombre.split(' ')[0]}</span>
              </a>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white"
              >
                <LogOut className="size-4" />
                <span className="hidden xl:inline">Cerrar Sesión</span>
              </button>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="inline-flex h-8 items-center justify-center rounded-lg border border-white/20 px-4 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                Iniciar Sesión
              </a>
              <a
                href="/socios"
                className="inline-flex h-8 items-center justify-center rounded-lg bg-accent px-4 text-sm font-medium text-white transition-all hover:opacity-90 active:opacity-80"
              >
                Hazte Socio
              </a>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <MobileNav currentPath={currentPath} />
      </div>
    </header>
  )
}

export { Header }
