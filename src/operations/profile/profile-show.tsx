import { FC } from "react";
import { ProfileLayout } from "@/common/components/layout";
import { useWhoami } from "@/security/hooks";

export const ProfileShow: FC = () => {
  const { id } = useWhoami();
  return <ProfileLayout title="Profile" resource="profile" id={id!} />;
};
