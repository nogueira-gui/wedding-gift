import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import getFirebaseApp from '../../config/firebase';

// Cria as instâncias dos provedores de autenticação do Google e Facebook
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Cria a instância do objeto de autenticação do Firebase
const auth = getAuth(getFirebaseApp());

// Função de login com e-mail e senha
export const signInWithEmailAndPassword = async (email: string, password: string) => {
  // await signInWithEmailAndPassword(auth, email, password);
  console.log("Teste")
};

// Função de login com Google
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user.displayName;
};

// Função de login com Facebook
export const signInWithFacebook = async () => {
  const result = await signInWithPopup(auth, facebookProvider);
  return result.user.displayName;
};
