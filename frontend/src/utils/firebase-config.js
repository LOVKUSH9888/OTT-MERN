import { initializeApp } from "firebase/app";

//adding the auth from the firebase 

import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyC5Mf93raAKEuG9qTLZ40uImZzGUFNFuww",
  authDomain: "ott-react-24b71.firebaseapp.com",
  projectId: "ott-react-24b71",
  storageBucket: "ott-react-24b71.appspot.com",
  messagingSenderId: "792966961285",
  appId: "1:792966961285:web:e18c809fb5ca592e4f31ec",
  measurementId: "G-TSL2VH19GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportign the web app

export const firebaseAuth = getAuth(app);