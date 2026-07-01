import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace these placeholders with your actual Firebase config!
// You can find this in your Firebase Console -> Project Settings -> General -> Your apps
const firebaseConfig = {
  apiKey: "AIzaSyDO3Bigp-KOfT2_0vTizrIg2BqhPdH6Eqs",
  authDomain: "uvuv-69d0d.firebaseapp.com",
  projectId: "uvuv-69d0d",
  storageBucket: "uvuv-69d0d.firebasestorage.app",
  messagingSenderId: "673779997387",
  appId: "1:673779997387:web:ca62f7d487f4f73796d94e",
  measurementId: "G-VMWGM2TMM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, app };
