import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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

export {
  db,
  auth,
};
