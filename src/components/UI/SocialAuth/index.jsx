import Facebook from '../../../assets/Facebook.svg';
import Github from '../../../assets/Gihub.svg';
import Googel from '../../../assets/Google.svg';
import Twitter from '../../../assets/Twitter.svg';

const SocialAuth = () => {
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
        />
        <img
          src={Facebook}
          alt='facebook logo'
          className='logo'
        />
        <img
          src={Twitter}
          alt='twitter logo'
          className='logo'
        />
        <img
          src={Github}
          alt='github logo'
          className='logo'
        />
      </div>
    </div>
  );
};

export default SocialAuth;
