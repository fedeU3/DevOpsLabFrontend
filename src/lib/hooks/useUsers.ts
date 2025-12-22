import { useQuery } from "@tanstack/react-query"
import { httpGETUsers } from "../services/users"
import { AxiosError, AxiosResponse } from "axios";
import { IUsersResponse } from "../responses/users";

export const useUsers = ()=>{
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse<Array<IUsersResponse>>, AxiosError>({
    queryKey: ['users'],
    queryFn: httpGETUsers,
  })
  const { data: users } = response || {};
  // console.log("books: ", books);
  // console.log("isLoading: ", isLoading);
  // console.log("error?.data: ", error);
  return {
    users,
    isLoading,
    error,
  }
}