import { FC } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { v4 as uuid } from "uuid";
import { Image } from "@/gen/client";
import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";

export const ImageCreate: FC = () => {
  return (
    <Create
      title="Create Image"
      transform={(imageToCreate: Omit<Image, "id">): Image => {
        return {
          id: uuid(),
          ...imageToCreate,
        };
      }}
    >
      <SimpleForm>
        <TextInput
          source="url"
          label="Url"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
        <TextInput
          source="productId"
          label="Product ID"
          {...COMMON_INPUT_PROPS}
        />
      </SimpleForm>
    </Create>
  );
};
