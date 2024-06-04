import { ResourceProps } from "react-admin";
import { DynamicForm as BrandIcon } from "@mui/icons-material";
import { CarBrandCreate } from "./car-brand-create";
import { CarBrandList } from "./car-brand-list";

export const CAR_BRAND_UI: Partial<ResourceProps> = {
  create: CarBrandCreate,
  list: CarBrandList,
  icon: BrandIcon,
  options: {
    label: "Brands",
  },
};
