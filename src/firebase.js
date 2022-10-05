// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqXTbFuhuBM8IDKfJugHwhooQSfyiLeT0',
  authDomain: 'clone-60e58.firebaseapp.com',
  projectId: 'clone-60e58',
  storageBucket: 'clone-60e58.appspot.com',
  messagingSenderId: '1079071975369',
  appId: '1:1079071975369:web:6860f81f90a7cf22c62a18',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
