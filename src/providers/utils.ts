import authFirebase from "@/security/auth-firebase";
import { Configuration } from "../gen/client";

export const getCachedConfiguration = () => {
  const configuration = new Configuration();
  configuration.accessToken = authFirebase.getCachedCredential().token || "";
  return configuration;
};
