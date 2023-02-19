import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './context/data-context';
import { BrowserRouter } from 'react-router-dom';
import './style/main.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './style/mui-costum/fontStyle/fontStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
