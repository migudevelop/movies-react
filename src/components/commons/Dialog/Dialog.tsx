import React from 'react';
import { IEDialogProps } from 'interfaces/dialog';
import { Dialog, DialogActions, Button } from '@material-ui/core';

function LoginButtonDialog({
  textButton,
  showActionButtons,
  children,
  btnCancelText,
  btnAcceptText,
  onAcceptClick,
}: IEDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="text" color="inherit" onClick={handleClickOpen}>
        {textButton}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {children}
        {showActionButtons && (
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              {btnCancelText}
            </Button>
            <Button onClick={onAcceptClick ? onAcceptClick : handleClose} color="primary">
              {btnAcceptText}
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}

export default LoginButtonDialog;
