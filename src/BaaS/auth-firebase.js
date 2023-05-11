import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {auth} from '../firebaseConfig';

const apiWrapper = (cb) => {
  try {
    return cb();
  } catch (error) {
    return error;
  }
};

export const loginWithEmailPassword = (email, password) => {
  return apiWrapper(() => {
    return signInWithEmailAndPassword(auth, email, password);
  });
};

export const loginWithGoogle = () => {
  return apiWrapper(() => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
    return signInWithPopup(auth, provider);
  });
};

export const createUserWithEmailPassword = (email, password) => {
  return apiWrapper(() => {
    return createUserWithEmailAndPassword(auth, email, password);
  });
};

export const logout = () => {
  return apiWrapper(() => {
    return signOut(auth);
  });
};
