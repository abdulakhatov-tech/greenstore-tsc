import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyDBdeyruhxIvGuLV_O_FJMslph5VwN12l0",
   authDomain: "greenstore-auth.firebaseapp.com",
   projectId: "greenstore-auth",
   storageBucket: "greenstore-auth.appspot.com",
   messagingSenderId: "308784223097",
   appId: "1:308784223097:web:76d2b54b517193a45f15a8",
   measurementId: "G-6ZWS89RHED",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
