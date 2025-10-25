// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-fusion-lab-a319a.firebaseapp.com",
  projectId: "ai-fusion-lab-a319a",
  storageBucket: "ai-fusion-lab-a319a.firebasestorage.app",
  messagingSenderId: "76675980969",
  appId: "1:76675980969:web:9bc4e2392fd535247a53b8",
  measurementId: "G-MZDTFR9NER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)