import {useEffect} from 'react';

import {useNavigate, useLocation} from 'react-router-dom';
import {Outlet} from 'react-router-dom';

import {auth} from './firebaseConfig';
import {onAuthStateChanged} from 'firebase/auth';

import Footer from './components/Footer';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// not protected routes
const notAuthRoutes = [{path: '/login'}, {path: '/signup'}];

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // check if user is on a protected route
      const isOnAuthRoute = !notAuthRoutes.some(
        (route) => route.path === location.pathname
      );

      // redirect on user login but not token refresh, user navigation..
      if (user && !isOnAuthRoute) {
        navigate('/');
      }
      // prevent access to protected routes when not logged in
      else if (!user && isOnAuthRoute) {
        navigate('/login');
      }
    });
  }, [location.pathname, navigate]);

  return (
    <>
      <Outlet />
      <Footer />
      <ToastContainer position='bottom-right'/>
    </>
  );
};

export default App;
