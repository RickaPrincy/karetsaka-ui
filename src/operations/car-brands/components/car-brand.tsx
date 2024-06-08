import { FC } from "react";
import { Typography, BoxProps } from "@mui/material";
import { FlexBox } from "@/common/components/box";
import { CarBrand } from "@/gen/client";
import Image from "next/image";

export type CarBrandProps = {
  brand: CarBrand;
} & Omit<BoxProps, "children">;

export const CarBrandC: FC<CarBrandProps> = ({ brand, ...boxProps }) => {
  return (
    <FlexBox
      sx={{
        alignItems: "center",
        gap: 2,
        p: 1.5,
        boxShadow: "0px 0px 1px white",
        width: "fit-content",
        cursor: "pointer",
        borderRadius: "15px",
        m: 1,
      }}
      {...boxProps}
    >
      <Image alt="brand" src={brand.picture!} width={50} height={50} />
      <Typography>{brand.name}</Typography>
    </FlexBox>
  );
};
