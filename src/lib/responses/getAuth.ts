export interface IGetAuthResponse {
  idUsuario: number;
  idLocalidad: number;
  idProvincia: number;
  usuario: string;
  token?: string | null;
  // A = Activo, I = Inactivo
  estado: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  dni: string;
  cuil: string;
  email: string;
  fechaAlta: string;
  calle: string;
}
