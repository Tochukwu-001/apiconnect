// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlZ9UUlzX_iitfflTxn_7zBKCtApmO_Wg",
  authDomain: "apiconnect-866a5.firebaseapp.com",
  projectId: "apiconnect-866a5",
  storageBucket: "apiconnect-866a5.firebasestorage.app",
  messagingSenderId: "376653443047",
  appId: "1:376653443047:web:13ab1aa7d966136d9bd742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage  = getStorage(app)
export{db, storage}
