import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcvW4yERx5KSpxZmKn7ytHOOiXZHNpMUc",
    authDomain: "tiktok-cd409.firebaseapp.com",
    databaseURL: "https://tiktok-cd409-default-rtdb.firebaseio.com",
    projectId: "tiktok-cd409",
    storageBucket: "tiktok-cd409.appspot.com",
    messagingSenderId: "704623791402",
    appId: "1:704623791402:web:81d9fa34eabc6e990a6253",
    measurementId: "G-KL953EQ8LJ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;