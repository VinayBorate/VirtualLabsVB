import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// my  firebase  key
const firebaseConfig = {
  apiKey: "AIzaSyBLlzcAbCT3fy8nVQcpi4wi-GVN8k0dI0c",
  authDomain: "virtual-labvb.firebaseapp.com",
  projectId: "virtual-labvb",
  storageBucket: "virtual-labvb.appspot.com",
  messagingSenderId: "634355147557",
  appId: "1:634355147557:web:7045fe31668c4482f7f0cc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
