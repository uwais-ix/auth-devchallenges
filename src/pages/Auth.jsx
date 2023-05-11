import LoginCard from '../components/LoginCard';
import SignupCard from '../components/SignupCard';

const Auth = ({login = false}) => {
  return login ? <LoginCard /> : <SignupCard />;
};

export default Auth;
