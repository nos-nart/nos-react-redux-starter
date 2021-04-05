import React from 'react';
import { Redirect } from 'react-router-dom';

import ROLES from '../config/roles';
import Module1 from '../pages/Module1';
import Module2 from '../pages/Module2';
import MapAllowedRoutes from './MapAllowedRoutes';
// import useIsLoggedIn from '../hooks/useIsLoggedIn';
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../pages/Home/Home';
import { getAllowedRoutes } from '../utils';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
    title: 'Home',
    permission: [
      ROLES.ADMIN,
      ROLES.MANAGER,
      ROLES.CUSTOMER,
      ROLES.GUEST,
      ROLES.SUPER_ADMIN,
    ],
  },
  {
    path: '/module-1',
    exact: true,
    title: 'Module-1',
    main: () => <Module1 />,
    permission: [ROLES.ADMIN, ROLES.MANAGER, ROLES.CUSTOMER],
  },
  {
    path: '/module-2',
    exact: true,
    title: 'Module-2',
    main: () => <Module2 />,
    permission: [ROLES.CUSTOMER],
  },
];

const PrivateRoutes = () => {
  let allowedRoutes = [];
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  allowedRoutes = getAllowedRoutes(routes);

  return (
    <>
      <Sidebar routes={allowedRoutes} />
      <MapAllowedRoutes routes={allowedRoutes} isAddNotFound />
    </>
  );
};

export default PrivateRoutes;
