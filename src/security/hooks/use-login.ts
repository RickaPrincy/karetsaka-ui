import { useContext } from "react";
import { LOGIN_LOADING_CONTEXT } from "../context/login-loading-context";

export const useLogin = () => {
  const loginContext = useContext(LOGIN_LOADING_CONTEXT);

  if (loginContext === null) {
    throw new Error(
      "You have wrap your component with LOGIN_LOADING_CONTEXT to use useLogin"
    );
  }

  return loginContext;
};
