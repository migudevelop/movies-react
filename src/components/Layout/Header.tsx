import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTER_PAGES } from 'components/Router/constants.js';
import { CoreContext, CORE_CONSTANTS } from 'services/context/coreContext.js';
import { BackdropContext } from 'services/context/backdropContext.js';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  MenuItem,
  Menu,
  Hidden,
} from '@material-ui/core';
import { Search, AccountCircle, Home } from '@material-ui/icons';
import Dialog from 'components/commons/Dialog/Dialog';
import { login } from 'services/axios_service/app';
import { IELoginRequest } from 'interfaces/petitions';
import Autocomplete from '@material-ui/lab/Autocomplete';

const FILM_LIST = ['Blackwidow', 'Jumanji', 'Onward', 'Avengers', 'Spiderman', 'Batman'];

function Header() {
  const { state, dispatch, searchText } = useContext(CoreContext);
  const { showLoader, hideLoader } = useContext(BackdropContext);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sendData, setSendData] = useState<IELoginRequest>({ user: '', password: '' });
  const [fieldErrors, setFieldsErrors] = useState<any>({});
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleLogin = () => {
    if (handleValidation()) {
      setOpenDialog(false);
      showLoader();
      login({ ...sendData })
        .then(({ data }) => dispatch({ type: CORE_CONSTANTS.LOGIN, value: data.user }))
        .catch((response) => {
          console.log(response);
        })
        .finally(() => {
          setOpenDialog(false);
          hideLoader();
        });
    }
  };

  const handleLogout = () => {
    dispatch({ type: CORE_CONSTANTS.LOGOUT });
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const goHome = () => {
    history.push(ROUTER_PAGES.HOME);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSendData({ ...sendData, [e.target.id]: e.target.value });
  };

  const handleValidation = () => {
    let valid: boolean = true;
    let errors: any = {};

    if (!sendData['user']) {
      valid = false;
      errors['user'] = 'Cannot be empty';
    }

    if (typeof sendData['user'] !== 'undefined') {
      if (!sendData['user'].match(/^[a-z]+$/)) {
        valid = false;
        errors['user'] = 'Only lowercase letters';
      }
    }

    if (typeof sendData['password'] !== 'undefined') {
      if (!sendData['password'].match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/)) {
        valid = false;
        errors['password'] =
          'Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters';
      }
    }

    setFieldsErrors({ ...errors });

    return valid;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchText.setSearch(e.target.value);
  };

  return (
    <header>
      <div className="header-root">
        <AppBar position="static">
          <Toolbar className="container">
            <IconButton edge="start" color="inherit" onClick={goHome}>
              <Home />
            </IconButton>
            {state.isLogged ? (
              <>
                <IconButton edge="start" className="user-icon" color="inherit" onClick={handleMenu}>
                  <AccountCircle />
                </IconButton>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                  <Hidden mdUp>
                    <MenuItem>{state.user}</MenuItem>
                  </Hidden>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
                <Typography className="title" variant="h6" noWrap>
                  {state.user}
                </Typography>
              </>
            ) : (
              <div className="login-button">
                <Dialog
                  textButton="Login"
                  openDialog={openDialog}
                  showActionButtons={true}
                  btnCancelText="Cancel"
                  btnAcceptText="Login"
                  onAcceptClick={handleLogin}
                >
                  <DialogTitle id="form-dialog-title">Login</DialogTitle>
                  <DialogContent>
                    <form autoComplete="off">
                      <TextField
                        autoFocus
                        margin="dense"
                        id="user"
                        label="User"
                        type="text"
                        fullWidth
                        required
                        error={!!fieldErrors.user}
                        helperText={fieldErrors.user || ''}
                        onChange={onChange}
                      />
                      <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        error={!!fieldErrors.password}
                        helperText={fieldErrors.password || ''}
                        onChange={onChange}
                      />
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            )}
            <div className="search">
              <div className="search-icon">
                <Search />
              </div>
              <Autocomplete
                freeSolo
                options={FILM_LIST.map((option) => option)}
                renderInput={(params) => (
                  <InputBase
                    ref={params.InputProps.ref}
                    placeholder="Search…"
                    classes={{
                      root: 'input-root',
                      input: 'input-input',
                    }}
                    onChange={handleSearch}
                    inputProps={{ ...params.inputProps, 'aria-label': 'search' }}
                  />
                )}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
}

export default Header;
