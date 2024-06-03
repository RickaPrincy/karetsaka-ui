import { FC } from "react";
import { FunctionField, FunctionFieldProps } from "react-admin";

export const ProfilePictureField: FC<
  Omit<FunctionFieldProps, "render"> & {
    defaultImage?: string;
  }
> = ({ source = "picture", defaultImage, ...functionFieldProps }) => (
  <FunctionField
    render={(record: any) => {
      return (
        <img
          src={record[source] || defaultImage}
          style={{
            width: "45px",
            height: "45px",
            display: "block",
            borderRadius: "50%",
          }}
        />
      );
    }}
    {...functionFieldProps}
  />
);
