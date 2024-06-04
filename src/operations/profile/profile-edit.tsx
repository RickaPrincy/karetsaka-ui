import { ProfileEditLayout } from "@/common/components/layout";
import { UpdateProfile } from "@/gen/client";
import { useWhoami } from "@/security/hooks";
import { FC } from "react";

export const ProfileEdit: FC = () => {
  const { id } = useWhoami();

  return (
    <ProfileEditLayout
      id={id!}
      resource="profile"
      title="Edit profile"
      redirect="show"
      transform={(profile): UpdateProfile => {
        return {
          id,
          ...profile,
        };
      }}
    />
  );
};
