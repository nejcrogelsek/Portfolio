import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCkV5_Z7W4QYjOUX9MIW_ttF6HJEICXjCM",
  authDomain: "portfolio-b037d.firebaseapp.com",
  projectId: "portfolio-b037d",
  storageBucket: "portfolio-b037d.appspot.com",
  messagingSenderId: "858363463802",
  appId: "1:858363463802:web:8a016958117fe4df24d3c3",
  measurementId: "G-8G4VQ34MNQ",
});
// storage
const storage = firebase.storage();
//authentication
const auth = firebaseApp.auth();
// google auth
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
