// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxA50t3riVKHdLJqyV8WjMTTmQM2uY4R4",
  authDomain: "doctor-12-fd0e1.firebaseapp.com",
  projectId: "doctor-12-fd0e1",
  storageBucket: "doctor-12-fd0e1.appspot.com",
  messagingSenderId: "99878181888",
  appId: "1:99878181888:web:82d0d3a8036363ce664ce5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);