// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMXFIJdhbJeKKGCN8i62hY1DvJQ8I2vYE",
  authDomain: "kiribati-9b158.firebaseapp.com",
  projectId: "kiribati-9b158",
  storageBucket: "kiribati-9b158.appspot.com",
  messagingSenderId: "879101332662",
  appId: "1:879101332662:web:1b64ce091260f59632aa17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };