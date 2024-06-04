import { FC } from "react";
import { useListContext } from "react-admin";
import { CarCard } from "./components";
import { Car } from "@/gen/client";
import { FlexBox } from "@/common/components/box";
import { List } from "@/common/components/list";

export const CarList: FC = () => {
  return (
    <List title="Cars">
      <CarListContent />
    </List>
  );
};

const CarListContent = () => {
  const { data: cars = [] } = useListContext<Car>();
  return (
    <FlexBox sx={{ flexWrap: "wrap", gap: 2 }}>
      {cars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </FlexBox>
  );
};
