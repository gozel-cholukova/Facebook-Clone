import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxSGb82_tUmGBAWHgS1xC0D0azrT0gOLc",
  authDomain: "facebook-clone-a8093.firebaseapp.com",
  projectId: "facebook-clone-a8093",
  storageBucket: "facebook-clone-a8093.appspot.com",
  messagingSenderId: "966891745029",
  appId: "1:966891745029:web:1cd329e78a39753c8f916c",
  measurementId: "G-S18DNC3SP3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;