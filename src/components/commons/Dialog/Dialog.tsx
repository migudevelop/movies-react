import React, { useState, useEffect } from 'react';
import { IEDialogProps } from 'interfaces/dialog';
import { Dialog, DialogActions, Button } from '@material-ui/core';

function LoginButtonDialog({
  textButton,
  openDialog = false,
  showActionButtons,
  children,
  btnCancelText,
  btnAcceptText,
  onAcceptClick,
}: IEDialogProps) {
  const [currentOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

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
      <Dialog open={currentOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
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
