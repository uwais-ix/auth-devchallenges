import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import {auth} from '../firebaseConfig';

const apiWrapper = async (cb) => {
  try {
    return await cb();
  } catch (error) {
    return error;
  }
};

const PROVIDERS = {
  facebook: {
    scopes: [],
    AuthProvider: FacebookAuthProvider,
    method: 'popup',
  },
  google: {
    scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
    AuthProvider: GoogleAuthProvider,
    method: 'popup',
  },
  github: {
    scopes: [],
    AuthProvider: GithubAuthProvider,
    method: 'popup',
  },
  twitter: {
    scopes: [],
    AuthProvider: TwitterAuthProvider,
    method: 'popup',
  },
};

export const Authenticator = (type = 'login/with_emailPassword', ...args) => {
  switch (type) {
    case 'login/with_emailPassword':
      return apiWrapper(() => {
        return signInWithEmailAndPassword(auth, ...args);
      });

    case 'signup/with_emailPassword':
      return apiWrapper(() => {
        return createUserWithEmailAndPassword(auth, ...args);
      });

    case 'with_provider':
      return apiWrapper(() => {
        const [provider_type] = args;
        const {scopes, AuthProvider, method} = PROVIDERS[provider_type];

        const firebaseProvider = new AuthProvider();
        scopes.forEach((scope) => firebaseProvider.addScope(scope));

        if (method === 'popup') {
          return signInWithPopup(auth, firebaseProvider);
        }

        throw new Error(`invalid method ${method} || auth-firebase.js/login()`);
      });

    case 'logout':
      return apiWrapper(() => {
        return signOut(auth);
      });
    default:
      throw new Error(`invalid type ${type} || auth-firebase.js/login()`);
  }
};
