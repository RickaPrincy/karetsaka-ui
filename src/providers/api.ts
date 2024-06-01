import { CarsApi, HealthApi, SecurityApi, UsersApi } from "../gen/client";
import { getCachedConfiguration } from "./utils";

export const healthApi = () => new HealthApi(getCachedConfiguration());
export const securityApi = () => new SecurityApi(getCachedConfiguration());
export const usersApi = () => new UsersApi(getCachedConfiguration());
export const carsApi = () => new CarsApi(getCachedConfiguration());
