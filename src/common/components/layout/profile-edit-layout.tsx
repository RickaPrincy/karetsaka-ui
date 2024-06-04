import { FC } from "react";
import {
  Edit,
  EditProps,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";
import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";

export const ProfileEditLayout: FC<Omit<EditProps, "children">> = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm
        toolbar={
          <Toolbar>
            <SaveButton />
          </Toolbar>
        }
      >
        <TextInput
          source="email"
          label="Email"
          readOnly
          {...COMMON_INPUT_PROPS}
        />
        <TextInput
          source="name"
          label="Name"
          validate={[required()]}
          {...COMMON_INPUT_PROPS}
        />
        <TextInput
          source="picture"
          label="Picture url"
          {...COMMON_INPUT_PROPS}
        />
      </SimpleForm>
    </Edit>
  );
};
