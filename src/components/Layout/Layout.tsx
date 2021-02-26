import React, { useContext } from 'react';
import { Props } from 'interfaces/commons';
import { CommonContext } from 'services/context/commonContext';
import Header from './Header';
import Loader from 'components/commons/Loader/Loader';
import Message from 'components/commons/Message/Message';

function Layout({ children }: Props) {
  const { showMessageElement } = useContext(CommonContext);
  return (
    <>
      <Header />
      <Loader />
      <div className="container">
        {showMessageElement && <Message />}
        {children}
      </div>
    </>
  );
}

export default Layout;
