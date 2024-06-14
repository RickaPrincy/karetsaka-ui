import { FC } from "react";
import { CircularProgress } from "@mui/material";
import {
  DeleteButton,
  EditButton,
  Show,
  TopToolbar,
  useShowContext,
} from "react-admin";
import { useParams } from "react-router-dom";

import { CarShowLayout } from "./components";
import { Car } from "@/gen/client";

export const CarShow: FC = () => {
  const { id } = useParams();

  return (
    <Show
      id={id}
      actions={
        <TopToolbar>
          <EditButton variant="contained" />
          <DeleteButton variant="contained" />
        </TopToolbar>
      }
    >
      <CarShowContent />
    </Show>
  );
};

const CarShowContent: FC = () => {
  const { record: car, isLoading } = useShowContext<Car>();

  if (isLoading || !car) {
    return <CircularProgress />;
  }

  return <CarShowLayout car={car} />;
};
