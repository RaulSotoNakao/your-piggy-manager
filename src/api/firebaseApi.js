import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "../firebase-service";
const db = getFirestore(app);

const docRef = doc(db, "main", "jeAsSloiHtMdiL5yxm72JZI5Y773");
const docSnap = () => getDoc(docRef);

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
    console.log("LOGOUT");
  }
});
export { docSnap };
