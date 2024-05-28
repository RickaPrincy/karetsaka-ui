import authFirebase from "@/security/auth-firebase";
import { Configuration } from "../gen/client";

export function getCachedConfiguration() {
  const configuration = new Configuration();
  configuration.accessToken = authFirebase.getCachedCredential() || "";
  return configuration;
}
