import axios from "axios";

export const httpGETBooks = () => axios.get('/books');