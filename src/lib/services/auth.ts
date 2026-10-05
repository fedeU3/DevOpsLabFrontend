import axios from "axios"
import { LoginDTO } from "../dto/LoginDTO"
import { SignUpDTO } from "../dto/SignUpDTO";

export const httpGETAuth = () => axios.get('/auth');

export const httpPOSTLogin = ({usuario, password}: LoginDTO) =>
  axios.post('/auth/login', {usuario, password})

export const httpPOSTSignUp = ({name, userID, password}: SignUpDTO) =>
  axios.post('/auth/signup', {name, userID, password})