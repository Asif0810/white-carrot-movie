// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtbiaYuASaGo3t-U0dTRgAHRn9a6n41go",
  authDomain: "white-carrot-movies.firebaseapp.com",
  projectId: "white-carrot-movies",
  storageBucket: "white-carrot-movies.appspot.com",
  messagingSenderId: "686350958120",
  appId: "1:686350958120:web:ef282b0300c3556cd8bf1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
