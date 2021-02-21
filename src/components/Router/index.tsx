import React, { Suspense, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTER_PAGES } from './constants';
import CircularProgress from '@material-ui/core/CircularProgress';
import Login from 'app/pages/Login';
import Movies from 'app/pages/Movies';

const Routes = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <Route exact path={ROUTER_PAGES.HOME} component={Movies} />
        <Route exact path={ROUTER_PAGES.LOGIN} component={Login} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
