import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUN3S-HbMmBchK6MuMFFRKg34GR5ZTPHY",
  authDomain: "tournament2-1b554.firebaseapp.com",
  projectId: "tournament2-1b554",
  storageBucket: "tournament2-1b554.appspot.com",
  messagingSenderId: "778017154011",
  appId: "1:778017154011:web:9023f7bb3136138a017dfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};