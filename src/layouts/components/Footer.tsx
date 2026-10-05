import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', textAlign: 'center', py: 4, mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid size={{ xs: 12, sm: 4 }}>
          {/* Logo placeholder */}
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography variant="h6" fontWeight={600}>
            Plantilla — Tu Proyecto
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
            <HomeIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              Tu dirección aquí
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
            <PhoneIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              Tu teléfono aquí
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
            <EmailIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              tu@email.com
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              L a V de 9:00 AM a 6:00 PM
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }} />
      </Grid>
    </Box>
  );
};

export default Footer;