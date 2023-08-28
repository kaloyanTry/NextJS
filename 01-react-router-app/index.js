import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritiesContextProvider } from './store/favorities-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavoritiesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritiesContextProvider>
  </React.StrictMode>
);
