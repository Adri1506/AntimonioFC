import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Calendar,
  Newspaper,
  HeartHandshake,
  Ticket,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Users, label: 'Jugadores', path: '/admin/jugadores' },
  { icon: Calendar, label: 'Partidos', path: '/admin/partidos' },
  { icon: Newspaper, label: 'Noticias', path: '/admin/noticias' },
  { icon: HeartHandshake, label: 'Socios', path: '/admin/socios' },
  { icon: Ticket, label: 'Entradas', path: '/admin/entradas' },
]

export function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-60 flex-col bg-[#000052] text-white">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-white/10 px-5">
        <span className="text-lg font-bold tracking-tight">AntimonioFC</span>
        <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
          Admin
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/admin'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-white/15 text-white'
                  : 'text-white/60 hover:bg-white/10 hover:text-white'
              )
            }
          >
            <link.icon className="h-4 w-4 shrink-0" />
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
