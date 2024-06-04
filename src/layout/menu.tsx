import { FC } from "react";
import { Menu as RaMenu } from "react-admin";
import { Person as ProfileIcon } from "@mui/icons-material";

export const Menu: FC = () => {
  return (
    <RaMenu>
      <RaMenu.Item to="/" leftIcon={<ProfileIcon />} primaryText="Profile" />
      <RaMenu.ResourceItem name="users" />
      <RaMenu.ResourceItem name="cars" />
      <RaMenu.ResourceItem name="profiles" />
      <RaMenu.ResourceItem name="carBrands" />
    </RaMenu>
  );
};
