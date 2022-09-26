// for using firebase

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// create env must
const firebaseConfig = {
    apiKey: "AIzaSyAWCgWLRDYk7t1SSf93Y_cSwauojg43SFU",
    authDomain: "cart-eadfc.firebaseapp.com",
    projectId: "cart-eadfc",
    storageBucket: "cart-eadfc.appspot.com",
    messagingSenderId: "195440508131",
    appId: "1:195440508131:web:f31fa57b0ea070920f99d6",
    measurementId: "G-1L0W9ZGJMY"
};


firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;