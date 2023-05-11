import React from 'react';
import ReactDOM from 'react-dom/client';

import {RouterProvider} from 'react-router-dom';
import router from './router';

import './firebaseConfig';
import '@fontsource/poppins';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
