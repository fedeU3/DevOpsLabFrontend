import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  ChipProps,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import CancelIcon from '@mui/icons-material/Cancel';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../lib/constants/routes';
import { useTurnos } from '../../lib/hooks/useTurnos';
import { useAuthContext } from '../../lib/hooks/contextHooks/useAuthContext';
import { useViewContext } from '../../lib/hooks/contextHooks/useViewContext';
import { ITurnoResponse } from '../../lib/responses/turnos';
import { formatFechaHora, formatPrecio } from '../../lib/utils/format';

const ESTADOS: Record<ITurnoResponse['estado'], { label: string; color: ChipProps['color'] }> = {
  P: { label: 'Pendiente', color: 'warning' },
  A: { label: 'Atendido', color: 'success' },
  C: { label: 'Cancelado', color: 'default' },
};

const MisTurnos: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { notification } = useViewContext();
  const { turnos, isLoading, error, cancelTurno, isCanceling } = useTurnos();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [search, setSearch] = useState('');

  const toggleSort = () => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));

  // GET /turnos devuelve los turnos de todos los usuarios: nos quedamos con los propios
  const misTurnos = turnos
    ?.filter((turno) => turno.idUsuario === user?.idUsuario)
    .filter((turno) => turno.servicio?.servicio.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const diff = new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
      return sortOrder === 'asc' ? diff : -diff;
    });

  const onCancel = (idTurno: number) => {
    cancelTurno(idTurno, {
      onSuccess: () => notification.show({ content: 'Turno cancelado', severity: 'success' }),
      onError: (err) => notification.show({
        content: err.response?.data?.message ?? 'Error al cancelar el turno',
        severity: 'error',
      }),
    });
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ bgcolor: 'background.paper', p: 2 }}>
        <Typography variant="h5" fontWeight={600}>
          Mis turnos
        </Typography>
      </Box>

      {/* Controles */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 2, gap: 2, flexWrap: 'wrap' }}
      >
        <TextField
          variant="outlined"
          placeholder="Buscar servicio..."
          size="small"
          sx={{ minWidth: 200 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Box display="flex" gap={1}>
          <Button variant="contained" onClick={toggleSort} startIcon={<SortIcon />}>
            {sortOrder === 'asc' ? 'Más antiguos primero' : 'Más recientes primero'}
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate(ROUTES.nuevoTurno.path)}
          >
            Nuevo turno
          </Button>
        </Box>
      </Box>

      {/* Lista */}
      <Container sx={{ py: 2 }}>
        {isLoading && <Typography color="text.secondary">Cargando...</Typography>}
        {error && <Typography color="error">Error al cargar los turnos.</Typography>}
        {!isLoading && !error && misTurnos && misTurnos.length > 0 ? (
          <Grid container spacing={2}>
            {misTurnos.map((turno) => (
              <Grid size={12} key={turno.idTurno}>
                <Card>
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" gap={1}>
                      <Typography variant="h6">{turno.servicio?.servicio}</Typography>
                      <Chip
                        size="small"
                        label={ESTADOS[turno.estado].label}
                        color={ESTADOS[turno.estado].color}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {formatFechaHora(turno.fecha)} · {turno.servicio?.duracion} min
                      {turno.servicio && ` · ${formatPrecio(turno.servicio.precio)}`}
                    </Typography>
                    {turno.estado === 'P' && (
                      <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button
                          variant="outlined"
                          color="error"
                          startIcon={<CancelIcon />}
                          disabled={isCanceling}
                          onClick={() => onCancel(turno.idTurno)}
                        >
                          Cancelar
                        </Button>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          !isLoading && !error && (
            <Typography color="text.secondary">No tenés turnos.</Typography>
          )
        )}
      </Container>
    </Box>
  );
};

export default MisTurnos;
