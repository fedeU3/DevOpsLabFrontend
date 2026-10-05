import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useAuthContext } from '../../lib/hooks/contextHooks/useAuthContext';
import { useViewContext } from '../../lib/hooks/contextHooks/useViewContext';
import { useServicios } from '../../lib/hooks/useServicios';
import { useCreateTurno } from '../../lib/hooks/useTurnos';
import { ROUTES } from '../../lib/constants/routes';
import { formatPrecio } from '../../lib/utils/format';

type NuevoTurnoFormType = {
  idServicio: number | '';
  fecha: Dayjs | null;
}

const NuevoTurno = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuthContext();
  const { notification } = useViewContext();
  const { servicios } = useServicios();
  const { createTurno, isLoading, error, isSuccess } = useCreateTurno();

  const { control, handleSubmit } = useForm<NuevoTurnoFormType>({
    defaultValues: {
      idServicio: Number(searchParams.get('servicio')) || '',
      fecha: null,
    },
  });

  const serviciosActivos = servicios?.filter((servicio) => servicio.estado === 'A') ?? [];

  useEffect(() => {
    if (isSuccess) {
      notification.show({
        content: 'Turno reservado',
        severity: 'success',
      });
      navigate(ROUTES.misTurnos.path);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      notification.show({
        // Ej: "El horario se superpone con el Turno 4"
        content: error.response?.data?.message ?? 'Error al reservar el turno',
        severity: 'error',
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const onSubmit = (data: NuevoTurnoFormType) => {
    if (!user?.idUsuario || !data.idServicio || !data.fecha) return;
    createTurno({
      idUsuario: user.idUsuario,
      idServicio: data.idServicio,
      // Hora local sin zona horaria, como la espera el backend
      fecha: data.fecha.format('YYYY-MM-DDTHH:mm:ss'),
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2, maxWidth: 600 }}>
      <Typography variant="h4">Nuevo turno</Typography>
      <Controller
        name="idServicio"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="servicio-label">Servicio</InputLabel>
            <Select labelId="servicio-label" label="Servicio" {...field}>
              {serviciosActivos.map((servicio) => (
                <MenuItem key={servicio.idServicio} value={servicio.idServicio}>
                  {servicio.servicio} · {servicio.duracion} min · {formatPrecio(servicio.precio)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="fecha"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <DateTimePicker
            label="Fecha y hora"
            value={field.value}
            onChange={field.onChange}
            minDateTime={dayjs()}
            ampm={false}
          />
        )}
      />
      <Box>
        <Button
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          loading={isLoading}
        >
          Reservar turno
        </Button>
      </Box>
    </Box>
  )
}

export default NuevoTurno
