import AuthForm from './UI/AuthForm';
import Logo from './UI/Logo';

import {createUserWithEmailPassword} from '../BaaS/auth-firebase';

const SignupCard = () => {
  return (
    <div>
      <Logo />

      <h1>Join thousands of learners from around the world </h1>
      <p>
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </p>

      <AuthForm
        submitText={'Start coding now'}
        onSubmit={createUserWithEmailPassword}
      />
    </div>
  );
};

export default SignupCard;
