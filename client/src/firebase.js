// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "madhav-blogs.firebaseapp.com",
  projectId: "madhav-blogs",
  storageBucket: "madhav-blogs.appspot.com",
  messagingSenderId: "647513903590",
  appId: "1:647513903590:web:c88f741d39c87ac70c4627",
  measurementId: "G-BNMLLWSZG9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
