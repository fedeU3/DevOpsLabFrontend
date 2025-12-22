import axios from "axios";

export const httpGETEquipos = (estado?: string) => axios.get('/equipos', {params: {estado}});