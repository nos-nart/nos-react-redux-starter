import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Layout from '../components/Layout';

const NotFound = React.lazy(() => import('./NotFound'));

const routes = [
  { path: '/', exact: true, main: () => <Home /> },
  { path: '/about', exact: true, main: () => <About /> },
];

const AppRouter = () => (
  <Suspense>
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            component={route.main}
            path={route.path}
            exact={route.exact}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Suspense>
);

export default AppRouter;
