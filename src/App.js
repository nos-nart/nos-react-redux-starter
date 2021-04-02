import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import AppRouter from './pages/AppRouter';

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
