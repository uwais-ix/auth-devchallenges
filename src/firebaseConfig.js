import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyBbQJDkIRDnxRuSufpmnQ79pGU-4O8KXfw',
  authDomain: 'auth-devchallenges-187f4.firebaseapp.com',
  projectId: 'auth-devchallenges-187f4',
  storageBucket: 'auth-devchallenges-187f4.appspot.com',
  messagingSenderId: '1097322965399',
  appId: '1:1097322965399:web:a8def8fcea30787ec3bcd2',
};

// init firebase
const app = initializeApp(firebaseConfig);

// auth obj ref
const auth = getAuth(app);

export {app, auth};
