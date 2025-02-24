import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM7Ce2NcyazAIlpMo6_08WkrYexTMvoW4",
  authDomain: "spaceplane-b8b00.firebaseapp.com",
  projectId: "spaceplane-b8b00",
  storageBucket: "spaceplane-b8b00.firebasestorage.app",
  messagingSenderId: "402644861588",
  appId: "1:402644861588:web:404b8b7a14b116669d2a81",
  measurementId: "G-34HPKDT3S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);



// Import the functions you need from the SDKs you need
