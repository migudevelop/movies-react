import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTER_PAGES } from './constants';
import CircularProgress from '@material-ui/core/CircularProgress';
import MovieDetail from 'app/pages/MovieDetail';
import Movies from 'app/pages/Movies';

const Routes = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <Route exact path={ROUTER_PAGES.HOME} component={Movies} />
        <Route exact path={ROUTER_PAGES.MOVIE_DETAIL} component={MovieDetail} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
