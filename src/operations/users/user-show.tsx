import { FC } from "react";
import { useParams } from "react-router-dom";
import { ProfileShowLayout } from "@/common/components/layout";

export const UserShow: FC = () => {
  const { id } = useParams();

  return <ProfileShowLayout id={id!} title="User" />;
};
