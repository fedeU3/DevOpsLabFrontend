import {
  Button, Container, Grid, Card, CardContent, CardMedia,
  Typography, IconButton, Box
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useMembers } from '../../lib/hooks/useMembers';
import { useEquipos } from '../../lib/hooks/useEquipos';

type Equipo = {
  id: string | number;
  nombre?: string;
  marca?: string;
  // agrega otros campos si los usas (imagen, etc.)
};

// utilidad para “aplanar” distintas formas de respuesta
function normalizeEquipos(input: unknown): Equipo[] {
  if (Array.isArray(input)) return input as Equipo[];
  // casos comunes: { data: [...] } o { items: [...] }
  if (input && typeof input === 'object') {
    const obj = input as Record<string, unknown>;
    if (Array.isArray(obj.data)) return obj.data as Equipo[];
    if (Array.isArray(obj.items)) return obj.items as Equipo[];
  }
  return [];
}

export default function Home() {
  const { members, isLoading: memLoading, error: memError } = useMembers();
  const { equipos, isLoading: eqLoading, error: eqError } = useEquipos();

  const equiposArr = normalizeEquipos(equipos);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", py: 5, background: "linear-gradient(to bottom, black, #2C3E50)" }}>
        <Typography variant="h3" fontWeight="bold">Plantilla</Typography>
      </Box>

      <Container sx={{ py: 2 }}>
        {eqLoading ? (
          <Typography>Cargando equipos…</Typography>
        ) : eqError ? (
          <Typography>Error al cargar los equipos</Typography>
        ) : equiposArr.length === 0 ? (
          <Typography>No se encontraron equipos.</Typography>
        ) : (
          <Grid container spacing={2}>
            {equiposArr.map((equipo) => (
              <Grid item xs={12} sm={6} md={4} key={String(equipo.id)}>
                <Card sx={{ backgroundColor: "#2C3E50" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    src="PlaceholderEquipo.jpg"
                    alt={equipo.nombre ?? 'Equipo'}
                  />
                  <CardContent>
                    <Typography variant="h6">{equipo.nombre ?? "Sin nombre"}</Typography>
                    <Typography variant="subtitle1">Marca: {equipo.marca ?? "—"}</Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ backgroundColor: "#FF7043" }}
                      startIcon={<InventoryIcon />}
                    >
                      Alquilar Equipo
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      <Container sx={{ mt: 2 }}>
        {memLoading ? (
          <Typography>Cargando miembros…</Typography>
        ) : memError ? (
          <Typography>Error al cargar los miembros</Typography>
        ) : !members || members.length === 0 ? (
          <Typography>No se encontraron miembros.</Typography>
        ) : (
          <Grid container spacing={2}>
            {/* renderiza tus miembros aquí */}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
