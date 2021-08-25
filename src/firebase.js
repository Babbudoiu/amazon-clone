import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyD6G4vxX5mGGTelkQ6T0WWTiGT3kLjsIc4",
  authDomain: "clone-1d00e.firebaseapp.com",
  projectId: "clone-1d00e",
  storageBucket: "clone-1d00e.appspot.com",
  messagingSenderId: "600757319456",
  appId: "1:600757319456:web:b7ae814cc9d521249e0945",
  measurementId: "G-89CEV9HJK8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
