import React from 'react';
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useAuthContext } from '../../lib/hooks/contextHooks/useAuthContext';
import { ROUTES } from '../../lib/constants/routes';

type NavBarProps = {
  goTo: (path: string) => () => void;
  currentPage: string;
};

const NavBar: React.FC<NavBarProps> = ({ goTo, currentPage }) => {
  const { user } = useAuthContext();

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo + título */}
        <Box display="flex" alignItems="center" gap={1.5}>
          {/* Logo placeholder — reemplazar con el logo real del proyecto */}
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: 1,
              bgcolor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.85rem',
              color: 'primary.contrastText',
              flexShrink: 0,
            }}
          >
            P
          </Box>
          <Typography variant="h6" fontWeight={600} noWrap>
            {currentPage || 'Plantilla'}
          </Typography>
        </Box>

        {/* Acciones */}
        <Box display="flex" alignItems="center" gap={1}>
          {user ? (
            <>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: 'primary.main',
                  fontSize: '0.85rem',
                  color: 'primary.contrastText',
                }}
              >
                {user.nombres?.[0]?.toUpperCase()}
              </Avatar>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                {user.nombres} {user.apellidos}
              </Typography>
              <Button size="small" onClick={goTo(ROUTES.perfil.path)}>
                Perfil
              </Button>
              <Button
                size="small"
                variant="outlined"
                onClick={goTo(ROUTES.logout.path)}
              >
                Salir
              </Button>
            </>
          ) : (
            <>
              <Button size="small" color="inherit" onClick={goTo(ROUTES.login.path)}>
                Ingresar
              </Button>
              <Button size="small" variant="contained" onClick={goTo(ROUTES.signup.path)}>
                Registrarse
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;