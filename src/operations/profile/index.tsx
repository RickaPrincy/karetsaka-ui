import { ResourceProps } from "react-admin";
import { Person as ProfileIcon } from "@mui/icons-material";
import { ProfileEdit } from "./profile-edit";
import { ProfileShow } from "./profile-show";

export const PROFILE_UI: Partial<ResourceProps> = {
  show: ProfileShow,
  list: ProfileEdit,
  icon: ProfileIcon,
};
