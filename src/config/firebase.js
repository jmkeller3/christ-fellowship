import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/storage'
const config = {
  apiKey: "AIzaSyDpAknuvkiNqhQQXDrxF0o27B9FUySE5AM",
  authDomain: "christ-fellowship-41797.firebaseapp.com",
  databaseURL: "https://christ-fellowship-41797.firebaseio.com",
  projectId: "christ-fellowship-41797",
  storageBucket: "christ-fellowship-41797.appspot.com",
  messagingSenderId: "431166887910"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})




// const storage = firebase.storage();

// const gsReference = storage.refFromURL(
//   "gs://christ-fellowship-41797.appspot.com"
// );

export default firebase;
