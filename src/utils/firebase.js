// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB21_l3wr-c6_sWNo-K1AbWeGAHRMU1syA",

  authDomain: "netflixgpt-7ac39.firebaseapp.com",

  projectId: "netflixgpt-7ac39",

  storageBucket: "netflixgpt-7ac39.appspot.com",

  messagingSenderId: "388530234670",

  appId: "1:388530234670:web:73c22f2a661bb56d4086bf",

  measurementId: "G-JTXWXRZFE4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth();