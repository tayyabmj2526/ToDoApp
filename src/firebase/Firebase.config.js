// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2OnI5JxJqzicnXazFwGYCPLg-z2-W9AY",
  authDomain: "todoapp-f3590.firebaseapp.com",
  projectId: "todoapp-f3590",
  storageBucket: "todoapp-f3590.appspot.com",
  messagingSenderId: "1058080207019",
  appId: "1:1058080207019:web:8878deb9728840c5b387ee",
  measurementId: "G-WVTRGV34P5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
