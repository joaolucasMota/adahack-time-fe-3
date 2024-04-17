import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASHhtjIEPfcDYN561Vc5u_HTck07qoI5c",
    authDomain: "adahack-f576e.firebaseapp.com",
    projectId: "adahack-f576e",
    storageBucket: "adahack-f576e.appspot.com",
    messagingSenderId: "737221727022",
    appId: "1:737221727022:web:9641b1a5a6ccfdfb16a0bf",
    measurementId: "G-320CWXM3ZT"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app)

export { auth , db };