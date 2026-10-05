import { useQuery } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios";
import { httpGETEquipos } from "../services/equipos";

export const useEquipos = (estado?: string) => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse, AxiosError>({
    queryKey: ['equipos', estado],
    queryFn: ()=>httpGETEquipos(estado),
  })
  const { data: equipos } = response || {};
  return {
    equipos,
    isLoading,
    error,
  }
}