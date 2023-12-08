import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVARl-5I3jl2LKnb0gexESrZi1gJv2tAI",
  authDomain: "document-editor-e182f.firebaseapp.com",
  projectId: "document-editor-e182f",
  storageBucket: "document-editor-e182f.appspot.com",
  messagingSenderId: "1010115898229",
  appId: "1:1010115898229:web:b18f2b6059e9821977013c",
  measurementId: "G-L57VRFB2X4"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;