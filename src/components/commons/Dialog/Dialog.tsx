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
  onOpenDialogChange = () => null,
}: IEDialogProps) {
  const [currentOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  const handleClickOpen = () => {
    setOpen(true);
    onOpenDialogChange(true);
  };

  const handleClose = () => {
    onOpenDialogChange(false);
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
