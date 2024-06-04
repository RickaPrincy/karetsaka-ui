import { ResourceProps } from "react-admin";
import { DynamicForm as BrandIcon } from "@mui/icons-material";
import { CarBrandCreate } from "./car-brand-create";
import { CarBrandList } from "./car-brand-list";
import { CarBrandEdit } from "./car-brand-edit";
import { CarBrandShow } from "./car-brand-show";

export const CAR_BRAND_UI: Partial<ResourceProps> = {
  create: CarBrandCreate,
  list: CarBrandList,
  show: CarBrandShow,
  icon: BrandIcon,
  edit: CarBrandEdit,
  options: {
    label: "Brands",
  },
};
