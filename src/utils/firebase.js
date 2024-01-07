import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6LEXJ-7aHBTUhoAtSm_AGryTtamKQp44",
  authDomain: "netflix-clone-9da71.firebaseapp.com",
  projectId: "netflix-clone-9da71",
  storageBucket: "netflix-clone-9da71.appspot.com",
  messagingSenderId: "1091920564184",
  appId: "1:1091920564184:web:923e23c03c14c59b1b6cad",
  measurementId: "G-83CQPJBRPH",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
