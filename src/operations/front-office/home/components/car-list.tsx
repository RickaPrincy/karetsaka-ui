import { FlexBox } from "@/common/components/box";
import { CircularProgress } from "@mui/material";
import { carProvider } from "@/providers/car-provider";
import { useQuery } from "react-query";
import { CarCard } from "@/operations/cars/components";

export const CarList = () => {
  const { data: cars = [], isLoading } = useQuery({
    queryFn: () => carProvider.getList(1, 6, {}, {}, {}),
    queryKey: ["cars"],
  });

  if (isLoading) {
    return <CircularProgress color="warning" />;
  }
  return (
    <FlexBox sx={{ width: "90%", mt: 5, flexWrap: "wrap" }}>
      {cars.map((el) => (
        <CarCard car={el} key={el.id} />
      ))}
    </FlexBox>
  );
};
