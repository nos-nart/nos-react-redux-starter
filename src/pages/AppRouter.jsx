import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import PrivateRoute from '../components/PrivateRoute';

const NotFound = React.lazy(() => import('./NotFound'));
const Home = React.lazy(() => import('./Home/Home'));
const About = React.lazy(() => import('./About/About'));
const Protected = React.lazy(() => import('./Protected/Protected'));
const Login = React.lazy(() => import('./Login/Login'));

const routes = [
  { path: '/', exact: true, main: () => <Home /> },
  { path: '/about', exact: false, main: () => <About /> },
  { path: '/login', exact: false, main: () => <Login /> },
];

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
        <Route path="*">
          <NotFound />
        </Route>
        <PrivateRoute path="/protected">
          <Protected />
        </PrivateRoute>
      </Switch>
    </Layout>
  </Suspense>
);

export default AppRouter;
