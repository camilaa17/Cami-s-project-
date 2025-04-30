// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW5TTimiIF_J_8Ne9OZwBfyljz6Fx5fK0",
  authDomain: "my-website-ef164.firebaseapp.com",
  projectId: "my-website-ef164",
  storageBucket: "my-website-ef164.firebasestorage.app",
  messagingSenderId: "486644441552",
  appId: "1:486644441552:web:80ea6e55c746a249f5d9d5",
  measurementId: "G-JMCNG5N9X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
