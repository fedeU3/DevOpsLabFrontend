import axios from "axios";
import { CreateTurnoDTO } from "../dto/CreateTurnoDTO";

export const httpGETTurnos = () => axios.get('/turnos');

export const httpPOSTTurno = (turno: CreateTurnoDTO) => axios.post('/turnos', turno);

export const httpPATCHTurnoEstado = (id: number, estado: string) =>
  axios.patch(`/turnos/${id}`, { estado });
