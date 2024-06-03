import { FC } from "react";
import { Show, ShowProps, SimpleShowLayout, TextField } from "react-admin";
import { ProfilePictureField } from "../fields";
import defaultProfileImage from "@/assets/images/default_image.png";

export const ProfileLayout: FC<Omit<ShowProps, "children">> = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ProfilePictureField
          source="picture"
          defaultImage={defaultProfileImage.src}
        />
        <TextField source="name" label="Name" />
        <TextField source="email" label="Email" />
      </SimpleShowLayout>
    </Show>
  );
};
