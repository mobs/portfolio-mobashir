import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAh0P6zKbYZ59jPD4-uQkmW9HZ_LbzxYYQ",
  authDomain: "portfolio-mobashir.firebaseapp.com",
  projectId: "portfolio-mobashir",
  storageBucket: "portfolio-mobashir.appspot.com",
  messagingSenderId: "760403339784",
  appId: "1:760403339784:web:705cf0a129925151d8ffbd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);