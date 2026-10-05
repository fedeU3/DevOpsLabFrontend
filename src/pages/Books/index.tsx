import React from 'react'
import { useBooks } from '../../lib/hooks/useBooks'

type Props = {}

const Books  = (props: Props) => {
  const {
    books,
    isLoading,
    error,
  } = useBooks();
  if(!error && books && !isLoading){
    console.log(books[0]);
  }
  return (
    <div>Books</div>
  )
}

export default Books