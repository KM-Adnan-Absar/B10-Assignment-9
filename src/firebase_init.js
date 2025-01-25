// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcdTZlcUZseHck0FI6Y2xJu0BTfz3qFnA",
  authDomain: "assignment-09-winter-cloth.firebaseapp.com",
  projectId: "assignment-09-winter-cloth",
  storageBucket: "assignment-09-winter-cloth.firebasestorage.app",
  messagingSenderId: "388494247019",
  appId: "1:388494247019:web:d4dba8b9e35a7be5e2dd2e",
  measurementId: "G-NQ8NJS80BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);