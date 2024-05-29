import { SxProps } from "@mui/material";
import {
  DateInputProps,
  PasswordInputProps,
  TextInputProps,
} from "react-admin";

export const FLEX_BOX_SX: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const COMMON_INPUT_PROPS = {
  size: "small",
  variant: "outlined",
  fullWidth: true,
} satisfies Partial<TextInputProps> satisfies Partial<PasswordInputProps> satisfies Partial<DateInputProps>;
