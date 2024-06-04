import { FC } from "react";
import { Datagrid, EditButton, TextField, TextInput } from "react-admin";
import { ProfilePictureField } from "@/common/components/fields";
import { List } from "@/common/components/list";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";

//TODO: rename ProfilePictureFIeld
export const CarBrandList: FC = () => {
  return (
    <List
      hasCreate
      title="Brands"
      filters={[
        <TextInput alwaysOn key="name" source="name" {...COMMON_INPUT_PROPS} />,
      ]}
    >
      <Datagrid rowClick="show">
        <TextField source="name" label="Name" />
        <ProfilePictureField source="picture" label="Picture" />
        <EditButton color="warning" />
      </Datagrid>
    </List>
  );
};
