import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkRGlQC9fGXaNB34xcU4VNADbEV3Rni2E",
  authDomain: "polar-avenue-281902.firebaseapp.com",
  projectId: "polar-avenue-281902",
  storageBucket: "polar-avenue-281902.appspot.com",
  messagingSenderId: "1054520002382",
  appId: "1:1054520002382:web:d50a5001d20f4e6404c01f",
  measurementId: "G-ENEYBPLHF1",
};

export const Firebase = firebase.initializeApp(firebaseConfig);
