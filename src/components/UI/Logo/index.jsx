import devchallengesLight from '../../../assets/devchallenges-light.svg';
import devchallengesDark from '../../../assets/devchallenges.svg';

const Logo = ({className = ''}) => {
  const darkMode = document.querySelector('html').classList.contains('dark');

  return (
    <img
      src={darkMode ? devchallengesLight : devchallengesDark}
      alt='devchallenges light logo'
      className={`${className}`}
    />
  );
};

export default Logo;
