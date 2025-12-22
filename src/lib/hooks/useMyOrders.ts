import { useQuery } from "@tanstack/react-query"
import { httpGETMyOrders } from "../services/myOrders"
import { AxiosError, AxiosResponse } from "axios";
import { IMyOrdersResponse } from "../responses/myOrders";

export const useMyOrders = ()=>{
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse<Array<IMyOrdersResponse>>, AxiosError>({
    queryKey: ['MyOrders'],
    queryFn: httpGETMyOrders,
  })
  const { data: myOrders } = response || {};
  // console.log("books: ", books);
  // console.log("isLoading: ", isLoading);
  // console.log("error?.data: ", error);
  return {
    myOrders,
    isLoading,
    error,
  }
}