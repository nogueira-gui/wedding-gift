import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Aqui devem ser inseridas as credenciais do projeto Firebase
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

// Retorna uma nova instância do Firebase
const getFirebaseApp = () => {
  const app = initializeApp(firebaseConfig);
  return app;
};

export default getFirebaseApp;
