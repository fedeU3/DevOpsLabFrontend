import { ReactNode } from "react";

export interface IMyOrdersResponse {
  id: ReactNode;
  idMiembro: number;
  idEquipo?: number;
  fechaHoraPedido: Date;
  fechaHoraEntrega: Date;
  fechaHoraPactada: Date;
  fechaHoraDevolucion: Date;
  estado: string;
}