import firebase from 'firebase';
import 'firebase/auth/dist/index.cjs';
import 'firebase/database/dist/index.cjs';

const config = {
  apiKey: "AIzaSyA_AN70NdCWENV4CxqMWE9UXv3ECDg2s6Y",
  authDomain: "journalbuddy-fb04f.firebaseapp.com",
  databaseURL: "https://journalbuddy-fb04f.firebaseio.com",
  projectId: "journalbuddy-fb04f",
  storageBucket: "",
  messagingSenderId: "998004496203"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
// const googleProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  auth,
  // googleProvider,
};