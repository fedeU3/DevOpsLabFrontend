import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonIcon from '@mui/icons-material/Person';
import { useAuthContext } from '../../lib/hooks/contextHooks/useAuthContext';
import { formatFecha } from '../../lib/utils/format';

const Perfil: React.FC = () => {
  const { user } = useAuthContext();

  if (!user?.idUsuario) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <Typography variant="h6" color="text.secondary">
          Cargando perfil...
        </Typography>
      </Box>
    );
  }

  const isActive = user.estado === 'A';
  const datos = [
    { label: 'Email', value: user.email },
    { label: 'Teléfono', value: user.telefono },
    { label: 'DNI', value: user.dni },
    { label: 'CUIL', value: user.cuil },
    { label: 'Dirección', value: user.calle },
    { label: 'Fecha de alta', value: user.fechaAlta && formatFecha(user.fechaAlta) },
    { label: 'ID de usuario', value: `#${user.idUsuario}` },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Grid container spacing={3} alignItems="center">
              <Grid>
                <Avatar
                  sx={{
                    width: 72,
                    height: 72,
                    bgcolor: 'primary.main',
                    fontSize: '1.75rem',
                    color: 'primary.contrastText',
                  }}
                >
                  {user.nombres?.[0]?.toUpperCase() ?? <PersonIcon />}
                </Avatar>
              </Grid>
              <Grid size="grow">
                <Typography variant="h4" fontWeight={700}>
                  {user.nombres} {user.apellidos}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                  @{user.usuario}
                </Typography>
                <Box display="flex" gap={1} mt={1} flexWrap="wrap">
                  <Chip
                    icon={isActive ? <CheckCircleIcon /> : <CancelIcon />}
                    label={isActive ? 'Activo' : 'Inactivo'}
                    color={isActive ? 'success' : 'default'}
                    size="small"
                  />
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={2}>
              {datos.map(({ label, value }) => (
                <Grid size={{ xs: 12, sm: 6 }} key={label}>
                  <Typography variant="overline" color="text.secondary" display="block">
                    {label}
                  </Typography>
                  <Typography variant="body1">{value || '—'}</Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Perfil;
