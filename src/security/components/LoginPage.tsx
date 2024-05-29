import { FC } from "react";
import { useLogin } from "react-admin";
import { Box, SxProps, Typography, Button } from "@mui/material";
import { GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";

import { FlexBox } from "@/common/components/box";
import { PALETTE_COLORS } from "@/common/utils/palette-colors";
import { LoginForm } from "./LoginForm";
import loginIllustration from "@/assets/images/login-illustration.png";
import googleIcon from "@/assets/images/google.svg";

const GOOGLE_LOGIN_SX: SxProps = {
  color: PALETTE_COLORS.black["1"],
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
        <Typography
          sx={{ mb: 2, fontSize: "15px", color: PALETTE_COLORS.gray["1"] }}
        >
          Welcome back to your job !!
        </Typography>
        <Button
          size="medium"
          variant="text"
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
