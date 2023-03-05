import { db } from "./firebase-config";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const createDocument = async (data, collectionName) => {
  try {
    await addDoc(collection(db, collectionName), data);
  } catch (err) {
    console.log("error");
  }
};

const updateDocument = async (docId, data, collectionName) => {
  try {
    const ref = doc(db, collectionName, docId);
    await updateDoc(ref, data);
  } catch (err) {
    console.log(err);
  }
};

const deleteDocument = async (docId, collectionName) => {
  try {
    const ref = doc(db, collectionName, docId);
    await deleteDoc(ref);
  } catch (err) {
    console.log(err);
  }
};

export { createDocument, updateDocument, deleteDocument };
