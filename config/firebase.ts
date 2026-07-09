// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHG4cVt8nJIc1iT0gd_Cg5ArjXs84c6Y0",
  authDomain: "apiconnect-e9334.firebaseapp.com",
  projectId: "apiconnect-e9334",
  storageBucket: "apiconnect-e9334.firebasestorage.app",
  messagingSenderId: "1064421539508",
  appId: "1:1064421539508:web:d5fbfb35b27bb2755be1e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export{db}