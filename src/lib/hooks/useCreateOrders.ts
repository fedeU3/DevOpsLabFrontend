import { useMutation } from "@tanstack/react-query"
import { httpPOSTPedido } from "../services/pedidos"

export const useCreateOrders = ()=>{
  const {
    mutate,
    isPending: isLoading,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: httpPOSTPedido,
  })
  return {
    createOrder: mutate,
    isLoading,
    error,
    isSuccess,
  }
}