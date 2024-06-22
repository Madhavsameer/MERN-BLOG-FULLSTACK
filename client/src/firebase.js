// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-final-app-412917.firebaseapp.com",
  projectId: "my-final-app-412917",
  storageBucket: "my-final-app-412917.appspot.com",
  messagingSenderId: "775090139252",
  appId: "1:775090139252:web:72cb319f095f698ef06121",
  measurementId: "G-ZLQCB687TG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
