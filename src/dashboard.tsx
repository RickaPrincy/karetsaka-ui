"use client";

import { Admin, Resource } from "react-admin";
import { LoginPage } from "./security/components";
import { authProvider } from "./providers";
import { dataProvider } from "./providers/data-provider";
import { USER_UI } from "./operations/users";

const AdminApp = () => (
  <Admin
    requireAuth
    loginPage={LoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" recordRepresentation="name" {...USER_UI} />
  </Admin>
);

export default AdminApp;
