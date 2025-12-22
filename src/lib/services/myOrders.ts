import axios from "axios";

export const httpGETMyOrders = () => axios.get('/pedidos');