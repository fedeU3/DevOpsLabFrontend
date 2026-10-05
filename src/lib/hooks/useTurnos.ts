import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios";
import { httpGETTurnos, httpPATCHTurnoEstado, httpPOSTTurno } from "../services/turnos";
import { ITurnoResponse } from "../responses/turnos";
import { CreateTurnoDTO } from "../dto/CreateTurnoDTO";

export const useTurnos = () => {
  const queryClient = useQueryClient();
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse<Array<ITurnoResponse>>, AxiosError>({
    queryKey: ['turnos'],
    queryFn: httpGETTurnos,
  })
  const cancelMutation = useMutation<AxiosResponse, AxiosError<{ message?: string }>, number>({
    mutationFn: (id: number) => httpPATCHTurnoEstado(id, 'C'),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['turnos'] }),
  })
  const { data: turnos } = response || {};
  return {
    turnos,
    isLoading,
    error,
    cancelTurno: cancelMutation.mutate,
    isCanceling: cancelMutation.isPending,
  }
}

export const useCreateTurno = () => {
  const queryClient = useQueryClient();
  const {
    mutate,
    isPending: isLoading,
    error,
    isSuccess,
  } = useMutation<AxiosResponse, AxiosError<{ message?: string }>, CreateTurnoDTO>({
    mutationFn: httpPOSTTurno,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['turnos'] }),
  })
  return {
    createTurno: mutate,
    isLoading,
    error,
    isSuccess,
  }
}
