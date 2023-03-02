import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Aqui devem ser inseridas as credenciais do projeto Firebase
  apiKey: 'SEU_API_KEY',
  authDomain: 'SEU_AUTH_DOMAIN',
  projectId: 'SEU_PROJECT_ID',
  storageBucket: 'SEU_STORAGE_BUCKET',
  messagingSenderId: 'SEU_MESSAGING_SENDER_ID',
  appId: 'SEU_APP_ID'
};

// Inicializa o app do Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
