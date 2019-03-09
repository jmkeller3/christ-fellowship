import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDpAknuvkiNqhQQXDrxF0o27B9FUySE5AM",
  authDomain: "christ-fellowship-41797.firebaseapp.com",
  databaseURL: "https://christ-fellowship-41797.firebaseio.com",
  projectId: "christ-fellowship-41797",
  storageBucket: "christ-fellowship-41797.appspot.com",
  messagingSenderId: "431166887910"
};
firebase.initializeApp(config);

const storage = firebase.storage();

const db = firebase.firestore();

export {db, storage};