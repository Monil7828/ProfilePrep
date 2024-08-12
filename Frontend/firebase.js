// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkkPS0QmGmELML1pPGOqeMYsw9ikKZdYY",
  authDomain: "profileprep-67739.firebaseapp.com",
  projectId: "profileprep-67739",
  storageBucket: "profileprep-67739.appspot.com",
  messagingSenderId: "457597445208",
  appId: "1:457597445208:web:2aa9ce44d4e089c2ead62d",
  measurementId: "G-PTPMD7QV0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

