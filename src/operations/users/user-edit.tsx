import { FC } from "react";
import { Edit, SimpleForm, TextInput, email } from "react-admin";
import { required } from "@/common/input-validator";

export const UserEdit: FC = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" label="Username" validate={required()} />
        <TextInput
          source="email"
          label="Email"
          type="email"
          validate={[required(), email()]}
        />
      </SimpleForm>
    </Edit>
  )
};
