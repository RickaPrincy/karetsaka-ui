import { FC } from "react";
import { SelectInput, SelectInputProps, useGetList } from "react-admin";
import { CarBrand } from "@/gen/client";
import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";

//TODO: Create const variable for max item per page
//TODO: create select with pagination or avoid pagination on brands
export const SelectBrand: FC<Omit<SelectInputProps, "choices">> = (props) => {
  const { data = [], isLoading } = useGetList<CarBrand>("carBrands", {
    pagination: {
      page: 1,
      perPage: 500, // FIXME
    },
  });

  const BRAND_CHOICES = data.map((brand) => ({
    value: brand.id,
    label: brand.name,
  }));

  return (
    <SelectInput
      label="Brand"
      source="brandId"
      optionText="label"
      optionValue="value"
      isLoading={isLoading}
      choices={BRAND_CHOICES}
      validate={required()}
      {...COMMON_INPUT_PROPS}
      {...props}
    />
  );
};
