// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4MWcv5c6PRRig8-CgcVatjybARfNAZgg",
  authDomain: "fir-netflix-b8b17.firebaseapp.com",
  projectId: "fir-netflix-b8b17",
  storageBucket: "fir-netflix-b8b17.appspot.com",
  messagingSenderId: "504573564876",
  appId: "1:504573564876:web:da0476887040a601886f69",
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig):getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export {auth, db}