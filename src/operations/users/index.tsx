import { ResourceProps } from "react-admin";
import { Groups as UserIcon } from "@mui/icons-material";
import { UserList } from "./user-list";
import { UserShow } from "./user-show";

export const USER_UI: Partial<ResourceProps> = {
  list: UserList,
  icon: UserIcon,
  show: UserShow,
};
