import React from 'react';
import { Route } from 'react-router-dom';
import useIsLoggedIn from 'hooks/useIsLoggedIn';
import Login from '../pages/Login/Login';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component, ...rest }) => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <>
      {isLoggedIn ? (
        <Route component={component} {...rest} />
      ) : (
        // eslint-disable-next-line no-undef
        <Route component={Login} />
      )}
    </>
  );
};

export default PrivateRoute;
