import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  snapshotEqual,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
const firebaseConfig = {
  apiKey: "AIzaSyA2WX4KZMxEsrmA76AxFj13YpSI3kM_ZuI",
  authDomain: "crowndb-v2.firebaseapp.com",
  projectId: "crowndb-v2",
  storageBucket: "crowndb-v2.appspot.com",
  messagingSenderId: "660273080599",
  appId: "1:660273080599:web:10ed094d513b1b4f742f52",
  measurementId: "G-V0ENFG83S4",
};

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
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};
