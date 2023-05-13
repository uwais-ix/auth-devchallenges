import {toast} from 'react-toastify';
import Facebook from '../../../assets/Facebook.svg';
import Github from '../../../assets/Gihub.svg';
import Googel from '../../../assets/Google.svg';
import Twitter from '../../../assets/Twitter.svg';

import {Authenticator as AuthLogin} from '../../../BaaS/auth-firebase';

const SocialAuth = ({login = false}) => {
  const handleClick = async (e) => {
    const provider = e.target.getAttribute('data-provider');
    const resp = await AuthLogin('with_provider', provider);

    if (resp?.code) {
      toast.error(resp?.code);
    } else {
      const feedbackMessage = login ? 'Login successful' : 'Sign up successful';
      toast.success(feedbackMessage);
    }
  };

  return (
    <div className='flex flex-col items-center my-5 space-y-4'>
      <span className='font-light text-xs text-slate-500'>
        or continue with these social profile
      </span>

      <div className='flex justify-center space-x-4'>
        <img
          src={Googel}
          alt='google logo'
          className='logo'
          data-provider='google'
          onClick={handleClick}
        />
        <img
          src={Facebook}
          alt='facebook logo'
          className='logo'
          data-provider='facebook'
          onClick={handleClick}
        />
        <img
          src={Twitter}
          alt='twitter logo'
          className='logo'
          data-provider='twitter'
          onClick={handleClick}
        />
        <img
          src={Github}
          alt='github logo'
          className='logo'
          data-provider='github'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SocialAuth;
