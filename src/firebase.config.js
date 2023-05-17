// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apikey,
  authDomain: "cloud-palace-auth.firebaseapp.com",
  projectId: "cloud-palace-auth",
  storageBucket: "cloud-palace-auth.appspot.com",
  messagingSenderId: "108474482057",
  appId: "1:108474482057:web:4a32b44edb112f4b413558",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
