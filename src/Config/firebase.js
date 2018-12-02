 import firebase from 'firebase'
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBDE5TVv_vC-i59GuzAp_BeUBINdgeGPJc",
    authDomain: "smartsewer-de7fd.firebaseapp.com",
    databaseURL: "https://smartsewer-de7fd.firebaseio.com",
    projectId: "smartsewer-de7fd",
    storageBucket: "smartsewer-de7fd.appspot.com",
    messagingSenderId: "391262020074"
  };
  firebase.initializeApp(config);

  export default firebase;