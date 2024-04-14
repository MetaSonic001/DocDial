import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsENXCZgWPNArDluaeVoCjScWiYJWCQrg",
  authDomain: "docdial-f2cde.firebaseapp.com",
  projectId: "docdial-f2cde",
  storageBucket: "docdial-f2cde.appspot.com",
  messagingSenderId: "441470693716",
  appId: "1:441470693716:web:83bc788db2fd84f18258c1",
  measurementId: "G-68WLDE0Z8R",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;
