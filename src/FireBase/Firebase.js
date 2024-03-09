// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBmjuPIIf25RFwZ1nIxvYTf4PAOD9lUzOc",
  authDomain: "clone-7da22.firebaseapp.com",
  projectId: "clone-7da22",
  storageBucket: "clone-7da22.appspot.com",
  messagingSenderId: "375122133004",
  appId: "1:375122133004:web:891c729025f999770fae29",
  measurementId: "G-993G1NHHLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);