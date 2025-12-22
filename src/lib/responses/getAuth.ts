export interface IGetAuthResponse {
  id: number;
  userID: string;
  password: string;
  nombre: string;
  apellido: string;
  direccion: string;
  rol: string;
  esAdmin: boolean;
  isActive: boolean;
}