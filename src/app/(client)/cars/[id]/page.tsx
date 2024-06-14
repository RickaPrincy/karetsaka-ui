"use client";

import { CircularProgress, Button } from "@mui/material";
import { CarShowLayout } from "@/operations/cars/components";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

import { Car } from "@/gen/client";
import { carProvider } from "@/providers/car-provider";
import { AppointmentForm } from "@/operations/front-office/appointment/components";
import { useToggle } from "@/common/hooks";

export default function CarShow() {
  const { id } = useParams();
  const { value, toggleValue } = useToggle();

  const { data: car, isLoading } = useQuery({
    queryFn: () => carProvider.getOne(id as string, {}),
    queryKey: ["cars", id],
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <CarShowLayout
        data={
          <Button variant="contained" color="warning" onClick={toggleValue}>
            Appointement
          </Button>
        }
        car={car as Car}
      />
      <AppointmentForm open={value} onClose={toggleValue} />
    </>
  );
}
