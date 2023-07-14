import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfFnrE6w1smM5kWyMscmdI8Lf_audsqew",
  authDomain: "chatter-app-db5e3.firebaseapp.com",
  projectId: "chatter-app-db5e3",
  storageBucket: "chatter-app-db5e3.appspot.com",
  messagingSenderId: "160632969336",
  appId: "1:160632969336:web:38edbd28546f59fff1b58d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
