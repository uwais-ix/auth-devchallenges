import {useState} from 'react';
import {toast} from 'react-toastify';
import {RiLock2Fill, RiMailFill} from 'react-icons/ri';
import {auth} from '../../../firebaseConfig';

// authentication form used for both login and signup
const AuthForm = ({
  submitText = 'Click',
  onSubmit = (email, password) => {
    throw Error('onSubmit Function not provided || AuthForm Component');
  },
}) => {
  // credentials state
  const [credentials, setCredentials] = useState({});

  // submitting state to prevent multiple submissions
  const [submitting, setSubmitting] = useState(false);

  // submit handler
  const onFormSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    // submit credentials to provided props.onSubmit function
    const resp = await onSubmit(credentials?.email, credentials?.password);
    if (resp?.code) {
      toast.error(resp?.code);
    } else {
      toast('toasting away your worries');
    }

    setSubmitting(false);
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className='form'
    >
      <div className='form_input_group'>
        <RiMailFill className='icon' />
        <input
          type='email'
          placeholder='Email'
          onChange={(e) =>
            setCredentials({...credentials, email: e.target.value})
          }
          className='form_input'
        />
      </div>
      <div className='form_input_group'>
        <RiLock2Fill className='icon' />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) =>
            setCredentials({...credentials, password: e.target.value})
          }
          className='form_input'
        />
      </div>

      <button
        type='submit'
        disabled={submitting}
        className='submit_button disabled:opacity-50'
      >
        {submitText}
      </button>
    </form>
  );
};

export default AuthForm;
