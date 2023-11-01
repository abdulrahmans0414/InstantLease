// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APT_KEY,
  authDomain: "instant-lease.firebaseapp.com",
  projectId: "instant-lease",
  storageBucket: "instant-lease.appspot.com",
  messagingSenderId: "771301210338",
  appId: "1:771301210338:web:2de6a5670b7ed6705986bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);