import { FC } from "react";
import { Button, SxProps } from "@mui/material";
import { GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";

import { useLogin } from "../hooks";
import googleIcon from "@/assets/images/google.svg";

const GOOGLE_LOGIN_SX: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  px: 2,
  py: 1,
};

export const LoginGoogle: FC = () => {
  const { login, isLoading } = useLogin();
  return (
    <Button
      size="medium"
      variant="text"
      color="inherit"
      disabled={isLoading}
      onClick={() => {
        login(GoogleAuthProvider, "Unauthorized !!");
      }}
      sx={GOOGLE_LOGIN_SX}
    >
      <Image
        src={googleIcon}
        style={{ display: "block" }}
        width={25}
        height={25}
        alt="Google"
      />
      Google
    </Button>
  );
};
