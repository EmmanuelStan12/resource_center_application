import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import theme from './utils/Theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Router from './Router';
import { Provider } from 'react-redux';
import store from './logic/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
          <Router />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
);
