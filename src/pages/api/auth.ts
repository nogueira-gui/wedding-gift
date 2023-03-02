import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import firebaseApp from '../../config/firebase';

// Cria as instâncias dos provedores de autenticação do Google e Facebook
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Cria a instância do objeto de autenticação do Firebase
const auth = getAuth(firebaseApp);

// Função de login com e-mail e senha
export const signInWithEmailAndPassword = async (email: string, password: string) => {
//   await signInWithEmailAndPassword(auth, email, password);
};

// Função de login com Google
export const signInWithGoogle = async () => {
  await signInWithPopup(auth, googleProvider);
};

// Função de login com Facebook
export const signInWithFacebook = async () => {
  await signInWithPopup(auth, facebookProvider);
};
