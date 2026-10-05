import { useQuery } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios";
import { httpGETServicios } from "../services/servicios";
import { IServicioResponse } from "../responses/servicios";

export const useServicios = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse<Array<IServicioResponse>>, AxiosError>({
    queryKey: ['servicios'],
    queryFn: httpGETServicios,
  })
  const { data: servicios } = response || {};
  return {
    servicios,
    isLoading,
    error,
  }
}
