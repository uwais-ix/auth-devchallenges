import {useNavigate} from 'react-router-dom';

import AuthForm from './UI/AuthForm';
import Logo from './UI/Logo';
import SocialAuth from './UI/SocialAuth';
import {motion} from 'framer-motion';

import {createUserWithEmailPassword} from '../BaaS/auth-firebase';

const SignupCard = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className='card'
      initial={{
        x: -100,
        opacity: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
    >
      <Logo className='mb-7' />

      <h1 className='font-semibold text-xl mb-2'>
        Join thousands of learners from around the world{' '}
      </h1>
      <p className='max-w-sm text-slate-800'>
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </p>

      <AuthForm
        submitText={'Start coding now'}
        onSubmit={createUserWithEmailPassword}
      />
      <SocialAuth />

      <span className='form_alternate'>
        Already a member?{' '}
        <span
          className='alternate_action_link'
          onClick={() => navigate('/login')}
        >
          Login
        </span>
      </span>
    </motion.div>
  );
};

export default SignupCard;
