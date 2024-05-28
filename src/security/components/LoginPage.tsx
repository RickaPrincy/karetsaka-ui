import { Button, useLogin } from "react-admin";
import { Google as GoogleIcon } from "@mui/icons-material";
import { Box } from "@mui/material";
import { GoogleAuthProvider } from "firebase/auth";

export function LoginPage() {
  const login = useLogin();

  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        label="Login"
        size="large"
        sx={{ mx: "auto" }}
        onClick={() => login(GoogleAuthProvider)}
      />
    </Box>
  );
}
