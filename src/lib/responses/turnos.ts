import { IServicioResponse } from "./servicios";

export interface ITurnoResponse {
  idTurno: number;
  idUsuario: number;
  idServicio: number;
  fecha: string;
  // P = Pendiente, A = Atendido, C = Cancelado
  estado: 'P' | 'A' | 'C';
  servicio: IServicioResponse;
}
