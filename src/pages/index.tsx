import Header from '@/component/Header';
import ItemCard from '@/component/itemCard';
import getFirebaseApp from '@/config/firebase';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { signInWithGoogle, signInWithFacebook } from '../pages/api/auth'; // Importa funções de autenticação do Firebase
import { getItemsFirebase, updateItemFirebase } from './api/item';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const [items, setItems] = useState<any>([]);
  const [selectedItems, setSelectedItems] = useState<any>([]);

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
  }, [user, selectedItems]);

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

  const handleSelectedItem = (childItem:any, selected: boolean) => {
    let items = selectedItems;
    if (selected) {
      items.push(childItem);
      setSelectedItems(items);
    } else {
      items.pop(childItem);
      setSelectedItems(items);
    }
    childItem.selected= selected;
    updateItemFirebase(childItem, user?.uid);
  }

  return (
    <div>
      {user ? (
        <>
        
          <Header displayName={user.displayName}/>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'scroll',
            overflowX: 'hidden',
            width:'100vw',
            maxHeight: '80vh',
            justifyContent: 'center'
          }}>
            {items.map((item:any, index:any) => (
              <ItemCard
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                quantity={item.quantity}
                selected={item.selected}
                handleSelectedItem={handleSelectedItem}
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

