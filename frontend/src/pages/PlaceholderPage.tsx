import { useLocation } from "react-router-dom"
import { Layout } from "@/components/layout"

interface PlaceholderPageProps {
  title: string
  icon?: string
}

function PlaceholderPage({ title, icon = "🚧" }: PlaceholderPageProps) {
  const location = useLocation()

  return (
    <Layout currentPath={location.pathname}>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 text-6xl">{icon}</span>
        <h1 className="heading-2 mb-2 text-primary">{title}</h1>
        <p className="text-lg text-text-secondary">
          Próximamente disponible
        </p>
      </div>
    </Layout>
  )
}

export default PlaceholderPage
