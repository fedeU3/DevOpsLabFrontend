import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
  TextField,
} from "@mui/material";

interface IUser {
  id: number;
  avatar: string;
  name: string;
  position: string;
  adress: string;
  bio: string;
  phone: string;
  email: string;
  equipment: string[];
}

const fetchCurrentUser = async (): Promise<IUser> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch('/api/usuarioActual')
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.error('Error al obtener el usuario:', error);
      resolve({
        id: 1,
        avatar: "PlaceholderProfile.jpg",
        name: "Usuario Ejemplo",
        position: "Puesto de ejemplo",
        adress: "Direccion de ejemplo",
        bio: "Esta es una biografía de ejemplo.",
        phone: "123-456-7890",
        email: "usuario@example.com",
        equipment: ["Cámara", "Micrófono", "Trípode"],
      });
      });
    }, 1000);
  });
};



const Usuario = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [editing] = useState(false);
  const [formData, setFormData] = useState<IUser | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchCurrentUser();
        setUser(data);
        setFormData(data);
      } catch (err) {
        console.error(err);
        setError("Error al cargar la información del usuario");
      }
    };
    loadUser();
  }, []);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Cargando...</p>;

  return (
    <Box sx={{minHeight: "100vh", color: "#B0BEC5"}}>
      <Container sx={{ py: 2 }}>
        <Card sx={{ backgroundColor: "#151E26", p: 2, borderRadius: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <CardMedia
                component="img"
                image={user.avatar}
                alt={user.name}
                sx={{ width: 100, height: 100, borderRadius: "50%" }}
              />
            </Grid>
            <Grid item>
              {editing ? (
                <TextField
                  fullWidth
                  label="Nombre"
                  name="name"
                  value={formData?.name || ''}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="h4" fontWeight="bold">{user.name}</Typography>
              )}
              {editing ? (
                <TextField
                  fullWidth
                  label="Puesto o profesion"
                  name="position"
                  value={formData?.position || ''}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="h5" fontWeight="bold">{user.position}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              {editing ? (
                <TextField
                  fullWidth
                  label="Biografía"
                  name="bio"
                  value={formData?.bio || ''}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="body1">{user.bio}</Typography>
              )}
              {editing ? (
                <TextField
                  fullWidth
                  label="Direcion"
                  name="adress"
                  value={formData?.adress || ''}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="body2" sx={{ mt: 2 }}>
                  <strong>Direccion:</strong> {user.adress}
                </Typography>
              )}
              {editing ? (
                <TextField
                  fullWidth
                  label="Teléfono"
                  name="phone"
                  value={formData?.phone || ''}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="body2">
                  <strong>Teléfono:</strong> {user.phone}
                </Typography>
              )}
              {editing ? (
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData?.email || ''}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="body2">
                  <strong>Email:</strong> {user.email}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Card>
      </Container>


        <Grid container spacing={2}>
        </Grid>
    </Box>
  );
};

export default Usuario;