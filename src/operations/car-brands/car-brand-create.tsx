import { FC } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { v4 as uuid } from "uuid";
import { CarBrand } from "@/gen/client";
import { required } from "@/common/input-validator";

export const CarBrandCreate: FC = () => {
  return (
    <Create
      title="Create car brand"
      transform={(carBrandToCreate: Omit<CarBrand, "id">): CarBrand => {
        return {
          id: uuid(),
          ...carBrandToCreate,
        };
      }}
    >
      <SimpleForm>
        <TextInput source="name" label="Name" validate={required()} />
        <TextInput source="picture" label="Picture" validate={required()} />
      </SimpleForm>
    </Create>
  );
};
