"use client";

import { Admin, Resource } from "react-admin";
import { LoginPage } from "./security/components";
import { authProvider } from "./providers";
import { dataProvider } from "./providers/data-provider";
import { USER_UI } from "./operations/users";
import { CAR_BRAND_UI } from "./operations/car-brands";

const AdminApp = () => (
  <Admin
    requireAuth
    title="Karetsaka"
    loginPage={LoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" recordRepresentation="name" {...USER_UI} />
    <Resource name="carBrands" recordRepresentation="name" {...CAR_BRAND_UI} />
  </Admin>
);

export default AdminApp;
