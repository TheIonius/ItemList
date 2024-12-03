// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCPwrWa8N7aKMyeyS1qatWOQgju1dUHcJg",
  authDomain: "itemlist-92d83.firebaseapp.com",
  projectId: "itemlist-92d83",
  storageBucket: "itemlist-92d83.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "199753430860",
  appId: "1:199753430860:web:c9513f37e82b245f0b81e9",
  measurementId: "G-VJFCJV8504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };