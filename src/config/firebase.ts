// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyoPFDoWw6PLVada7b5tddEgqV4LBMKfo",
  authDomain: "pipe-project-c2807.firebaseapp.com",
  databaseURL: "https://pipe-project-c2807-default-rtdb.firebaseio.com",
  projectId: "pipe-project-c2807",
  storageBucket: "pipe-project-c2807.appspot.com",
  messagingSenderId: "706348672812",
  appId: "1:706348672812:web:06fc5f0a6eea27b01eee89",
  measurementId: "G-5XQ7GRL8MQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };