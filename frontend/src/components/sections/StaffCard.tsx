import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { roleLabels } from '@/data/coachingStaff'
import type { CoachingStaff } from '@/data/coachingStaff'

interface StaffCardProps {
  staff: CoachingStaff
}

function StaffCard({ staff }: StaffCardProps) {
  const initials = staff.nombre
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)

  return (
    <Card
      className="flex flex-col items-center text-center text-white transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5"
      style={{ background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.85) 0%, rgba(255, 101, 0, 0.85) 100%)' }}
    >
      <CardContent className="flex flex-col items-center gap-3 pt-6 pb-4">
        {/* Avatar / Placeholder */}
        <div className="size-20 overflow-hidden rounded-full bg-white/20">
          {staff.foto ? (
            <img
              src={`/${staff.foto}`}
              alt={staff.nombre}
              className="size-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex size-full items-center justify-center font-heading text-lg font-bold text-white/70">
              {initials}
            </div>
          )}
        </div>

        {/* Nombre */}
        <h3 className="text-sm font-semibold text-white line-clamp-1">
          {staff.nombre}
        </h3>

        {/* Rol */}
        <Badge variant="secondary" className="text-[10px]">
          {roleLabels[staff.rol] ?? staff.rol}
        </Badge>
      </CardContent>
    </Card>
  )
}

export { StaffCard }
