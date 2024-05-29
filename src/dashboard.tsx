"use client";

import { Admin, ListGuesser, Resource } from "react-admin";
import { LoginPage } from "./security/components";
import { authProvider } from "./providers";
import { dataProvider } from "./providers/data-provider";

const AdminApp = () => (
  <Admin
    requireAuth
    loginPage={LoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    {/* //TODO: delete before after release */}
    <Resource name="dummy" recordRepresentation="name" list={ListGuesser} />
  </Admin>
);

export default AdminApp;
