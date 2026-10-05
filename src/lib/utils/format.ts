import dayjs from "dayjs";

export const formatPrecio = (precio: string | number) =>
  Number(precio).toLocaleString('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });

export const formatFechaHora = (fecha: string | Date) => dayjs(fecha).format('DD/MM/YYYY HH:mm');

export const formatFecha = (fecha: string | Date) => dayjs(fecha).format('DD/MM/YYYY');
