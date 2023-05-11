import AuthForm from './UI/AuthForm';
import Logo from './UI/Logo';
import SocialAuth from './UI/SocialAuth';

import {loginWithEmailPassword} from '../BaaS/auth-firebase';

const LoginCard = () => {
  return (
    <div className='card'>
      <Logo className='mb-7' />

      <h1 className='font-semibold text-xl'>Login</h1>
      <AuthForm
        submitText={'Login'}
        onSubmit={loginWithEmailPassword}
      />

      <SocialAuth />

      <span className='form_alternate'>
        Already a member? <span className='alternate_action_link'>Login</span>
      </span>
    </div>
  );
};

export default LoginCard;
