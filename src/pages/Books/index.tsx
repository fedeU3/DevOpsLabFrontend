import { useBooks } from '../../lib/hooks/useBooks'



const Books  = () => {
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