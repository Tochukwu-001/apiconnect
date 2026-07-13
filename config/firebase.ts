// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-AVNnBA2f9389aIzi5g_Wpn5M3m6phIY",
  authDomain: "apiconnect-71c58.firebaseapp.com",
  projectId: "apiconnect-71c58",
  storageBucket: "apiconnect-71c58.firebasestorage.app",
  messagingSenderId: "575549489210",
  appId: "1:575549489210:web:7e25e1e40b681961cbf503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export{db}