import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "document-editor-e182f.firebaseapp.com",
  projectId: "document-editor-e182f",
  storageBucket: "document-editor-e182f.appspot.com",
  messagingSenderId: "1010115898229",
  appId:  process.env.APP_ID,
  measurementId: "G-L57VRFB2X4"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;
export const firestore = firebase.firestore();
export const database = firebase.database();