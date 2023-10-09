import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    getRedirectResult,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from './config';
import { getStorage } from "firebase/storage";

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    getRedirectResult,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut
}
export const db = getFirestore()
export const storage = getStorage(firebaseApp);
// export const firebaseDb = firebaseApp.database();
