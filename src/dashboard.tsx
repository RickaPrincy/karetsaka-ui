"use client";

import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { LoginPage } from "./security/components";
import { ProfileShow } from "./operations/profile/profile-show";
import { ProfileEdit } from "./operations/profile/profile-edit";
import { Layout } from "./layout";
import { karetsakaDarkTheme, karetsakaLightTheme } from "./karetsakaTheme";
import { authProvider } from "./providers";
import { dataProvider } from "./providers/data-provider";

import { USER_UI } from "./operations/users";
import { CAR_BRAND_UI } from "./operations/car-brands";
import { CAR_UI } from "./operations/cars";

const AdminApp = () => (
  <Admin
    requireAuth
    layout={Layout}
    title="Karetsaka"
    defaultTheme="dark"
    lightTheme={karetsakaLightTheme}
    darkTheme={karetsakaDarkTheme}
    loginPage={LoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="profile" />
    <Resource name="users" {...USER_UI} />
    <Resource name="cars" {...CAR_UI} />
    <Resource name="carBrands" {...CAR_BRAND_UI} />
    <CustomRoutes>
      <Route path="/" element={<ProfileShow />} />
      <Route path="/edit" element={<ProfileEdit />} />
    </CustomRoutes>
  </Admin>
);

export default AdminApp;
