import React from 'react'
import { Alert, Snackbar } from '@mui/material'

export type NotificationProps = {
  open: boolean,
  onClose?: () => void,
  content: string | React.ReactNode,
  duration?: number,
  severity: 'error' | 'warning' | 'info' | 'success',
}

const Notification: React.FC<NotificationProps> = ({
  open,
  onClose,
  content,
  duration,
  severity,
}) => {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={duration || 6000}
      onClose={onClose}
      sx={{ marginTop: '50px' }}
    >
      <Alert onClose={onClose} severity={severity} variant='filled' sx={{ width: '100%' }}>
        {content}
      </Alert>
    </Snackbar>
  )
}

export default Notification
