import { useState, useEffect } from 'react';
import { signInWithGoogle, signInWithFacebook } from '../pages/api/auth'; // Importa funções de autenticação do Firebase

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {

  }, [user]);


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleGoogleLogin = async () => {
    try {
      setUser(await signInWithGoogle()); // Chama a função de login com Google
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      setUser(await signInWithFacebook());// Chama a função de login com Facebook
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Chama a função de login com e-mail e senha aqui
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <p>Bem-vindo, {user}!</p>
      ) : (
        <div style={{ backgroundColor: '#444', display: 'flex', flexDirection: 'column', alignItems: 'center' ,padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
          <div>
            <h1>Acesso</h1>
            <img src="icon.png" alt="Presente Icon" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px' }} />
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
            <button onClick={handleFacebookLogin}>Sign in with Facebook</button>
          </div>
        </div>
      )}
    </div>
  );
}

