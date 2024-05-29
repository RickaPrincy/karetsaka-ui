import { FC } from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const UserEdit: FC = () => {
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Username" />
      <TextInput source="email" label="Email" type="email"/>
    </SimpleForm>
  </Edit>
};