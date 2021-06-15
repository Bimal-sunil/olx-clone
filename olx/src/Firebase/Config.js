import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb7SSyOMUVNEEi5NkR71Yprt9x9ugUcC0",
  authDomain: "olx-project-b38df.firebaseapp.com",
  projectId: "olx-project-b38df",
  storageBucket: "olx-project-b38df.appspot.com",
  messagingSenderId: "789874418033",
  appId: "1:789874418033:web:4af6490f6e514b0b0896d0",
  measurementId: "G-0L6FXYN496",
};

export const Firebase = firebase.initializeApp(firebaseConfig);
