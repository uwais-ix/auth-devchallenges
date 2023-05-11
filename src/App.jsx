import {useEffect} from 'react';

import {useNavigate, useLocation} from 'react-router-dom';
import {Outlet} from 'react-router-dom';

import {auth} from './firebaseConfig';
import {onAuthStateChanged} from 'firebase/auth';

import Footer from './components/Footer';

const notAuthRoutes = [{path: '/login'}, {path: '/signup'}];

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is logged in
        navigate('/');
      } else if (
        !user &&
        !notAuthRoutes.some((route) => route.path === location.pathname)
      ) {
        // user not logged in and on a protected route
        navigate('/login');
      }
    });
  }, [location.pathname, navigate]);

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
