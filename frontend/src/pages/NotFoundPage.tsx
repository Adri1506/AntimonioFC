import { Link, useLocation } from "react-router-dom"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"

function NotFoundPage() {
  const location = useLocation()

  return (
    <Layout currentPath={location.pathname}>
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <span className="mb-6 text-7xl">🏟️</span>
        <h1 className="heading-2 mb-2 text-primary">404</h1>
        <h2 className="heading-4 mb-4 text-text">Página no encontrada</h2>
        <p className="mb-8 max-w-md text-text-secondary">
          La página que buscas no existe o fue movida a otra dirección.
          Verifica el enlace o vuelve al inicio.
        </p>
        <Link to="/">
          <Button variant="accent" size="lg">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
