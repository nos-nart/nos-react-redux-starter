import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// import ProtectedRoute from './ProtectedRoute';
import Layout from '../components/Layout';
import PrivateRoutes from './PrivateRoutes';

const NotFound = React.lazy(() => import('../pages/NotFound'));
// const Home = React.lazy(() => import('../pages/Home/Home'));
// const About = React.lazy(() => import('../pages/About/About'));
// const Protected = React.lazy(() => import('../pages/Protected/Protected'));
// const Login = React.lazy(() => import('../pages/Login/Login'));

// const routes = [
//   { path: '/', exact: true, main: () => <Home /> },
//   { path: '/about', exact: true, main: () => <About /> },
//   { path: '/login', exact: true, main: () => <Login /> },
// ];

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Switch>
          {/* {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))} */}
          <PrivateRoutes />
          <Route path="*" component={NotFound} />
          {/* <ProtectedRoute
            exact
            path="/protected"
            component={Protected}
            authenticated
          /> */}
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default AppRouter;
