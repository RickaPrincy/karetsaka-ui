import { FC } from "react";
import { Show, ShowProps, SimpleShowLayout, TextField } from "react-admin";
import { PictureField } from "../fields";
import defaultProfileImage from "@/assets/images/default_image.png";

export const ProfileShowLayout: FC<Omit<ShowProps, "children">> = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <PictureField source="picture" defaultImage={defaultProfileImage.src} />
        <TextField source="name" label="Name" />
        <TextField source="email" label="Email" />
      </SimpleShowLayout>
    </Show>
  );
};
