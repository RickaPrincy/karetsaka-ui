import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { Image } from "@/gen/client";
import { FC } from "react";
import { Edit, SaveButton, SimpleForm, TextInput, Toolbar } from "react-admin";
import { useParams } from "react-router-dom";

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
          source="url"
          label="Url"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
        <TextInput
          source="productId"
          label="Product ID"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
      </SimpleForm>
    </Edit>
  );
};
