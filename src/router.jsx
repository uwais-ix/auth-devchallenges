import {createBrowserRouter} from 'react-router-dom';

import App from './App';
import Auth from './pages/Auth';

import {auth} from './firebaseConfig';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <h1>
            you are logged in {' '}
            <span
              className='text-blue-400 hover:cursor-pointer hover:text-blue-600 hover:opacity-95 transition-all duration-150'
              onClick={() => auth.signOut()}
            >
              log out
            </span>
            {' '}
            <span
              className='text-blue-400 hover:cursor-pointer hover:text-blue-600 hover:opacity-95 transition-all duration-150'
              onClick={() =>console.log(auth)}
            >
              log auth
            </span>
          </h1>
        ),
      },
      {
        path: '/login',
        element: <Auth login />,
      },
      {
        path: '/signup',
        element: <Auth />,
      },
    ],
  },
]);

export default router;
