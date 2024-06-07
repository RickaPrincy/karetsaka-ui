import { PictureField } from "@/common/components/fields";
import { FC } from "react";
import {
  EditButton,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from "react-admin";
import { useParams } from "react-router-dom";

export const ImageShow: FC = () => {
  const { id } = useParams();
  return (
    <Show
      id={id}
      title="Edit image"
      actions={
        <TopToolbar>
          <EditButton variant="contained" />
        </TopToolbar>
      }
    >
      <SimpleShowLayout>
        <PictureField source="url" />
        <TextField label="Name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
