import { useQuery } from "@tanstack/react-query"
import { httpGETBooks } from "../services/books"
import { AxiosError, AxiosResponse } from "axios";
import { IBookResponse } from "../responses/books";

export const useBooks = ()=>{
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse<Array<IBookResponse>>, AxiosError>({
    queryKey: ['books'],
    queryFn: httpGETBooks,
  })
  const { data: books } = response || {};
  // console.log("books: ", books);
  // console.log("isLoading: ", isLoading);
  // console.log("error?.data: ", error);
  return {
    books,
    isLoading,
    error,
  }
}