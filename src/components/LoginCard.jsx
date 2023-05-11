import AuthForm from './UI/AuthForm';
import Logo from './UI/Logo';

import {loginWithEmailPassword} from '../BaaS/auth-firebase';

const LoginCard = () => {
  return (
    <div>
      <Logo />

      <h1>Login</h1>
      <AuthForm
        submitText={'Login'}
        onSubmit={loginWithEmailPassword}
      />
    </div>
  );
};

export default LoginCard;
