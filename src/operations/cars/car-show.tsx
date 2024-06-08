import { FC } from "react";
import { DeleteButton, EditButton, ShowGuesser, TopToolbar } from "react-admin";
import { useParams } from "react-router-dom";

export const CarShow: FC = () => {
  const { id } = useParams();

  return (
    <ShowGuesser
      actions={
        <TopToolbar>
          <EditButton variant="contained" />
          <DeleteButton variant="contained" />
        </TopToolbar>
      }
      id={id}
    />
  );
};
