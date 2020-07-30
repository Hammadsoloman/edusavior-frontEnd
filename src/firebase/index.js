import firebase from 'firebase/app' ; 
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAZUCX78p_cg6zq2nTtVJDWKZK5Z9Hj-qI",
    authDomain: "edu-savior.firebaseapp.com",
    databaseURL: "https://edu-savior.firebaseio.com",
    projectId: "edu-savior",
    storageBucket: "edu-savior.appspot.com",
    messagingSenderId: "615349461308",
    appId: "1:615349461308:web:8380e2fd77d1bc00677e39",
    measurementId: "G-R8YRJPY8TV"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {storage , firebase as default}