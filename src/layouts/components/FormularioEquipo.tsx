import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent } from '@mui/material';

interface IFormProps {
  onClose: () => void;
  onAdd: (equipo: string) => void;
}

const FormularioEquipo = ({ onClose, onAdd }: IFormProps) => {
  const [equipo, setEquipo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [marcaModelo, setMarcaModelo] = useState('');

  const handleSubmit = () => {
    onAdd(equipo);
    onClose();
  };

  return (
    <Box
      sx={{
        background: " #080808",
        backgroundColor: '#080808',
        color: '#B0BEC5',
        padding: '2rem',
        borderRadius: '1rem',
      }}
    >
      <Card
        sx={{
          backgroundColor: '#2C3E50',
          padding: '2rem',
          color: "#B0BEC5",
          borderRadius: '1rem',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <CardContent>
          <Typography variant='h5' align='center' gutterBottom>
            Agregar Equipo
          </Typography>
          <Box
            component={'form'}
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <TextField
              label='Nombre del Equipo'
              variant='outlined'
              fullWidth
              value={equipo}
              onChange={(e) => setEquipo(e.target.value)}
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
              label='Categoría'
              variant='outlined'
              fullWidth
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
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
              label='Precio por hora'
              variant='outlined'
              fullWidth
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
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
              label='Marca y modelo'
              variant='outlined'
              fullWidth
              value={marcaModelo}
              onChange={(e) => setMarcaModelo(e.target.value)}
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
            <Button
              variant='contained'
              fullWidth
              sx={{
                backgroundColor: '#FF7043',
                color: '#080808',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#E64A19',
                },
              }}
              onClick={handleSubmit}
            >
              Guardar
            </Button>
            <Button
              variant='contained'
              fullWidth
              sx={{
                backgroundColor: '#2C3E50',
                color: '#FF7043',
                fontWeight: 'bold',
                border: '1px solid #FF7043',
                '&:hover': {
                  backgroundColor: '#E64A19',
                  color: '#2C3E50',
                },
              }}
              onClick={onClose}
            >
              Cancelar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FormularioEquipo;
