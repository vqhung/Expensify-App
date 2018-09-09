import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "expensify-455b4.firebaseapp.com",
    databaseURL: "https://expensify-455b4.firebaseio.com",
    projectId: "expensify-455b4",
    storageBucket: "expensify-455b4.appspot.com",
    messagingSenderId: "1029316834532"
};

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider, database as default};
