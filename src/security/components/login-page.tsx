import { FC } from "react";
import { useLogin } from "react-admin";
import { Box, SxProps, Typography, Button } from "@mui/material";
import { GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";

import { FlexBox } from "@/common/components/box";
import { LoginForm } from "./login-form";
import loginIllustration from "@/assets/images/login-illustration.png";
import googleIcon from "@/assets/images/google.svg";

//TODO: Loading

const GOOGLE_LOGIN_SX: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  px: 2,
  py: 1,
};

export const LoginPage: FC = () => {
  const login = useLogin();

  return (
    <FlexBox sx={{ width: "100%", gap: 1, minHeight: "100vh" }}>
      <Image
        alt="Login illustration"
        src={loginIllustration}
        style={{
          display: "block",
          maxWidth: "500px",
          width: "100%",
        }}
      />
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Welcome back
        </Typography>
        <Typography sx={{ mb: 2, fontSize: "15px" }} color="grey">
          Welcome back to your job !!
        </Typography>
        <Button
          size="medium"
          variant="text"
          color="inherit"
          onClick={() => {
            login(GoogleAuthProvider);
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
        <LoginForm />
      </Box>
    </FlexBox>
  );
};
