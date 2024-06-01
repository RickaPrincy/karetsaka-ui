import { FC } from "react";
import { FunctionField, FunctionFieldProps } from "react-admin";

export const ProfilePictureField: FC<Omit<FunctionFieldProps, "render">> = ({
  source = "picture",
  ...functionFieldProps
}) => (
  <FunctionField
    render={(record: any) => {
      return (
        <img
          src={record[source]}
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
