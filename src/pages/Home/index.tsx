import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useNavigate } from 'react-router';
import { useServicios } from '../../lib/hooks/useServicios';
import { ROUTES } from '../../lib/constants/routes';
import { formatPrecio } from '../../lib/utils/format';

export default function Home() {
  const navigate = useNavigate();
  const { servicios, isLoading, error } = useServicios();

  const serviciosActivos = servicios?.filter((servicio) => servicio.estado === 'A') ?? [];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero */}
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
        }}
      >
        <Typography variant="h3" fontWeight={700}>
          Plantilla
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
          Descripción del proyecto va aquí
        </Typography>
      </Box>

      <Container sx={{ py: 4 }}>
        {isLoading && <Typography color="text.secondary">Cargando...</Typography>}
        {error && <Typography color="error">Error al cargar los servicios.</Typography>}
        {!isLoading && !error && serviciosActivos.length === 0 && (
          <Typography color="text.secondary">No hay servicios disponibles.</Typography>
        )}
        {serviciosActivos.length > 0 && (
          <Grid container spacing={2}>
            {serviciosActivos.map((servicio) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={servicio.idServicio}>
                <Card>
                  {/* Placeholder imagen — reemplazar con <CardMedia> cuando haya asset real */}
                  <Box
                    sx={{
                      height: 140,
                      bgcolor: 'background.default',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EventAvailableIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
                  </Box>
                  <CardContent>
                    <Typography variant="h6">{servicio.servicio}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {servicio.duracion} min · {formatPrecio(servicio.precio)}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ mt: 1 }}
                      startIcon={<EventAvailableIcon />}
                      onClick={() => navigate(`${ROUTES.nuevoTurno.path}?servicio=${servicio.idServicio}`)}
                    >
                      Reservar turno
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
