import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import Link from "next/link";

import { FlexBox } from "@/common/components/box";
import { CarCard } from "@/operations/cars/components";
import { carProvider } from "@/providers/car-provider";

export const CarList = () => {
  const { data: cars = [], isLoading } = useQuery({
    queryFn: () => carProvider.getList(1, 6, {}, {}, {}),
    queryKey: ["cars"],
  });

  if (isLoading) {
    return (
      <FlexBox sx={{ width: "100%" }}>
        <CircularProgress color="warning" />
      </FlexBox>
    );
  }

  return (
    <FlexBox sx={{ width: "90%", gap: 5, mt: 5, flexWrap: "wrap" }}>
      {cars.map((el) => (
        <Link key={el.id} href={`/cars/${el.id}`}>
          <CarCard car={el} />
        </Link>
      ))}
    </FlexBox>
  );
};
