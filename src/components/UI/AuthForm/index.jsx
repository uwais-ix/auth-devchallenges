import {useState} from 'react';
import {toast} from 'react-toastify';
import {RiLock2Fill, RiMailFill} from 'react-icons/ri';

const AuthForm = ({
  submitText = 'Click',
  onSubmit = () => {
    throw Error('onSubmit Function not provided || AuthForm Component');
  },
}) => {
  const [credentials, setCredentials] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // const resp = await onSubmit(credentials?.email, credentials?.password);
    toast('toasting away your worries');
    // todo provide user feedback

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
        className='submit_button'
      >
        {submitText}
      </button>
    </form>
  );
};

export default AuthForm;
