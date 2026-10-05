import { AxiosError, AxiosResponse } from "axios"
import { httpGETAuth, httpPOSTLogin, httpPOSTSignUp } from "../services/auth"
import { useMutation, useQuery } from "@tanstack/react-query"
import { IGetAuthResponse } from "../responses/getAuth"
import { LoginDTO } from "../dto/LoginDTO"
import { SignUpDTO } from "../dto/SignUpDTO"
import { useNavigate } from "react-router"
import { useState, useEffect } from "react"

const USER_KEY = 'user_data';

export const useAuth = () => {
  const navigate = useNavigate();

  // Carga inmediata desde localStorage para evitar flash de layout sin sidebar
  const [user, setUser] = useState<IGetAuthResponse | undefined>(() => {
    try {
      const stored = localStorage.getItem(USER_KEY);
      return stored ? (JSON.parse(stored) as IGetAuthResponse) : undefined;
    } catch {
      return undefined;
    }
  });

  // Validación de sesión con el servidor
  const { data: authResponse, isLoading, error } = useQuery<AxiosResponse<IGetAuthResponse>, AxiosError>({
    queryKey: ['auth'],
    queryFn: httpGETAuth,
    retry: false,
    enabled: !!localStorage.getItem('token'),
  });

  // Si GET /auth devuelve datos del usuario, sincroniza estado y localStorage
  useEffect(() => {
    if (authResponse?.data?.idUsuario) {
      localStorage.setItem(USER_KEY, JSON.stringify(authResponse.data));
      setUser(authResponse.data);
    }
  }, [authResponse]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveUser = (data: any) => {
    const { token, ...userData } = data as { token: string } & IGetAuthResponse;
    localStorage.setItem('token', token);
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
    setUser(userData);
    navigate('/');
  };

  const invalidateAuth = () => {
    localStorage.removeItem('token');
    localStorage.removeItem(USER_KEY);
    setUser(undefined);
  };

  const loginMutation = useMutation<AxiosResponse, AxiosError<{ message?: string }>, LoginDTO>({
    mutationFn: (data: LoginDTO) => httpPOSTLogin(data),
    onSuccess: (response) => {
      saveUser(response.data);
    },
  });

  const signUpMutation = useMutation({
    mutationFn: (data: SignUpDTO) => httpPOSTSignUp(data),
    onSuccess: (response) => {
      saveUser(response.data);
    },
  });

  return {
    user,
    isLoading,
    error,
    loginMutation,
    signUpMutation,
    invalidateAuth,
  }
}
