import AuthForm from './UI/AuthForm';
import Logo from './UI/Logo';
import SocialAuth from './UI/SocialAuth';

import {createUserWithEmailPassword} from '../BaaS/auth-firebase';

const SignupCard = () => {
  return (
    <div className='card'>
      <Logo className='mb-7' />

      <h1 className='font-semibold text-xl mb-2'>
        Join thousands of learners from around the world{' '}
      </h1>
      <p className='max-w-sm'>
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </p>

      <AuthForm
        submitText={'Start coding now'}
        onSubmit={createUserWithEmailPassword}
      />
      <SocialAuth />

      <span className='form_alternate'>
        Already a member? <span className='alternate_action_link'>Sign Up</span>
      </span>
    </div>
  );
};

export default SignupCard;
