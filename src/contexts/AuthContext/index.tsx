import React, { useEffect } from 'react'
import { AxiosError } from 'axios';
import { useAuth } from '../../lib/hooks/useAuth';
import { useNavigate } from 'react-router';
import { LoginDTO } from '../../lib/dto/LoginDTO';
import { initialContextValue } from './constants/initialValues';
import { IGetAuthResponse } from '../../lib/responses/getAuth';
import { SignUpFormType } from '../../lib/types/forms/SignUpForm';
import { LogInFormType } from '../../lib/types/forms/LoginForm';

export interface AuthContextType {
  user?: IGetAuthResponse;
  isAdmin?: boolean;
  login: (data: LogInFormType) => Promise<void>;
  signUp: (data: SignUpFormType) => Promise<void>;
  logout: () => void;
  isLoggingIn: boolean;
  loginError: AxiosError<{ message?: string }> | null;
}


export const AuthContext = React.createContext<AuthContextType>(initialContextValue);

type AuthProviderProps = {
  children: React.ReactNode;
}
const AuthProvider: React.FC<AuthProviderProps> = ({
  children
}) => {
  const navigate = useNavigate();
  const {
    error,
    user,
    loginMutation,
    signUpMutation,
    invalidateAuth,
  } = useAuth();
  const login = async (data: LoginDTO) => {
    loginMutation.mutate(data);
  }
  const signUp = async (data: SignUpFormType) => {
    signUpMutation.mutate(data);
  }
  const logout = () => {
    invalidateAuth();
    navigate('/login');
  }

  useEffect(() => {
    if (error?.status === 401) {
      invalidateAuth();
      navigate('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  // El backend todavía no maneja roles de administrador
  const isAdmin = false;
  return (
    <AuthContext.Provider value={{
      user: error?.status === 401 ? undefined : user,
      isAdmin,
      login,
      signUp,
      logout,
      isLoggingIn: loginMutation.isPending,
      loginError: loginMutation.error,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider