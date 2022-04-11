import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_zdey8MUP5d9bmCJW2IUypXAndVesBWw",
  authDomain: "gb7-chat.firebaseapp.com",
  databaseURL:
    "https://gb7-chat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb7-chat",
  storageBucket: "gb7-chat.appspot.com",
  messagingSenderId: "945087657235",
  appId: "1:945087657235:web:fa47f0f59b53f8ea2b56e6",
  measurementId: "G-278C8MZTCR",
};

export const firibase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firibase);
export const auth = getAuth(firibase);
export const database = getDatabase(firibase);
