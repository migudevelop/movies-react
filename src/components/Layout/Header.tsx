import React, { useContext } from 'react';
import { CoreContext, CORE_CONSTANTS } from 'services/context/coreContext.js';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from '@material-ui/core';
import { Search, AccountCircle } from '@material-ui/icons';
import Dialog from 'components/commons/Dialog/Dialog';

function Header() {
  const { state, dispatch } = useContext(CoreContext);

  const handleLogin = () => {
    dispatch({ type: CORE_CONSTANTS.LOGIN, value: 'Prueba' });
  };

  return (
    <header>
      <div className="header-root">
        <AppBar position="static">
          <Toolbar className="container">
            {state.isLogged ? (
              <>
                <IconButton edge="start" className="user-icon" color="inherit">
                  <AccountCircle />
                </IconButton>
                <Typography className="title" variant="h6" noWrap>
                  {state.user}
                </Typography>
              </>
            ) : (
              <div className="login-button">
                <Dialog
                  textButton="Login"
                  showActionButtons={true}
                  btnCancelText="Cancel"
                  btnAcceptText="Login"
                  onAcceptClick={handleLogin}
                >
                  <DialogTitle id="form-dialog-title">Login</DialogTitle>
                  <DialogContent>
                    <TextField autoFocus margin="dense" id="user" label="User" type="text" fullWidth />
                    <TextField margin="dense" id="password" label="Password" type="password" fullWidth />
                  </DialogContent>
                </Dialog>
              </div>
            )}
            <div className="search">
              <div className="search-icon">
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: 'input-root',
                  input: 'input-input',
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
}

export default Header;
