import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useAuthContext } from '../../lib/hooks/contextHooks/useAuthContext';

type NavBarProps = {
  goTo: (path: string) => () => void;
  currentPage: string;
};

const NavBar: React.FC<NavBarProps> = ({ goTo, currentPage }) => {
  const { user } = useAuthContext(); // Obtener la información del usuario

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#2C3E50', zIndex: (theme) => theme.zIndex.drawer + 1  }}>
        <Toolbar sx={{ justifyContent: 'flex start' }}>
          {/* Contenedor para el logo y el texto */}
          <Box display="flex" alignItems="center">
            {/* Logo */}
            {/*<Box component="img" src="/LogoFondo.svg" alt="Logo Almacén" sx={{ height: 40, mr: 2 }} />*/}
            {/* Texto de currentPage */}
            <Typography variant="h6" component="div">
              {currentPage}
            </Typography>
          </Box>

            <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              ml: 5,      // 👈 margen izquierdo entre el título y los botones
              gap: 2,     // opcional: espacio entre botones
            }}
          ></Box>

          {/* Botones a la derecha */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            {user ? (
              <>
                <Button
                onClick={goTo('/equipo')}
                  variant="contained"
                  sx={{ backgroundColor: '#B0BEC5', color: '#000', border: '1px solid #000',fontSize: '0.9rem', padding: '2px 4px', minWidth: 'auto'}}
                >
                  Alquilar Equipo
                </Button>
                <Button
                  onClick={goTo('/')}
                  sx={{ color: '#B0BEC5', fontSize: '0.9rem', padding: '2x 4px'}}
                >
                  Home
                </Button>
                  {/* 
                    <Button
                        onClick={goTo('/miembros')}
                        sx={{ color: '#B0BEC5',fontSize: '0.6rem', padding: '2x zpx', minWidth: 'auto'}}
                      >
                        Miembros del Equipo
                    </>
                  */}                
                <Button
                  onClick={goTo('/clientes')}
                  sx={{ color: '#B0BEC5',fontSize: '0.9em', padding: '2x 4px', minWidth: 'auto'}}
                >
                  Clientes
                </Button>
                <Button
                  onClick={goTo('/pedidos')}
                  sx={{ color: '#B0BEC5',fontSize: '0.9rem', padding: '2x 4px', minWidth: 'auto' }}
                >
                  Pedidos
                </Button>
                {user.esAdmin && (
                  <Button
                    onClick={goTo('/MisPedidos')}
                    sx={{ color: '#B0BEC5',fontSize: '0.9rem', padding: '2x 4px', minWidth: 'auto'}}
                  >
                    Mis pedidos
                  </Button>
                )}
                <Button
                  onClick={goTo('/usuario')}
                  variant="contained"
                  sx={{ backgroundColor: '#FF7043',fontSize: '0.9rem', padding: '2x 4px', minWidth: 'auto', color: '#080808' }}
                >
                  Perfil
                </Button>
              </>
            ) : (
              <>
                <Button
                onClick={goTo('/equipo')}
                  variant="contained"
                  sx={{ backgroundColor: '#B0BEC5', color: '#000', border: '1px solid #000', mr: 1 }}
                >
                  Alquilar Equipo
                </Button>
                <Button
                  onClick={goTo('/login')}
                  color="inherit"
                  sx={{ backgroundColor: '#FF7043', border: '1px solid #080808', color: '#080808' }}
                >
                  Login
                </Button>
                <Button
                  onClick={goTo('/signup')}
                  variant="outlined"
                  sx={{ ml: 1, backgroundColor: '#080808', borderColor: '#FF7043', color: '#FF7043', border: '1px solid #FF7043' }}
                >
                  Sign up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
