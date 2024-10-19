import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCje9o2_2v6QVNMTM7ERxSjRnH6bbfnnJ0",
  authDomain: "events-ff65b.firebaseapp.com",
  projectId: "events-ff65b",
  storageBucket: "events-ff65b.appspot.com",
  messagingSenderId: "863684526031",
  appId: "1:863684526031:web:f37bcf7f32b8d892db5cba",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
