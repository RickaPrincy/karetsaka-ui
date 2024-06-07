import { FC } from "react";
import { Edit, SaveButton, SimpleForm, TextInput, Toolbar } from "react-admin";
import { useParams } from "react-router-dom";
import { Image } from "@/gen/client";
import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";

export const ImageEdit: FC = () => {
  const { id } = useParams();

  return (
    <Edit
      transform={(brand: Omit<Image, "id">): Image => {
        return {
          id: id!,
          ...brand,
        };
      }}
    >
      <SimpleForm
        toolbar={
          <Toolbar>
            <SaveButton />
          </Toolbar>
        }
      >
        <TextInput
          source="name"
          label="Name"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
        <TextInput
          source="url"
          label="Product ID"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
      </SimpleForm>
    </Edit>
  );
};
