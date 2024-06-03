import { FC } from "react";
import { Datagrid, FunctionField, List, TextField } from "react-admin";
import { CarCard } from "./components";
import { Car } from "@/gen/client";

//TODO: create car card components
export const CarList: FC = () => {
  return (
    <List title="cars" empty={false}>
      <Datagrid bulkActionButtons={false}>
        <FunctionField render={(car: Car) => <CarCard car={car} />} />
      </Datagrid>
    </List>
  );
};
