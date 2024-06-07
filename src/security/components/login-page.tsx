import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import { FlexBox } from "@/common/components/box";
import { LoginForm } from "./login-form";
import { LoginLoadingContext } from "../context/login-loading-context";
import { LoginGoogle } from "./login-google";
import loginIllustration from "@/assets/images/login-illustration.png";

export const LoginPage: FC = () => {
  return (
    <LoginLoadingContext>
      <FlexBox sx={{ width: "100%", gap: 1, minHeight: "100vh" }}>
        <Image
          alt="Login illustration"
          src={loginIllustration}
          style={{
            display: "block",
            maxWidth: "400px",
            height: "auto",
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
          <LoginGoogle />
          <LoginForm />
        </Box>
      </FlexBox>
    </LoginLoadingContext>
  );
};
