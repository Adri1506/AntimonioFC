import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import HomePage from "@/pages/HomePage"
import SquadPage from "@/pages/SquadPage"
import FormationPage from "@/pages/FormationPage"
import NewsPage from "@/pages/NewsPage"
import NewsDetailPage from "@/pages/NewsDetailPage"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import ProfilePage from "@/pages/ProfilePage"
import NotFoundPage from "@/pages/NotFoundPage"
import TicketsPage from "@/pages/TicketsPage"
import MembershipPage from "@/pages/MembershipPage"
import TransfersPage from "@/pages/TransfersPage"
import DashboardPage from "@/pages/admin/DashboardPage"
import PlayersAdminPage from "@/pages/admin/PlayersAdminPage"
import MatchesAdminPage from "@/pages/admin/MatchesAdminPage"
import NewsAdminPage from "@/pages/admin/NewsAdminPage"
import MembersAdminPage from "@/pages/admin/MembersAdminPage"
import TicketsAdminPage from "@/pages/admin/TicketsAdminPage"
import { ProtectedRoute } from "@/components/layout/ProtectedRoute"
import { AdminRoute } from "@/components/layout/AdminRoute"
import { AdminLayout } from "@/components/layout/AdminLayout"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plantilla" element={<SquadPage />} />
          <Route path="/formacion" element={<FormationPage />} />
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/noticias/:id" element={<NewsDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="/entradas" element={<TicketsPage />} />
          <Route path="/socios" element={<MembershipPage />} />
          <Route path="/fichajes" element={<TransfersPage />} />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="jugadores" element={<PlayersAdminPage />} />
            <Route path="partidos" element={<MatchesAdminPage />} />
            <Route path="noticias" element={<NewsAdminPage />} />
            <Route path="socios" element={<MembersAdminPage />} />
            <Route path="entradas" element={<TicketsAdminPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
