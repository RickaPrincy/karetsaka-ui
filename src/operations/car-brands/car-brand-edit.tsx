import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { CarBrand } from "@/gen/client";
import { FC } from "react";
import { Edit, SaveButton, SimpleForm, TextInput, Toolbar } from "react-admin";
import { useParams } from "react-router-dom";

export const CarBrandEdit: FC = () => {
  const { id } = useParams();

  return (
    <Edit
      transform={(brand: Omit<CarBrand, "id">): CarBrand => {
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
          source="picture"
          label="Picture"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
      </SimpleForm>
    </Edit>
  );
};
