import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
  Alert,
  Chip,
  Container,
} from '@mui/material';
import { useUsers } from '../../lib/hooks/useUsers';

const UsuariosTable: React.FC = () => {
  const {
    users,
    isLoading,
    error,
  } = useUsers();

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Alert severity="error" style={{ marginTop: '2rem' }}>
        Error al cargar los usuarios.
      </Alert>
    );
  }

  if (!users || users.length === 0) {
    return (
      <Typography variant="h6" style={{ textAlign: 'center', marginTop: '2rem' }}>
        No se encontraron usuarios.
      </Typography>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
        Usuarios
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((usuario) => (
              <TableRow key={usuario.idUsuario}>
                <TableCell>{usuario.idUsuario}</TableCell>
                <TableCell>{usuario.usuario}</TableCell>
                <TableCell>{usuario.nombres}</TableCell>
                <TableCell>{usuario.apellidos}</TableCell>
                <TableCell>{usuario.email}</TableCell>
                <TableCell>{usuario.telefono}</TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    label={usuario.estado === 'A' ? 'Activo' : 'Inactivo'}
                    color={usuario.estado === 'A' ? 'success' : 'default'}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UsuariosTable;
