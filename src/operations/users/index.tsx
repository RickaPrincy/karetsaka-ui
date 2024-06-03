import { ResourceProps } from "react-admin";
import { Groups as UserIcon } from "@mui/icons-material";
import { UserList } from "./user-list";

export const USER_UI: Partial<ResourceProps> = {
  list: UserList,
  icon: UserIcon,
};
