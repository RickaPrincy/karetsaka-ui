import authFirebase from "../auth-firebase";

export const useWhoami = () => {
  return authFirebase.getCachedCredential();
};
