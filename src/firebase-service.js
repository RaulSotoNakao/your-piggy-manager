import { initializeApp } from "firebase/app";
import "firebase/firestore";
import firebaseConfig from './config/firebase.pro.js'
/* ... */

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app; // re-export firebase library & namespace
