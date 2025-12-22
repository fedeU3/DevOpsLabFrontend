import React from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from "react-router";
import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from '../contexts/AuthContext';
import ViewProvider from '../contexts/ViewContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type ProvidersProp = {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
axios.defaults.baseURL = import.meta.env.VITE_SERVICE_URL
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// //TODO: delete this throttle test
// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
// axios.interceptors.response.use(
//   async (response) => {
//     if(
//       response.config.url !== '/auth' &&
//       response.config.url !== '/auth/login' &&
//       response.config.url !== '/auth/signup'
//     ) {
//       await sleep(5000);
//     }
//     return response
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

const Providers:React.FC<ProvidersProp> = ({children}) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <AuthProvider>
              <ViewProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                  <CssBaseline />
                  {children}
                </LocalizationProvider>
              </ViewProvider>
            </AuthProvider>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default Providers