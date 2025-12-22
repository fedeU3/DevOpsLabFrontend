import { Box, Button, TextField, Typography, Card, CardContent, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../lib/hooks/contextHooks/useAuthContext';
import { SignUpFormType } from '../../lib/types/forms/SignUpForm';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const { signUp } = useAuthContext();
  const {
    handleSubmit,
    register,
  } = useForm<SignUpFormType>({
    defaultValues: {
      userID: '',
      password: '',
      name: '',
      confirmPassword: '',
      acceptTerms: false, // Nuevo campo para "Acepto los términos y condiciones"
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
          <Typography variant='h4' align='center' gutterBottom>
            Sign Up
          </Typography>
          <Box
            component={'form'}
            onSubmit={handleSubmit(signUp)}
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
              label='Name'
              variant='outlined'
              fullWidth
              {...register('name', { required: true })}
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
            <TextField
              label='Confirm Password'
              variant='outlined'
              type='password'
              fullWidth
              {...register('confirmPassword', { required: true })}
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

            {/* Checkbox para "Acepto los términos y condiciones" */}
            <FormControlLabel
              control={
                <Checkbox
                  {...register('acceptTerms', { required: true })}
                  sx={{
                    color: '#FF7043',
                    '&.Mui-checked': {
                      color: '#FF7043',
                    },
                  }}
                />
              }
              label={
                <Typography variant='body2' sx={{ color: '#B0BEC5' }}>
                  Acepto los términos y condiciones
                </Typography>
              }
            />

            {/* Botón de Sign Up */}
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
              Sign Up
            </Button>

            {/* Enlace para "Términos y condiciones" */}
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
              onClick={() => {
                // Lógica para redirigir a la página de términos y condiciones
                console.log('Redirigir a la página de términos y condiciones');
              }}
            >
              Términos y condiciones
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;