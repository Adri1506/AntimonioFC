import { useQuery } from "@tanstack/react-query"
import { fetchUpcomingMatches } from "@/services/matchService"

export function useMatches() {
  return useQuery({
    queryKey: ["upcoming-matches"],
    queryFn: fetchUpcomingMatches,
  })
}
