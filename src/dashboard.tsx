"use client";

import { Admin, Resource } from "react-admin";
import { Person as ProfileIcon } from "@mui/icons-material";
import { LoginPage } from "./security/components";
import { authProvider } from "./providers";
import { dataProvider } from "./providers/data-provider";
import { karetsakaDarkTheme, karetsakaLightTheme } from "./karetsakaTheme";
import { ProfileShow } from "./operations/profile";
import { USER_UI } from "./operations/users";
import { CAR_BRAND_UI } from "./operations/car-brands";

const AdminApp = () => (
  <Admin
    requireAuth
    title="Karetsaka"
    defaultTheme="dark"
    lightTheme={karetsakaLightTheme}
    darkTheme={karetsakaDarkTheme}
    loginPage={LoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="profile"
      icon={ProfileIcon}
      recordRepresentation="name"
      list={<ProfileShow />}
    />
    <Resource name="users" {...USER_UI} />
    <Resource name="carBrands" {...CAR_BRAND_UI} />
  </Admin>
);

export default AdminApp;
