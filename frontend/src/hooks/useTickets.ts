import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchMatches, purchaseTicket, fetchMyTickets } from '@/services/ticketService'
import type { PurchaseRequest } from '@/types/ticket'

export function useMatches() {
  return useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  })
}

export function usePurchaseTicket() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: PurchaseRequest) => purchaseTicket(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-tickets'] })
    },
  })
}

export function useMyTickets() {
  return useQuery({
    queryKey: ['my-tickets'],
    queryFn: fetchMyTickets,
  })
}
