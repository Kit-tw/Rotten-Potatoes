// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, gettAuth} from "firebase/auth"
import {Firestore, getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_Firebase_ApiKey,
  authDomain: process.env.REACT_APP_Firebase_AuthDomain,
  projectId: process.env.REACT_APP_Firebase_ProjectId,
  storageBucket: process.env.REACT_APP_Firebase_StorageBucket,
  messagingSenderId: process.env.REACT_APP_Firebase_MessagingSenderId,
  appId: process.env.REACT_APP_Firebase_AppId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



export {app , auth , db , storage}