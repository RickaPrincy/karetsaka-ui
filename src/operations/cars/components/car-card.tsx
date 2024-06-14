import { FC } from "react";
import { Box, Typography, BoxProps } from "@mui/material";
import Image from "next/image";

import { Car, CarMotorTypeEnum } from "@/gen/client";
import { FlexBox } from "@/common/components/box";
import { renderMoney } from "@/common/utils/typo";
import defaultImage from "@/assets/images/golf.png";

const getMotorColorr = (value: CarMotorTypeEnum) => {
  switch (value) {
    case "DIESEL":
      return "#2d7a8a";
    case "ELECTRIC":
      return "#822673";
    case "GASOLINE":
      return "#c71e23";
    default:
      return "#cfa62d";
  }
};

//TODO: fix image on car
export const CarCard: FC<{ car: Car } & BoxProps> = ({ car, ...boxProps }) => {
  return (
    <Box
      sx={{
        "p": 2,
        "bgcolor": "rgba(183, 189, 185, .1)",
        "borderRadius": "5px",
        "transition": "all linear .5s",
        "cursor": "pointer",
        "&:hover": {
          scale: "1.05",
        },
      }}
      {...boxProps}
    >
      <Image src={defaultImage} width={250} height={250} alt={car.name} />
      <FlexBox sx={{ justifyContent: "space-between" }}>
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          {car.name}
        </Typography>{" "}
        <Typography
          sx={{
            color: "white",
            p: "5px 8px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: "bold",
            bgcolor: getMotorColorr(car.motorType),
          }}
        >
          {car.motorType}
        </Typography>
      </FlexBox>
      <FlexBox sx={{ mt: "5px", justifyContent: "space-between" }}>
        <Typography sx={{ color: "white" }}>
          {renderMoney(car.price)}
        </Typography>
        <Typography sx={{ fontWeight: "bold", color: "white" }}>
          {car.brand.name}
        </Typography>
      </FlexBox>
    </Box>
  );
};
