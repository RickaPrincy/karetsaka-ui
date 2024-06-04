import { FC } from "react";
import { Create, SimpleForm } from "react-admin";
import { v4 as uuid } from "uuid";
import { CrupdateCar } from "@/gen/client";
import { CarInputs } from "./components/car-inputs";
import {
  CrupdateCarWithStatusAndColor,
  createCarFactory,
} from "./utils/create-car-factory";

export const CarCreate: FC = () => {
  return (
    <Create
      title="Create car"
      transform={(car: CrupdateCarWithStatusAndColor): CrupdateCar => ({
        ...createCarFactory(car),
        id: uuid(),
      })}
    >
      <SimpleForm>
        <CarInputs />
      </SimpleForm>
    </Create>
  );
};
