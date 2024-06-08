import { FlexBox } from "@/common/components/box";
import { CircularProgress } from "@mui/material";
import { carProvider } from "@/providers/car-provider";
import { useQuery } from "react-query";
import { CarCard } from "@/operations/cars/components";
import Link from "next/link";

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
      {(cars || []).map((el) => (
        <Link key={el.id} href={`/client/${el.id}`}>
          <CarCard car={el} />
        </Link>
      ))}
    </FlexBox>
  );
};
