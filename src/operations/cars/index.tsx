import { ResourceProps } from "react-admin";
import { DirectionsCar as CarIcon } from "@mui/icons-material";
import { CarCreate } from "./car-create";
import { CarList } from "./car-list";
import { CarEdit } from "./car-edit";
import { CarShow } from "./car-show";

export const CAR_UI: Partial<ResourceProps> = {
  list: CarList,
  create: CarCreate,
  edit: CarEdit,
  show: CarShow,
  icon: CarIcon,
};
