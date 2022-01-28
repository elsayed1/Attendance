// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // TODO: Add the keys to env variables
  apiKey: 'AIzaSyCeRknp2Zbs-ZqCzlTmYWrQdAz2mWy-eTs',
  authDomain: 'attendance-64aa3.firebaseapp.com',
  projectId: 'attendance-64aa3',
  storageBucket: 'attendance-64aa3.appspot.com',
  messagingSenderId: '897823560545',
  appId: '1:897823560545:web:e8f836d629f64e66286b20',
  measurementId: 'G-SFYPYZRPQJ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
