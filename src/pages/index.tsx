import ItemCard from '@/component/itemCard';
import getFirebaseApp from '@/config/firebase';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { signInWithGoogle, signInWithFacebook } from '../pages/api/auth'; // Importa funções de autenticação do Firebase
import { getItemsFirebase } from './api/item';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
      const auth = getAuth(getFirebaseApp());
      onAuthStateChanged(auth, (userLogged) => {
      if (sessionStorage.getItem(`firebase:authUser:${process.env.apiKey}:[DEFAULT]`)) {
        // router.push('/main');
        setUser(userLogged);
      }
    });
    if (user) {
      getItems();
    }
  }, [user]);

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

  const getItems = async () => {
    try {
      let result = await getItemsFirebase();
      if (result != null) {
        console.log(result);
        setItems(result);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {user ? (
        <>
        <div>
          <h2>Olá {user.displayName}, seja bem vindo(a) a lista de casamento Grace e Marco!</h2>
        </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'scroll',
            overflowX: 'hidden',
            width:'100vw',
            maxHeight: '80vh',
            justifyContent: 'center'
          }}>
            {items.map((item:any) => (
              <ItemCard
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
                quantity={item.quantity}
                selected={item.selected}
              />
            ))}
          </div>
        </>
      ) : (
        <div style={{ backgroundColor: '#444', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', margin: '0px 25px 0px 25px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
          <div>
            <h1>Acesso</h1>
            <img src="icon.png" alt="Presente Icon" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px' }} />
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button onClick={handleGoogleLogin}>Entrar com Google</button>
            <button onClick={handleFacebookLogin}>Entrar com Facebook</button>
          </div>
        </div>
      )
      }
    </div >
  );
}

