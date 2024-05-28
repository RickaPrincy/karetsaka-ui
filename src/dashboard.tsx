"use client";

import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { USER_UI } from "./operations/users";
import { authProvider } from "./providers";
import { LoginPage } from "./security/components";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
  <Admin
    requireAuth
    authProvider={authProvider}
    loginPage={LoginPage}
    dataProvider={dataProvider}
  >
    <Resource name="users" recordRepresentation="name" {...USER_UI} />
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default AdminApp;
