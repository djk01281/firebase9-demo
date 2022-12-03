import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATCD9cxXSJ2RSUwd9WSDHTDMV7FuSaCgo",
  authDomain: "fir-demo-48710.firebaseapp.com",
  projectId: "fir-demo-48710",
  storageBucket: "fir-demo-48710.appspot.com",
  messagingSenderId: "49933278590",
  appId: "1:49933278590:web:bb643d3e5d7b2077cd672f",
  measurementId: "G-HFF9Z86BJM",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const signInBtn = document.getElementById("signInBtn");
const auth = getAuth();
signInBtn.onclick = function () {
  signInWithPopup(auth, provider);
};
