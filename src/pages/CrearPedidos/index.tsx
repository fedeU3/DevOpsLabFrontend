import { useCreateOrders } from '../../lib/hooks/useCreateOrders'
import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useEquipos } from '../../lib/hooks/useEquipos';
import { Dayjs } from 'dayjs';
import { useAuthContext } from '../../lib/hooks/contextHooks/useAuthContext';
import { useViewContext } from '../../lib/hooks/contextHooks/useViewContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../lib/constants/routes';

type CrearPedidoFromType = {
  direccion: string,
  idEquipo: number,
  fechaHoraEntrega: Dayjs | null,
  fechaHoraPactada: Dayjs | null
}

const CreateOrder  = () => {
  const navigate = useNavigate();
  const {user} = useAuthContext();
  const { notification } = useViewContext();
  const {
    handleSubmit,
    setValue,
    watch,
    register,
  } = useForm<CrearPedidoFromType>();
  const {
    createOrder,
    isLoading,
    error,
    isSuccess,
  } = useCreateOrders();

  useEffect(() => {
    if(isSuccess){
      notification.show({
        content: 'Pedido creado',
        severity: 'success',
      });
      navigate(ROUTES.MisPedidos.path);
    }
  }, [isSuccess])

  useEffect(() => {
    if(error){
      notification.show({
        content: 'Error al crear pedido',
        severity: 'error',
      });
    }
  }, [error]);

  const {
    equipos,
  } = useEquipos('disponibles');
  const [
    fechaHoraEntrega,
    fechaHoraPactada,
  ] = watch(['fechaHoraEntrega', 'fechaHoraPactada']);
  const onSubmit = (data: CrearPedidoFromType) => {
    if(
      !user?.id ||
      !data.fechaHoraEntrega ||
      !data.fechaHoraPactada
    ) return;
    const body = {
      ...data,
      idEquipo: [data.idEquipo],
      fechaHoraEntrega: data.fechaHoraEntrega?.toISOString(),
      fechaHoraPactada: data.fechaHoraPactada?.toISOString(),
      idMiembro: user?.id,
    };
    createOrder(body);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
      <Typography variant="h4">Crear Pedido</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
        <DateTimePicker
          label={'Entrega'}
          name={'fechaHoraEntrega'}
          onChange={value => setValue('fechaHoraEntrega', value)}
          value={fechaHoraEntrega}
          sx={{width: '49%', minWidth: '200px'}}
        />
        <DateTimePicker
          label={'Devolución'}
          name={'fechaHoraPactada'}
          onChange={value => setValue('fechaHoraPactada', value)}
          value={fechaHoraPactada}
          sx={{width: '49%', minWidth: '200px'}}
        />
      </Box>
      <Box>
        <TextField
          label='Dirección'
          variant='outlined'
          fullWidth
          {...register('direccion', { required: true })}
        />
      </Box>
      <Box>
        <Typography sx={{mb: 1}} variant="subtitle2">Equipo</Typography>
        <Select fullWidth label='Equipo' {...register('idEquipo', { required: true })}>
          {
            equipos?.map((equipo: {id: number, nombre: string}) => (
              <MenuItem key={equipo.id} value={equipo.id}>{equipo.nombre}</MenuItem>
            )) || [
              <MenuItem key={0} value={0}>Cargando...</MenuItem>
            ]
          }
        </Select>
      </Box>
      <Box>
        <Button
          variant='contained'
          onClick={handleSubmit(onSubmit)}
          loading={isLoading}
        >
          Crear Pedido
        </Button>
      </Box>
    </Box>
  )
}

export default CreateOrder