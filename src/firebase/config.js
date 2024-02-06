// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlblTclDaihoArSBxiBBSTtD2ed4S2ZnA",
  authDomain: "miniblog-7e0f2.firebaseapp.com",
  projectId: "miniblog-7e0f2",
  storageBucket: "miniblog-7e0f2.appspot.com",
  messagingSenderId: "512047608830",
  appId: "1:512047608830:web:548c0ee41db5cbd0d046af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };