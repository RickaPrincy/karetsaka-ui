"use client";

import { CircularProgress, Button } from "@mui/material";
import { CarShowLayout } from "@/operations/cars/components";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

import { Car } from "@/gen/client";
import { carProvider } from "@/providers/car-provider";

export default function CarShow() {
  const { id } = useParams();

  const { data: car, isLoading } = useQuery({
    queryFn: () => carProvider.getOne(id as string, {}),
    queryKey: ["cars", id],
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Button sx={{ ml: "auto" }} variant="contained">
        Appointment
      </Button>
      <CarShowLayout car={car as Car} />
    </>
  );
}
