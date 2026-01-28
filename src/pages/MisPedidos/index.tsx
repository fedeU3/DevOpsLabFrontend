import React, { useState } from 'react';
import { useMyOrders } from '../../lib/hooks/useMyOrders';
import { Button, Container, Grid, Card, CardContent, Typography, IconButton, Box, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoIcon from '@mui/icons-material/Info';
import CancelIcon from '@mui/icons-material/Cancel';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../lib/constants/routes';



const MyOrders = () => {
  const navigate = useNavigate();
  const { myOrders, isLoading, error } = useMyOrders();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedOrders = myOrders?.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.fechaHoraPedido).getTime() - new Date(b.fechaHoraPedido).getTime();
    } else {
      return new Date(b.fechaHoraPedido).getTime() - new Date(a.fechaHoraPedido).getTime();
    }
  });

  return (
    <Box sx={{minHeight: "100vh", color: "#B0BEC5"}}>
      {/* Header de Pedidos */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: "100%", backgroundColor: "#151E26", p: 2 }}>
        <Typography variant="h5" mb={2}>Últimos Pedidos</Typography>
        <IconButton color="inherit">
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      {/* Buscar y Ordenar */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: "100%", p: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Buscar"
          sx={{ backgroundColor: "#1E2A38", color: "#B0BEC5", borderRadius: "4px" }}
          InputProps={{ style: { color: "#B0BEC5" } }}
        />
        <Box>
          <Button variant="contained" sx={{ backgroundColor: "#FF7043", mr: 1 }} onClick={handleSortToggle} startIcon={<SortIcon />}>
            Ordenar {sortOrder === 'asc' ? 'Ascendente' : 'Descendente'}
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#FF7043" }} startIcon={<AddIcon />} onClick={() => navigate(ROUTES.createOrders.path)}>
            Crear nuevo pedido
          </Button>
        </Box>
      </Box>

      {/* Lista de Pedidos */}
      <Container sx={{ py: 2 }}>
        {isLoading && <Typography>Cargando...</Typography>}
        {error && <Typography>Error al cargar los pedidos</Typography>}
        {!isLoading && !error && sortedOrders && sortedOrders.length > 0 ? (
          <Grid container spacing={2}>
            {sortedOrders.map((order, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ backgroundColor: "#1E2A38", color: "#B0BEC5" }}>
                  <CardContent>
                    <Typography variant="h6">Pedido ID: {order.id}</Typography>
                    <Typography variant="body2">{order.fechaHoraPedido.toLocaleString()}</Typography>
                    {/* <Typography variant="body2">Items:</Typography>
                    <ul>
                      {order.items.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, idx: React.Key | null | undefined) => (
                        <li key={idx}>
                          <Typography variant="body2">{item}</Typography>
                        </li>
                      ))}
                    </ul> */}
                    <Box display="flex" justifyContent="space-between" mt={2}>
                      <Button variant="contained" startIcon={<InfoIcon />} sx={{ backgroundColor: "#FF7043" }}>Más Información</Button>
                      <Button variant="contained" startIcon={<CancelIcon />} color="secondary">Cancelar pedido</Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>No hay pedidos disponibles</Typography>
        )}
      </Container>
    </Box>
  );
};

export default MyOrders;
