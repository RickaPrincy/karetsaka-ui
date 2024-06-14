import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { TextInput } from "react-admin";

export const ColorInputs = () => {
  return (
    <TextInput
      {...COMMON_INPUT_PROPS}
      source="color"
      type="color"
      label="Colors"
    />
  );
};
