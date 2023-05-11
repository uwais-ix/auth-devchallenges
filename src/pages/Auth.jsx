import LoginCard from '../components/LoginCard';
import SignupCard from '../components/SignupCard';

const Auth = ({login = false}) => {
  return <div className='container'>{login ? <LoginCard /> : <SignupCard />}</div>;
};

export default Auth;
