import { FC } from "react";
import { Datagrid, EmailField, List, TextField } from "react-admin";

export const UserList: FC = () => {
  <List>
    <Datagrid>
      <TextField source="name" label="Username" />
      <EmailField source="email" label="Email" />
    </Datagrid>
  </List>
};
