import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBPGdh9fBVWCMbF6TYxVJpwsUzBvoRY3IY",
    authDomain: "linkedin-clone-yt-3f6a5.firebaseapp.com",
    projectId: "linkedin-clone-yt-3f6a5",
    storageBucket: "linkedin-clone-yt-3f6a5.appspot.com",
    messagingSenderId: "649613843579",
    appId: "1:649613843579:web:0ef217800ff790dcfc16de"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };