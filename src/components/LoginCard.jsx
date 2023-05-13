import {useNavigate} from 'react-router-dom';

import AuthForm from './UI/AuthForm';
import Logo from './UI/Logo';
import SocialAuth from './UI/SocialAuth';
import {motion} from 'framer-motion';

import {Authenticator} from '../BaaS/auth-firebase';

const LoginCard = () => {
  const navigate = useNavigate();

  const loginWithEmailPassword = (...args) => {
    return Authenticator('login/with_emailPassword', ...args);
  };

  return (
    <motion.div
      className='card'
      initial={{
        x: 100,
        opacity: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
    >
      <Logo className='mb-7' />

      <h1 className='font-semibold text-xl'>Login</h1>
      <AuthForm
        submitText={'Login'}
        onSubmit={loginWithEmailPassword}
      />

      <SocialAuth login />

      <span className='form_alternate'>
        Already a member?{' '}
        <span
          className='alternate_action_link'
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </span>
      </span>
    </motion.div>
  );
};

export default LoginCard;
