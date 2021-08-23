import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyBEec_ShUYMnxNv2A_qKQysEoJZLGjhRe4",
  authDomain: "addressbook-569c3.firebaseapp.com",
  projectId: "addressbook-569c3",
  storageBucket: "addressbook-569c3.appspot.com",
  messagingSenderId: "111267875095",
  appId: "1:111267875095:web:37e37348cf70990d0d4f52"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
