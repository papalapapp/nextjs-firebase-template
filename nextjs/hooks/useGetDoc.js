import { useState, useEffect } from "react";
import { db } from "../firebase/firebase-config";
import { doc, onSnapshot } from "firebase/firestore";

const useGetDoc = (collectionName, docName) => {
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, collectionName, docName);
    const unsub = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setDocument({ ...doc.data(), id: doc.id });
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return () => unsub();
  }, [collectionName, docName]);

  return { loading, document };
};

export default useGetDoc;
