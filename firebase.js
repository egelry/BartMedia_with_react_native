import  firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsxBlAFVhKW-w6f_lVKrpKjVMWPp9fE2Y",
  authDomain: "pristine-sum-348419.firebaseapp.com",
  projectId: "pristine-sum-348419",
  storageBucket: "pristine-sum-348419.appspot.com",
  messagingSenderId: "29889458636",
  appId: "1:29889458636:web:99dded640a66b8b60ced69",
  measurementId: "G-EQFYMZJKNB"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth;

export  {auth};