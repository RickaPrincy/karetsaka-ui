import { ResourceProps } from "react-admin";
import { DirectionsCar as CarIcon } from "@mui/icons-material";
import { CarCreate } from "./car-create";
import { CarList } from "./car-list";

export const CAR_UI: Partial<ResourceProps> = {
  list: CarList,
  create: CarCreate,
  icon: CarIcon,
};
