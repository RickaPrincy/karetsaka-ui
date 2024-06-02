import {
  signOut as firebaseSignOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  UserCredential,
  getAdditionalUserInfo,
  deleteUser,
  User as FirebaseUser,
} from "firebase/auth";
import { firebaseAuth } from "../config/firebase";

export type SigninProviderType =
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

const deleteFirebaseUser = async (user: FirebaseUser) => {
  await signOut();
  await deleteUser(user);
};

const signIn = async (provider: SigninProviderType) => {
  if ("email" in provider) {
    const { email, password } = provider;
    return cacheCredential(
      await signInWithEmailAndPassword(firebaseAuth, email, password)
    );
  }
  const response = await signInWithPopup(firebaseAuth, new provider());
  const { isNewUser } = getAdditionalUserInfo(response)!;

  if (isNewUser) {
    await deleteFirebaseUser(response.user);
    throw new Error("Unauthorized");
  }
  return cacheCredential(response);
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
