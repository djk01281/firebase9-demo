import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
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
const auth = getAuth();

const signInBtn = document.getElementById("signInBtn");
signInBtn.onclick = function () {
  const provider = new GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const outputElement = document.createElement("h1");
      // outputDiv.textContent = Object.keys(user);
      //providerId,proactiveRefresh,reloadUserInfo,reloadListener,uid,auth,stsTokenManager,accessToken,displayName,email,emailVerified,phoneNumber,photoURL,isAnonymous,tenantId,providerData,metadata
      outputElement.textContent = `Welcome, ${user.displayName}`;
      document.body.appendChild(outputElement);
    })
    .catch((error) => {
      const errorMessage = error.message;
      const outputElement = document.createElement("h1");
      outputElement.textContent = `Error: ${errorMessage}`;
      document.body.appendChild(outputDiv);
    });
};
