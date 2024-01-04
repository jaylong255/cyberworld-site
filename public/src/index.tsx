import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from "./theme";
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

