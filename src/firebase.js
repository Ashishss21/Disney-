import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD4OduNsDBrotj2yf0ZSHP_8J22XMR4YIE",
    authDomain: "disney-hotstar-45ef7.firebaseapp.com",
    projectId: "disney-hotstar-45ef7",
    storageBucket: "disney-hotstar-45ef7.appspot.com",
    messagingSenderId: "693550021739",
    appId: "1:693550021739:web:2b5652eb3a46a9656d452e",
    measurementId: "G-EMHRFGTVHZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const db = firebase.firestore();
const auth = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;