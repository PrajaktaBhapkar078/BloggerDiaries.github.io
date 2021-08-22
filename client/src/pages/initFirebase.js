import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBGNumMmPlRVdssTbTKmJpcd2wZiZxWp8k",
  authDomain: "blog-73c09.firebaseapp.com",
  projectId: "blog-73c09",
  storageBucket: "blog-73c09.appspot.com",
  messagingSenderId: "192533457538",
  appId: "1:192533457538:web:f6c26733e650e7ea52629b",
  measurementId: "G-J3YL79M3XG"
});

export default firebaseConfig;