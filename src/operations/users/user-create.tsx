import { FC, useState } from "react";
import { SimpleForm, TextInput, email, useNotify } from "react-admin";
import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { createUserAndSendEmail } from "@/providers";

export const UserCreate: FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const notify = useNotify();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SimpleForm
      disabled={isLoading}
      onSubmit={(data: any) => {
        setIsLoading(true);
        createUserAndSendEmail(data)
          .then(() => {
            notify("User created !!", { type: "success" });
            onSubmit();
          })
          .catch((error) => {
            console.log(error);
            notify("An error occurred !!", { type: "error" });
          })
          .finally(() => {
            setIsLoading(false);
          });
      }}
    >
      <TextInput
        source="email"
        label="Email"
        validate={[required(), email()]}
        {...COMMON_INPUT_PROPS}
      />
    </SimpleForm>
  );
};
