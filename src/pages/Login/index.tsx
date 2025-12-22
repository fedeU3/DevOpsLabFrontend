import { Box, Button, TextField, Typography, Card, CardContent, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../lib/hooks/contextHooks/useAuthContext';
import { LogInFormType } from '../../lib/types/forms/LoginForm';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const { login } = useAuthContext();
  const {
    handleSubmit,
    register,
  } = useForm<LogInFormType>({
    defaultValues: {
      userID: '',
      password: '',
      rememberMe: false, // Nuevo campo para "Recuérdame"
    }
  });

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #080808, #2C3E50)",
        backgroundColor: '#080808',
        minHeight: '100vh',
        color: '#B0BEC5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <Card
        sx={{
          backgroundColor: '#2C3E50',
          width: '25rem',
          padding: '2rem',
          color: "#B0BEC5",
          borderRadius: '1rem',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <CardContent>
          <Typography variant='h4' align='center'  gutterBottom>
            Login
          </Typography>
          <Box
            component={'form'}
            onSubmit={handleSubmit(login)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              {...register('userID', { required: true })}
              sx={{
                backgroundColor: '#151E26',
                borderRadius: '0.5rem',
                '& .MuiOutlinedInput-root': {
                  color: '#B0BEC5',
                },
                '& .MuiInputLabel-root': {
                  color: '#B0BEC5',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FF7043',
                },
              }}
            />
            <TextField
              label='Password'
              variant='outlined'
              type='password'
              fullWidth
              {...register('password', { required: true })}
              sx={{
                backgroundColor: '#151E26',
                borderRadius: '0.5rem',
                '& .MuiOutlinedInput-root': {
                  color: '#B0BEC5',
                },
                '& .MuiInputLabel-root': {
                  color: '#B0BEC5',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FF7043',
                },
              }}
            />

            {/* Checkbox para "Recuérdame" */}
            <FormControlLabel
              control={
                <Checkbox
                  {...register('rememberMe')}
                  sx={{
                    color: '#FF7043',
                    '&.Mui-checked': {
                      color: '#FF7043',
                    },
                  }}
                />
              }
              label="Recuérdame"
              sx={{ color: '#B0BEC5' }}
            />

            {/* Botón de Login */}
            <Button
              variant='contained'
              type='submit'
              sx={{
                backgroundColor: '#FF7043',
                color: '#080808',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#E64A19',
                },
              }}
            >
              Login
            </Button>

            {/* Enlace para "¿Olvidaste tu contraseña?" */}
            <Typography
              variant='body2'
              align='center'
              sx={{
                color: '#FF7043',
                textDecoration: 'underline',
                cursor: 'pointer',
                '&:hover': {
                  color: '#E64A19',
                },
              }}
            >
              ¿Olvidaste tu contraseña?
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;