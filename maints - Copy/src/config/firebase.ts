// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyKQgt2rfg0TCsca712xq0ROacgexiAKU",
  authDomain: "react-course-a169e.firebaseapp.com",
  projectId: "react-course-a169e",
  storageBucket: "react-course-a169e.appspot.com",
  messagingSenderId: "505242283529",
  appId: "1:505242283529:web:ceb717199edeb3bf65d2d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
