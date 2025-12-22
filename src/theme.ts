// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#080808'
    },
    text: {
      primary: '#B0BEC5'
    },
    primary: {
      main: '#FF7043',
    },
    secondary: {
      main: '#E64A19',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#FF7043',
          color: '#080808',
          '&:hover': {
            backgroundColor: '#E64A19',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2C3E50',
          color: '#B0BEC5',
          borderRadius: '1rem',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
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
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#FF7043',
          '&.Mui-checked': {
            color: '#FF7043',
          },
        },
      },
    },
  },
});

export default theme;
