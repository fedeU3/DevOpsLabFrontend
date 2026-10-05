import { Alert, Box, Button, Card, CardContent, CircularProgress, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../lib/hooks/contextHooks/useAuthContext';
import { LogInFormType } from '../../lib/types/forms/LoginForm';
import { AuthContextType } from '../../contexts/AuthContext';

const getLoginErrorMessage = (error: NonNullable<AuthContextType['loginError']>) => {
  if (!error.response) return 'No se pudo conectar con el servidor';
  if (error.response.status === 404) return 'Usuario no encontrado';
  if (error.response.status === 401) {
    return error.response.data?.message === 'User is inactive'
      ? 'El usuario está inactivo'
      : 'Contraseña incorrecta';
  }
  return 'Ocurrió un error al iniciar sesión';
};

const Login: React.FC = () => {
  const { login, isLoggingIn, loginError } = useAuthContext();
  const { handleSubmit, register } = useForm<LogInFormType>({
    defaultValues: { usuario: '', password: '' },
  });

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: '2rem',
        background: (theme) =>
          `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
      }}
    >
      <Card sx={{ width: '25rem' }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h4" align="center" gutterBottom fontWeight={600}>
            Ingresar
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(login)}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
          >
            <TextField
              label="Email / Usuario"
              variant="outlined"
              fullWidth
              {...register('usuario', { required: true })}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              {...register('password', { required: true })}
            />
            {loginError && (
              <Alert severity="error">{getLoginErrorMessage(loginError)}</Alert>
            )}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              size="large"
              disabled={isLoggingIn}
              startIcon={isLoggingIn ? <CircularProgress size={18} color="inherit" /> : null}
            >
              {isLoggingIn ? 'Ingresando...' : 'Ingresar'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;