import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { afiliarSocio, fetchMiMembresia } from '@/services/membershipService'
import type { AfiliarRequest } from '@/types/membership'

export function useMiMembresia() {
  return useQuery({
    queryKey: ['mi-membresia'],
    queryFn: fetchMiMembresia,
  })
}

export function useAfiliarSocio() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: AfiliarRequest) => afiliarSocio(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mi-membresia'] })
    },
  })
}
