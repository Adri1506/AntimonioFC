import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { AdminSidebar } from './AdminSidebar'
import { Button } from '@/components/ui/button'
import { LogOut, User } from 'lucide-react'

export function AdminLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <AdminSidebar />

      {/* Main content area */}
      <div className="ml-60">
        {/* Top header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-end gap-4 border-b border-secondary-dark bg-surface px-6">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <User className="h-4 w-4" />
            <span className="font-medium text-text">
              {user?.nombre || 'Admin'}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleLogout}
            title="Cerrar sesión"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </header>

        {/* Page content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
