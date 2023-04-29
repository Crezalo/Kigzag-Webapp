// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvM4uX8Q9qklI4IMrylvgbnS548Wcclx0",
  authDomain: "crezalo.firebaseapp.com",
  projectId: "crezalo",
  storageBucket: "crezalo.appspot.com",
  messagingSenderId: "711380384713",
  appId: "1:711380384713:web:3465ead05955494ae6c618",
  measurementId: "G-XVYBBXLTFH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
