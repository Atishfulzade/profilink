import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA8V3VB5USOYU-nD7MiF-SRDdi9I_v0gUs",
  authDomain: "profilink-e7fbe.firebaseapp.com",
  projectId: "profilink-e7fbe",
  storageBucket: "profilink-e7fbe.appspot.com",
  messagingSenderId: "297419470535",
  appId: "1:297419470535:web:9ee9e7e2307c75985930e2",
  measurementId: "G-BKHQYGQ75D"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const firestore=getFirestore(app)
export{app,auth,firestore}