import {initializeApp} from 'firebase/app';
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

//firestore database -- here to access the data we call the method getDoc
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc
 } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBfCTfzJo9WRqOTJIeLAVhg0M4HcH7qKdw",
  authDomain: "creat-and-broc-db.firebaseapp.com",
  projectId: "creat-and-broc-db",
  storageBucket: "creat-and-broc-db.appspot.com",
  messagingSenderId: "747016911547",
  appId: "1:747016911547:web:d75565be704d2026b3479e"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account" //to make the user to select and account
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>signInWithPopup(auth, googleProvider);
//redirect
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
if(!userAuth) return;

  //doc(db, collection, uid) -- it gives the doc reference inside the db under the users' collection
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)
  //we have a snapshot from the user document reference userDocRef
  //this method exist() here help us to know if the user exist on the firestore
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAd = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAd,
        ...additionalInformation
      })
    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}
