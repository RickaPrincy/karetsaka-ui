import { FC } from "react";
import { SelectInput, SelectInputProps } from "react-admin";
import { required } from "@/common/input-validator";
import { CarMotorTypeEnum } from "@/gen/client";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";

const MOTOR_TYPE_CHOICES = Object.entries(CarMotorTypeEnum).map(
  ([label, value]) => ({
    value,
    label,
  })
);

export const SelectMotorTypeInput: FC<
  Omit<SelectInputProps, "choices" | "source" | "label">
> = (props) => {
  return (
    <SelectInput
      label="Motor type"
      source="motorType"
      optionText="label"
      optionValue="value"
      validate={required()}
      choices={MOTOR_TYPE_CHOICES}
      {...COMMON_INPUT_PROPS}
      {...props}
    />
  );
};
