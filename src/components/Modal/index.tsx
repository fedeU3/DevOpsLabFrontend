import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
export type ModalProps = {
  open: boolean;
  onClose: () => void;
  content: string | React.ReactNode;
  title?: string;
  fullWidth?: boolean;
  maxWidth?: DialogProps['maxWidth'];
}
const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  content,
  title,
  fullWidth,
  maxWidth,
}) => {
  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <Close />
      </IconButton>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}

export default Modal