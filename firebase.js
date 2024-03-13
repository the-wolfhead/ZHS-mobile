// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWdicecJm8X2JGgw592qFFNYGFis_c8YA",
  authDomain: "auth-zhs.firebaseapp.com",
  projectId: "auth-zhs",
  storageBucket: "auth-zhs.appspot.com",
  messagingSenderId: "911556865803",
  appId: "1:911556865803:web:8f8575846e86435527bc0e",
  measurementId: "G-7PCQR6HM4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);