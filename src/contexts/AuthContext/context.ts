import React from 'react'
import { initialContextValue } from './constants/initialValues';
import type { AuthContextType } from '.';

export const AuthContext = React.createContext<AuthContextType>(initialContextValue);
