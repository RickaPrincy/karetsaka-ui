import { FC } from "react";
import { Datagrid, EmailField, List, TextField, TextInput } from "react-admin";
import { ProfilePictureField } from "@/common/components/fields";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";

export const UserList: FC = () => {
  return (
    <List
      filters={[
        <TextInput
          {...COMMON_INPUT_PROPS}
          alwaysOn
          key="name"
          source="name"
          label="Username"
        />,
      ]}
    >
      <Datagrid>
        <TextField source="name" label="Username" />
        <EmailField source="email" label="Email" />
        <ProfilePictureField source="picture" label="Picture" />
      </Datagrid>
    </List>
  );
};
