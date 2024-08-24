import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase.config";

export function signINWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then((userCred) => {
    window.location.reload();
  });
}
