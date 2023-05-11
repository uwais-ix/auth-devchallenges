import AuthForm from './UI/AuthForm';
import Logo from './UI/Logo';

const LoginCard = () => {
  const onSubmit = (email, password) => {

  };
  return (
    <div>
      <Logo />

      <h1>Login</h1>
      <AuthForm
        submitText={'Login'}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default LoginCard;
