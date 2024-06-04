import { FC } from "react";
import { Edit, SaveButton, SimpleForm, Toolbar } from "react-admin";
import { useParams } from "react-router-dom";
import { CarInputs } from "./components";
import {
  CrupdateCarWithStatusAndColor,
  createCarFactory,
} from "./utils/create-car-factory";
import { CrupdateCar } from "@/gen/client";

export const CarEdit: FC = () => {
  const { id } = useParams();

  return (
    <Edit
      id={id}
      title="Edit car"
      transform={(car: CrupdateCarWithStatusAndColor): CrupdateCar => ({
        ...createCarFactory(car),
        id: id!,
      })}
    >
      <SimpleForm
        toolbar={
          <Toolbar>
            <SaveButton />
          </Toolbar>
        }
      >
        <CarInputs />
      </SimpleForm>
    </Edit>
  );
};
