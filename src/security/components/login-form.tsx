import { FC } from "react";
import {
  SimpleForm,
  TextInput,
  Toolbar,
  SaveButton,
  email,
  PasswordInput,
  useLogin,
} from "react-admin";
import { SxProps } from "@mui/material";
import { required, password } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";

const TOOLBAR_SX: SxProps = {
  "width": "100%",
  "* .MuiSvgIcon-root": { display: "none !important" },
  "px": "5px !important",
};

export const LoginForm: FC = () => {
  const login = useLogin();

  return (
    <SimpleForm
      sx={{ width: "100%", px: 0 }}
      onSubmit={(data) => {
        login(data);
      }}
      toolbar={
        <Toolbar sx={TOOLBAR_SX}>
          <SaveButton fullWidth label="Login" />
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
        validate={password()}
        {...COMMON_INPUT_PROPS}
      />
    </SimpleForm>
  );
};
