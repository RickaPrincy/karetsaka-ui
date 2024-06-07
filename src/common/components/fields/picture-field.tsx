import { FC, } from "react";
import { FunctionField, FunctionFieldProps } from "react-admin";

export const PictureField: FC<
  Omit<FunctionFieldProps, "render"> & {
    defaultImage?: string;
    imageProps?: any
  }
> = ({ source = "picture", defaultImage, imageProps, ...functionFieldProps }) => { 
  const { style, ...restImageProps} = imageProps;
  return (
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
            ...style
          }}
          {...restImageProps}
        />
      );
    }}
    {...functionFieldProps}
  />
)};
