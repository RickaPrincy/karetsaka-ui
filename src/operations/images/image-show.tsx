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
        <TextField source="name" label="Name" />
        <PictureField
          source="url"
          imageProps={{
            style: {
              borderRadius: 0,
              width: "100px",
              height: "100px",
            },
          }}
        />
      </SimpleShowLayout>
    </Show>
  );
};
