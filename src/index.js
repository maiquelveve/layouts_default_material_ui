import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import App from './App';

ReactDOM.render((
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
      
  ),
  document.getElementById('root')
);