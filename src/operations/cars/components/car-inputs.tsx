import { FC } from "react";
import { BooleanInput, TextInput, minValue, number } from "react-admin";
import { SelectMotorTypeInput } from "./select-motor-type-input";
import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { SelectBrand } from "./select-brand-input";

export const CarInputs: FC = () => {
  return (
    <>
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
    </>
  );
};
