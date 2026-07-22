import { coachingStaff } from '@/data/coachingStaff'
import { StaffCard } from '@/components/sections/StaffCard'

function StaffSection() {
  return (
    <section className="mt-16 border-t border-secondary-dark pt-12">
      <h2 className="heading-3 mb-10 text-center text-primary">
        CUERPO TÉCNICO
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {coachingStaff.map((member) => (
          <StaffCard key={member.id} staff={member} />
        ))}
      </div>
    </section>
  )
}

export { StaffSection }
