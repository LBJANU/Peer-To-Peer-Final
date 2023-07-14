// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIVdk6_p635NHHddUmlqyWwqm_MiXzWhQ",
  authDomain: "cac2023-4eb09.firebaseapp.com",
  projectId: "cac2023-4eb09",
  storageBucket: "cac2023-4eb09.appspot.com",
  messagingSenderId: "760839738721",
  appId: "1:760839738721:web:38e67f07503c87baaae120"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0)
{
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}

const auth = firebase.auth()

export { auth };
