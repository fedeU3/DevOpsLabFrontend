import React, { useEffect, useMemo } from 'react'
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
    localStorage.removeItem('token');
    invalidateAuth();
    navigate('/login');
  }
  useEffect(()=>{
    if(error?.status === 401) {
      localStorage.removeItem('token');
      navigate('/login');
    };
  }, [error]);
  const isAdmin = useMemo(() => user?.esAdmin, [user]);
  return (
    <AuthContext.Provider value={{
      user: error ? undefined : user,
      isAdmin,
      login,
      signUp,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider