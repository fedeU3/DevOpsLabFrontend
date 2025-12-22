import axios from "axios";
import { CreatePedidoDTO } from "../dto/CreateOrderDTO";

export const httpGETPedidos = () => axios.get('/pedidos');

export const httpPOSTPedido = (order: CreatePedidoDTO) => axios.post('/pedidos', order);