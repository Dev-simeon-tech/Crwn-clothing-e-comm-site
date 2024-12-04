import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// import { Await } from "react-router";

const firebaseConfig = {
  apiKey: "AIzaSyCAvqE3wuRlIo7KOvOuOgZB31tcsbpWu4c",
  authDomain: "crwn-clothing-db-512e4.firebaseapp.com",
  projectId: "crwn-clothing-db-512e4",
  storageBucket: "crwn-clothing-db-512e4.firebasestorage.app",
  messagingSenderId: "444882488414",
  appId: "1:444882488414:web:ad49bbbd4fb1903d2df8cf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }
  return userDocRef;
};
