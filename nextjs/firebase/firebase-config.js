import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB2Wfkt4ZuLyacsI-xkrZCXUFoL31leCRQ",
  authDomain: "nextjs-firebase-template-e506d.firebaseapp.com",
  projectId: "nextjs-firebase-template-e506d",
  storageBucket: "nextjs-firebase-template-e506d.appspot.com",
  messagingSenderId: "104531579022",
  appId: "1:104531579022:web:1b071c7f6441d7010b79df",
  measurementId: "G-M1Q2X26PGM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
