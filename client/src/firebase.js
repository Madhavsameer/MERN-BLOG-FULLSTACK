// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d541f.firebaseapp.com",
  projectId: "mern-blog-d541f",
  storageBucket: "mern-blog-d541f.appspot.com",
  messagingSenderId: "821093024393",
  appId: "1:821093024393:web:da5ecfcd716b2f5aa4bc58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
