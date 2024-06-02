import { FC } from "react";
import { Create, SimpleForm, TextInput, email } from "react-admin";
import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";

export const UserCreate: FC = () => {
  return (
    <Create title=" ">
      <SimpleForm>
        <TextInput
          source="email"
          label="Email"
          validate={[required(), email()]}
          {...COMMON_INPUT_PROPS}
        />
      </SimpleForm>
    </Create>
  );
};
