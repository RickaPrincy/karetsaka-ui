import { FC } from "react";
import { Datagrid, List, TextField, TextInput } from "react-admin";
import { ProfilePictureField } from "@/common/components/fields";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";

//TODO: rename ProfilePictureFIeld
export const CarBrandList: FC = () => {
  return (
    <List
      hasCreate
      empty={false}
      title="Brands"
      filters={[
        <TextInput alwaysOn key="name" source="name" {...COMMON_INPUT_PROPS} />,
      ]}
    >
      <Datagrid>
        <TextField source="name" label="Name" />
        <ProfilePictureField source="picture" label="Picture" />
      </Datagrid>
    </List>
  );
};
