import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBPGdh9fBVWCMbF6TYxVJpwsUzBvoRY3IY",
    authDomain: "linkedin-clone-yt-3f6a5.firebaseapp.com",
    projectId: "linkedin-clone-yt-3f6a5",
    storageBucket: "linkedin-clone-yt-3f6a5.appspot.com",
    messagingSenderId: "649613843579",
    appId: "1:649613843579:web:35d9d5efcbcba1fefc16de"
  };

  const firebaseApp = firebase.initiallizeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};