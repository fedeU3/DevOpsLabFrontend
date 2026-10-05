export interface IServicioResponse {
  idServicio: number;
  servicio: string;
  // Duracion del turno en minutos
  duracion: number;
  // El backend lo devuelve como string decimal, ej: "8000.00"
  precio: string;
  // A = Activo, B = Baja
  estado: string;
}
