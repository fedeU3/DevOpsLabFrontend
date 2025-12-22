import axios from "axios"
import { LoginDTO } from "../dto/LoginDTO"
import { SignUpDTO } from "../dto/SignUpDTO";

export const httpGETAuth = () => axios.get('/auth');

export const httpPOSTLogin = ({userID, password}: LoginDTO) =>
  axios.post('/auth/login', {userID, password})

export const httpPOSTSignUp = ({name, userID, password}: SignUpDTO) =>
  axios.post('/auth/signup', {name, userID, password})