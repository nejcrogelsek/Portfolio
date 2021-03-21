import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  
});
// Database
const db = firebase.firestore();

// storage
const storage = firebase.storage();
//authentication
const auth = firebaseApp.auth();
// google auth
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
