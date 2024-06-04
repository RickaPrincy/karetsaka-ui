import { FC } from "react";
import {
  SimpleForm,
  TextInput,
  Toolbar,
  SaveButton,
  email,
  PasswordInput,
} from "react-admin";
import { SxProps } from "@mui/material";
import { required } from "@/common/input-validator";
import { useLogin } from "../hooks";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { SigninProviderType } from "../auth-firebase";
import { ResetPassword } from "./reset-password";

const TOOLBAR_SX: SxProps = {
  "width": "100%",
  "* .MuiSvgIcon-root": { display: "none !important" },
  "px": "5px !important",
};

export const LoginForm: FC = () => {
  const { login, isLoading } = useLogin();

  return (
    <>
      <SimpleForm
        sx={{ width: "100%", px: 0 }}
        onSubmit={(data) => {
          login(data as SigninProviderType, "Wrong email or password !!!");
        }}
        toolbar={
          <Toolbar sx={TOOLBAR_SX}>
            <SaveButton disabled={isLoading} fullWidth label="Login" />
          </Toolbar>
        }
      >
        <TextInput
          source="email"
          label="Email"
          validate={[required(), email()]}
          {...COMMON_INPUT_PROPS}
        />
        <PasswordInput
          source="password"
          label="Password"
          validate={[required()]}
          {...COMMON_INPUT_PROPS}
        />
      </SimpleForm>
      <ResetPassword />
    </>
  );
};
