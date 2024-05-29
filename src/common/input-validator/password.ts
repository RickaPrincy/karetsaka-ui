import { minLength } from "react-admin";
import { z } from "zod";
import { required } from "./required";

const PASSWORD_SCHEMA = z
  .string()
  .min(8, "Should be at least 10 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/\d/, "Password must contain at least one number");

export const passwordContentValidator = () => (value: any, _values: any) => {
  const isValid = PASSWORD_SCHEMA.safeParse(value);
  if (isValid.success) {
    return undefined;
  }

  return isValid.error.errors[0].message;
};

export const password = () => [
  required(),
  minLength(8),
  passwordContentValidator(),
];
