import { FC } from "react";
import { EditButton, TopToolbar } from "react-admin";
import { ProfileShowLayout } from "@/common/components/layout";
import { useWhoami } from "@/security/hooks";

export const ProfileShow: FC = () => {
  const { id } = useWhoami();

  return (
    <ProfileShowLayout
      id={id!}
      title="Profile"
      resource="profile"
      actions={
        <TopToolbar>
          <EditButton to="/edit" variant="contained" />
        </TopToolbar>
      }
    />
  );
};
