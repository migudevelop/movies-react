import React, { useState } from 'react';

import { AppBar, Toolbar, Button, IconButton, Typography, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <header>
      <div className="header-root">
        <AppBar position="static">
          <Toolbar className="container">
            {/* <IconButton edge="start" className="menu-button" color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton> */}
            {/* <Typography className="title" variant="h6" noWrap>
              Movies
            </Typography> */}
            <div className="login-button">
              <Button color="inherit">Login</Button>
            </div>
            <div className="search">
              <div className="search-icon">
                <SearchIcon />
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
