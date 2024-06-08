import { FC } from "react";
import { Datagrid, DeleteButton, TextField } from "react-admin";
import { PictureField } from "@/common/components/fields";
import { List } from "@/common/components/list";

export const ImageList: FC = () => {
  return (
    <List title="Images">
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField source="name" label="Name" />
        <PictureField
          source="url"
          label="Picture"
          imageProps={{
            style: {
              borderRadius: 0,
              width: "100px",
              height: "100px",
            },
          }}
        />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
