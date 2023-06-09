// links to my portfolio and devchallenges.io
const URL = {
  uwais: 'https://uwaisix.netlify.app/',
  devchallenges: 'https://devchallenges.io',
};

const Footer = () => {
  // open links in new tab
  const onClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='flex justify-between text-xs font-light text-slate-500 mt-4'>
      <span className=''>
        created by{' '}
        <span
          onClick={() => onClick(URL.uwais)}
          className='footer_link'
        >
          uwais-ix
        </span>
      </span>

      <span
        onClick={() => onClick(URL.devchallenges)}
        className='footer_link'
      >
        devChallenges.io
      </span>
    </div>
  );
};

export default Footer;
