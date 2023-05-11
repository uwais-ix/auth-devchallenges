import {createBrowserRouter} from 'react-router-dom';

import App from './App';
import Auth from './pages/Auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <h1>you are logged in</h1>,
      },
      {
        path: '/login',
        element: <Auth login/>,
      },
      {
        path: '/signup',
        element: <Auth />,
      },
    ],
  },
]);

export default router;
