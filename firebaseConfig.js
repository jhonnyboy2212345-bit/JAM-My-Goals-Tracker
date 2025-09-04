// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi-CWiGhCr0UpYzsqA6cRxcOtTMO1bMyg",
  authDomain: "my-goals-main-c61a8.firebaseapp.com",
  projectId: "my-goals-main-c61a8",
  storageBucket: "my-goals-main-c61a8.firebasestorage.app",
  messagingSenderId: "264767945344",
  appId: "1:264767945344:web:d09616a83abc4f9e950465"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);