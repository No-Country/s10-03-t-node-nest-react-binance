
import { initializeApp } from "firebase/app";
import {getAuth } from'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAa1ZVh_7ZjGFENs3n-D469snJLYjiYDYg",
  authDomain: "nc-s10.firebaseapp.com",
  projectId: "nc-s10",
  storageBucket: "nc-s10.appspot.com",
  messagingSenderId: "466257538911",
  appId: "1:466257538911:web:5a370f8be78ce8bd8910ea"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)