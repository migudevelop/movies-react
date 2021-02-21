import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTER_PAGES } from './constants';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: ROUTER_PAGES.LOGIN,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
