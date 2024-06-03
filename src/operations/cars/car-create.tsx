import { FC } from "react";
import {
  BooleanInput,
  Create,
  SimpleForm,
  TextInput,
  minValue,
  number,
} from "react-admin";
import { v4 as uuid } from "uuid";
import { CrupdateCar } from "@/gen/client";
import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { SelectMotorTypeInput } from "./components";
import { SelectBrand } from "./components/select-brand-input";

export const CarCreate: FC = () => {
  return (
    <Create
      title="Create car"
      transform={(
        toCreate: Omit<CrupdateCar, "id"> & {
          status: undefined | boolean;
          color: string;
        }
      ): CrupdateCar => ({
        ...toCreate,
        id: uuid(),
        status: toCreate.status !== undefined ? toCreate.status : false,
        color: [toCreate.color],
        placeNumber: +toCreate.placeNumber,
        power: +toCreate.power,
      })}
    >
      <SimpleForm>
        <TextInput
          source="name"
          validate={required()}
          label="Name"
          {...COMMON_INPUT_PROPS}
        />
        <TextInput
          source="description"
          multiline
          label="Description"
          {...COMMON_INPUT_PROPS}
        />
        <TextInput
          source="model"
          label="Model"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
        <TextInput
          source="price"
          label="Price"
          validate={[required(), number(), minValue(1)]}
          {...COMMON_INPUT_PROPS}
        />
        {/* FIXME: Should be an color pickers (multiple colors) */}
        <TextInput
          source="color"
          label="Color"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
        <SelectMotorTypeInput />
        <TextInput
          source="power"
          label="Power"
          validate={[required(), number(), minValue(1)]}
          {...COMMON_INPUT_PROPS}
        />
        <TextInput
          source="placeNumber"
          label="Number of places"
          validate={[required(), number(), minValue(1)]}
          {...COMMON_INPUT_PROPS}
        />
        <BooleanInput source="status" label="Status" />
        <TextInput
          source="type"
          label="Type"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
        <SelectBrand source="brandId" />
      </SimpleForm>
    </Create>
  );
};
