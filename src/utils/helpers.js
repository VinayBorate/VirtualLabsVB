import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { v4 as uuidv4 } from "uuid";

export function signINWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then((userCred) => {
    window.location.reload();
  });
}

export function signINWithGitHub() {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider).then((userCred) => {
    window.location.reload();
  });
}

export const Menus = [
  // uuiv = unique identifie number
  { id: uuidv4(), name: "Projects", uri: "/home/projects" },
  { id: uuidv4(), name: "Collections", uri: "/home/Collection" },
  { id: uuidv4(), name: "Profile", uri: "/home/Profile" },
];

export const signOutAction = async () => {
  await auth.signOut().then(() => {
    window.location.reload();
  });
};
