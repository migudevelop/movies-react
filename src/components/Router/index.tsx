import React, { Suspense, useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { ROUTER_PAGES } from './constants';
import CircularProgress from '@material-ui/core/CircularProgress';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Login from 'app/pages/Login';
import Movies from 'app/pages/Movies';

const Routes = () => {
  const [isAutenticated] = useState(true);
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <PrivateRoute exact authenticated={isAutenticated} path={ROUTER_PAGES.HOME} component={Movies} />
        <PublicRoute exact authenticated={isAutenticated} path={ROUTER_PAGES.LOGIN} component={Login} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
