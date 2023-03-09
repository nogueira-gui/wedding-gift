import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const addUser = async (user: {
    uid: string;
    name: string | null;
    email: string | null;
    image: string | null;
    reservedItems: string[];
}) => {
    try {
        // Cria uma referência à coleção 'users' no Firestore
        const db = getFirestore();
        const usersCollection = collection(db, 'events', 'aXYDDaSe64Xz20HFH5Hs', 'users');

        // Verifica se o usuário já existe na coleção 'users'
        const userQuery = query(usersCollection, where('uid', '==', user.uid));
        const userQuerySnapshot = await getDocs(userQuery);
        if (userQuerySnapshot.empty) {
            // Adiciona o usuário à coleção 'users'
            const userRef = await addDoc(usersCollection, user);
            return userRef.id;
        }    
        return null;
    } catch (err) {
        console.error("Erro que aconteceu: ",err)
        throw err;
    }
};
