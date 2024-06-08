/* eslint-disable */
import { FC } from "react";
import { TextInput, useListContext, useRedirect } from "react-admin";
import { CarCard, SelectMotorTypeInput } from "./components";
import { Car } from "@/gen/client";
import { FlexBox } from "@/common/components/box";
import { List } from "@/common/components/list";

export const CarList: FC = () => {
  return (
    <List
      title="Cars"
      filters={[
        <TextInput source="brandName" label="Brand name" />,
        <SelectMotorTypeInput />,
        <TextInput alwaysOn source="type" label="Type" />,
        <TextInput source="model" label="Model" />,
      ]}
      sx={{
        "& .RaList-content": {
          p: 2,
        },
      }}
    >
      <CarListContent />
    </List>
  );
};

const CarListContent = () => {
  const { data: cars = [] } = useListContext<Car>();
  const redirect = useRedirect();

  return (
    <FlexBox
      sx={{
        flexWrap: "wrap",
        gap: 2,
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      {cars.map((car) => (
        <CarCard
          onClick={() => {
            redirect("show", "cars", car.id);
          }}
          car={car}
          key={car.id}
        />
      ))}
    </FlexBox>
  );
};
