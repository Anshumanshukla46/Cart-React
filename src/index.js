import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWCgWLRDYk7t1SSf93Y_cSwauojg43SFU",
  authDomain: "cart-eadfc.firebaseapp.com",
  projectId: "cart-eadfc",
  storageBucket: "cart-eadfc.appspot.com",
  messagingSenderId: "195440508131",
  appId: "1:195440508131:web:f31fa57b0ea070920f99d6",
  measurementId: "G-1L0W9ZGJMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

