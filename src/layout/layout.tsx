import { FC } from "react";
import { Layout as RaLayout, AppBar, LayoutProps } from "react-admin";
import { Menu } from "./menu";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <RaLayout appBar={AppBar} menu={Menu}>
      {children}
    </RaLayout>
  );
};
