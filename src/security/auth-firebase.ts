import {
  signOut as firebaseSignOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";
import { firebaseAuth } from "../config/firebase";

type SigninProviderType =
  | {
      email: string;
      password: string;
    }
  | {
      new (): GoogleAuthProvider;
    };

const AUTH_TOKEN_ID = "auth-token-id";
const getCachedCredential = () => localStorage.getItem(AUTH_TOKEN_ID);

const cacheCredential = async (credential: UserCredential) => {
  const user = credential?.user;
  if (!user) return credential;
  localStorage.setItem(AUTH_TOKEN_ID, await user.getIdToken());
  return credential;
};

const signIn = async (provider: SigninProviderType) => {
  if ("email" in provider) {
    const { email, password } = provider;
    return cacheCredential(
      await signInWithEmailAndPassword(firebaseAuth, email, password)
    );
  }
  return cacheCredential(await signInWithPopup(firebaseAuth, new provider()));
};

const signup = async (provider: SigninProviderType) => {
  if ("email" in provider) {
    const { email, password } = provider;
    return cacheCredential(
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    );
  }
  return cacheCredential(await signIn(provider));
};

const signOut = async () => {
  await firebaseSignOut(firebaseAuth);
  localStorage.removeItem(AUTH_TOKEN_ID);
};

const authFirebase = {
  signIn,
  signOut,
  signup,
  cacheCredential,
  getCachedCredential,
};

export default authFirebase;
