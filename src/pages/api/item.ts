import { getFirestore, collection, query, where, getDocs, DocumentData } from 'firebase/firestore';

export const getItemsFirebase = async () => {
    try {
        const db = getFirestore();
        const q = query(collection(db, "events/aXYDDaSe64Xz20HFH5Hs/items")/*, where("selected", "==", true)*/);
        const querySnapshot = await getDocs(q);
        const items : DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            const item = doc.data();
            item.id = doc.id;
            items.push(item);
        });
        return items;
    } catch (err) {
        console.error("Erro que aconteceu: ",err)
        throw err;
    }
}