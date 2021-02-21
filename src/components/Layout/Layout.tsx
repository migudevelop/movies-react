import React, { useContext } from 'react';
import { Props } from 'interfaces/commons';
import { BackdropContext } from 'services/context/backdropContext';
import Header from './Header';
import { Backdrop, CircularProgress } from '@material-ui/core';

function Layout({ children }: Props) {
  const { loading } = useContext(BackdropContext);
  return (
    <>
      <Header />
      <div className="container">
        {loading && (
          <Backdrop style={{ zIndex: 1 }} open={loading}>
            <CircularProgress color="primary" size={70} />
          </Backdrop>
        )}
        {children}
      </div>
    </>
  );
}

export default Layout;
