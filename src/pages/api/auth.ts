import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, UserCredential, browserSessionPersistence, setPersistence } from 'firebase/auth';
import getFirebaseApp from '../../config/firebase';

import {addUser} from '../api/users';

// Cria as instâncias dos provedores de autenticação do Google e Facebook
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Cria a instância do objeto de autenticação do Firebase
const auth = getAuth(getFirebaseApp());

// Define a persistência da sessão como localStorage
setPersistence(auth, browserSessionPersistence);

// Função de login com e-mail e senha
export const signInWithEmailAndPassword = async (email: string, password: string) => {
  // await signInWithEmailAndPassword(auth, email, password);
  console.log("Teste")
};

// Função de login com Google
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  console.log(result);
  addSocialLoginUser(result);
  return result.user;
};

// Função de login com Facebook
export const signInWithFacebook = async () => {
  const result = await signInWithPopup(auth, facebookProvider);
  addSocialLoginUser(result);
  return result.user;
};

const addSocialLoginUser = (result: UserCredential) : void => {
  let user = {
    uid: result.user.uid,
    name: result.user.displayName,
    email: result.user.email,
    image: result.user.photoURL,
    reservedItems: [""]
  };
  addUser(user);
}
