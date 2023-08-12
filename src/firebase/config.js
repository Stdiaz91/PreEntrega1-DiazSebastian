// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDsIulI1fdN-UqwZMMZXM1L8Tnc-xweNDU",
  authDomain: "shopgun-51629.firebaseapp.com",
  projectId: "shopgun-51629",
  storageBucket: "shopgun-51629.appspot.com",
  messagingSenderId: "811745576488",
  appId: "1:811745576488:web:341e14d97869ed9bcf971d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);