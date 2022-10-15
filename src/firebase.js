// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwqWd-FWZ8Q7eGPgx5YDKlZim1tzA0ae4",
  authDomain: "spicy-hut-1.firebaseapp.com",
  projectId: "spicy-hut-1",
  storageBucket: "spicy-hut-1.appspot.com",
  messagingSenderId: "758170533008",
  appId: "1:758170533008:web:f5f7664712412ff3ffac15",
  measurementId: "G-RG4B21REFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);