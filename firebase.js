// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClsk_TUxnI0vll3ode0rPMWPmy23LqLVw",
  authDomain: "medapp-2cb76.firebaseapp.com",
  projectId: "medapp-2cb76",
  storageBucket: "medapp-2cb76.appspot.com",
  messagingSenderId: "470990430533",
  appId: "1:470990430533:web:510c3ffee8db753d815e2c"
};

let app;
// Initialize Firebase

if(firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}

const db = getFirestore(app);
const auth = firebase.auth();

export {auth, db}; 
