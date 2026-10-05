import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../lib/hooks/contextHooks/useAuthContext';
import { SignUpFormType } from '../../lib/types/forms/SignUpForm';

const SignUp: React.FC = () => {
  const { signUp } = useAuthContext();
  const { handleSubmit, register } = useForm<SignUpFormType>({
    defaultValues: { userID: '', password: '', name: '', confirmPassword: '' },
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
            Registrarse
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(signUp)}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
          >
            <TextField
              label="Email / Usuario"
              variant="outlined"
              fullWidth
              {...register('userID', { required: true })}
            />
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              {...register('name', { required: true })}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              {...register('password', { required: true })}
            />
            <TextField
              label="Confirmar contraseña"
              variant="outlined"
              type="password"
              fullWidth
              {...register('confirmPassword', { required: true })}
            />
            <Button variant="contained" type="submit" fullWidth size="large">
              Crear cuenta
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;