import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Aqui devem ser inseridas as credenciais do projeto Firebase
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Inicializa o app do Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
