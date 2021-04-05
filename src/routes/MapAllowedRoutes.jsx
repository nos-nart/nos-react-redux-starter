import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import NotFound from '../pages/NotFound';

/*
 * This is the route utility component used for generating
 * routes and child routes it only requires routes array and basePath
 */
function MapAllowedRoutes({ routes, isAddNotFound }) {
  return (
    <Switch>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        );
      })}
      {isAddNotFound && (
        <Route>
          <NotFound />
        </Route>
      )}
    </Switch>
  );
}

MapAllowedRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
  isAddNotFound: PropTypes.bool,
};

export default memo(MapAllowedRoutes);
