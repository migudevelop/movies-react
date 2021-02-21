import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTER_PAGES } from './constants';

const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (!authenticated ? <Component {...props} /> : <Redirect to={ROUTER_PAGES.HOME} />)}
    />
  );
};

export default PublicRoute;
