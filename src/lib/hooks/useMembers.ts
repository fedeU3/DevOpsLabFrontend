import { useQuery } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"
import { httpGETMembers } from "../services/members"

export const useMembers = ()=>{

  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse<Array<any>, AxiosError>>({
    queryKey: ['members'],
    queryFn: httpGETMembers,
  })

  const { data: members } = response || {}

  return {
    members,
    isLoading,
    error,
  }
}