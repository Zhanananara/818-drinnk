import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoGFrQaFvZescDPgkqxWHTpMx37hVfUjQ",
  authDomain: "drink-31866.firebaseapp.com",
  databaseURL: "https://drink-31866-default-rtdb.firebaseio.com",
  projectId: "drink-31866",
  storageBucket: "drink-31866.appspot.com",
  messagingSenderId: "277616479851",
  appId: "1:277616479851:web:6201914993c3e8d2806b2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
