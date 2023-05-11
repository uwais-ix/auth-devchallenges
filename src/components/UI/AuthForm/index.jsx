import {useState} from 'react';
import {auth} from '../../../firebaseConfig';

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

    const resp = await onSubmit(credentials?.email, credentials?.password);
    // todo provide user feedback

    setSubmitting(false);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <input
          type='email'
          onChange={(e) =>
            setCredentials({...credentials, email: e.target.value})
          }
        />
      </div>
      <div>
        <input
          type='password'
          onChange={(e) =>
            setCredentials({...credentials, password: e.target.value})
          }
        />
      </div>

      <button
        type='submit'
        disabled={submitting}
      >
        {submitText}
      </button>
    </form>
  );
};

export default AuthForm;
