import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export const getItems = async () => {
  const col = collection(db, 'items');
  const snapshot = await getDocs(col);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getItemById = async (id) => {
  if (!id) return null;
  const ref = doc(db, 'items', id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};

export const getItemsByCategory = async (categoryId) => {
  if (!categoryId) return getItems();
  const col = collection(db, 'items');
  const q = query(col, where('category', '==', categoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};