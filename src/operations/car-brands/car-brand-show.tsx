import { FC } from "react";
import {
  EditButton,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from "react-admin";
import { useParams } from "react-router-dom";
import { PictureField } from "@/common/components/fields";

export const CarBrandShow: FC = () => {
  const { id } = useParams();
  return (
    <Show
      id={id}
      title="Edit brand"
      actions={
        <TopToolbar>
          <EditButton variant="contained" />
        </TopToolbar>
      }
    >
      <SimpleShowLayout>
        <PictureField />
        <TextField label="Name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
