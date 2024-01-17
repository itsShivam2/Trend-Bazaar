import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyDYmxH46ublvg1NUqCnakBUajnojP1fATU",
  authDomain: "trend-bazaar-c5555.firebaseapp.com",
  projectId: "trend-bazaar-c5555",
  storageBucket: "trend-bazaar-c5555.appspot.com",
  messagingSenderId: "406934833167",
  appId: "1:406934833167:web:9725270d65169bb91a3b7a",
  measurementId: "G-7F43Z5HQ1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// App Configuration
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { auth, fireDB };