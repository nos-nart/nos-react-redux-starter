import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import AppRouter from './pages/AppRouter';

const history = createBrowserHistory();

function App() {
  return (
    <>
      <BrowserRouter history={history}>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
