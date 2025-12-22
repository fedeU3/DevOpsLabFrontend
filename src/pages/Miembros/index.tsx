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
} from '@mui/material';
import { useMembers } from '../../lib/hooks/useMembers';

const MembersTable: React.FC = () => {
  const {
    members,
    isLoading,
    error,
  } = useMembers();

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
        An unexpected error ocourred
      </Alert>
    );
  }

  if (!members || members.length === 0) {
    return (
      <Typography variant="h6" style={{ textAlign: 'center', marginTop: '2rem' }}>
        No se encontraron miembros.
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper} style={{ marginTop: '2rem' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Direccion</TableCell>
            <TableCell>Rol</TableCell>
            <TableCell>esAdmin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.id}</TableCell>
              <TableCell>{member.nombre}</TableCell>
              <TableCell>{member.apellido}</TableCell>
              <TableCell>{member.direccion}</TableCell>
              <TableCell>{member.rol}</TableCell>
              <TableCell>{member.esAdmin}</TableCell>
              <TableCell>{member.isActive}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MembersTable;