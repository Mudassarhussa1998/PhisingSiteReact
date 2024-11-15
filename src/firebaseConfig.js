import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Using the Modular SDK for Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD65SriDmDl6kIPFF_trGHE9YsY_ex-d3M",
  authDomain: "phising-is.firebaseapp.com",
  projectId: "phising-is",
  storageBucket: "phising-is.firebasestorage.app",
  messagingSenderId: "342207687324",
  appId: "1:342207687324:web:799e563960d11ae945db59",
  measurementId: "G-N5DGLXMQ8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firestore database using the Modular SDK
export const db = getFirestore(app);
