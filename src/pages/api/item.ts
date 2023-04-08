import { getFirestore, collection, query, where, getDocs, DocumentData, doc, updateDoc, getDoc } from 'firebase/firestore';

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

export const updateItemFirebase = async (item: any, userId: any) => {
    try {
      const db = getFirestore();
      const itemRef = doc(db, 'events', 'aXYDDaSe64Xz20HFH5Hs','items', item.id);
      const itemSnapshot = await getDoc(itemRef);
  
      let newItem = {
        title: item.title,
        description: item.description,
        image: item.image,
        quantity: item.quantity,
        selected: item.selected,
        userId: item.userId
      }
  
      const itemData = itemSnapshot.data();
      if (itemData == undefined || itemData == null) {
        console.error('Item selected does not exist on firebase');
        return;
      }
      //Verifica se o userId é o mesmo registrado no item e se está selecionado no firestore
      if (itemData && itemData.userId === userId && itemData.selected) {
        // remove userId if it already exists and matches the given userId
        newItem.userId="";
      } else if (!itemData.selected) {
        // add userId if it doesn't exist or if it exists but doesn't match the given userId
        newItem.userId = userId;
      }
      //Atualiza somente se houver alteração no userId, caso não força atualização
      if (item.userId != newItem.userId) {
          await updateDoc(itemRef, newItem);
          console.log('Item updated successfully');
      } else {
        window.alert('O item já foi selecionado por outro usuário!');
        window.location.reload();
        console.log("Page needed to refresh")
      }
    } catch (err) {
      console.error("An error occurred while updating the item: ", err)
      throw err;
    }
  }
  