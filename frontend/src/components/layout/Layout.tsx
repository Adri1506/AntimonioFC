import type { ReactNode } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { OfflineBanner } from "@/components/sections/OfflineBanner"

interface LayoutProps {
  children: ReactNode
  currentPath?: string
}

function Layout({ children, currentPath = "/" }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header currentPath={currentPath} />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <OfflineBanner />
    </div>
  )
}

export { Layout }
