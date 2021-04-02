import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useIsLoggedIn from '../hooks/useIsLoggedIn';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
