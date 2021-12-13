import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxgiRNQKEfoW3z2kPR_lFpIBjB15WVWIQ",
  authDomain: "tiktok-clone-73cfe.firebaseapp.com",
  projectId: "tiktok-clone-73cfe",
  storageBucket: "tiktok-clone-73cfe.appspot.com",
  messagingSenderId: "584579123318",
  appId: "1:584579123318:web:799744ac2444f38399b757",
  measurementId: "G-PGKVNCEEK2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
