import { FC } from "react";
import { List, TextField } from "react-admin";

export const CarList: FC = () => {
  return (
    <List title="cars" empty={false}>
      <TextField source="name" />
    </List>
  );
};
