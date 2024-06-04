import { AuthProvider } from "react-admin";
import authFirebase, { SigninProviderType } from "@/security/auth-firebase";
import { securityApi } from "./api";

//TODO
export const authProvider: AuthProvider = {
  login: async (params: SigninProviderType) => {
    await authFirebase.signIn(params);
    return securityApi().whoami();
  },
  checkAuth: async () => {
    return securityApi()
      .whoami()
      .then(() => {});
  },
  logout: async () => {
    localStorage.clear();
    sessionStorage.clear();
    authFirebase.signOut();
  },
  checkError: (_error) => Promise.resolve(/* ... */),
  // getIdentity: () => Promise.resolve(/* ... */),
  handleCallback: () => Promise.resolve(/* ... */), // for third-party authentication only
  getPermissions: () => Promise.resolve(/* ... */),
};
