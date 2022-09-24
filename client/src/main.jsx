import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserLocationProvider }  from './helper/UserLocation';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserLocationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </UserLocationProvider>
  </React.StrictMode>
);
