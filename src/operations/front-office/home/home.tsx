"use client";

import { FC } from "react";
import { Typography } from "@mui/material";
import { FlexBox } from "@/common/components/box";
import { PALETTE_COLORS } from "@/common/utils/palette-colors";
import { SearchComponent } from "./components";

export const HomePage: FC = () => {
  return (
    <FlexBox
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#0b0c40",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: "3.5rem",
          color: "white",
          fontWeight: "bold",
          maxWidth: "850px",
          textAlign: "center",
        }}
      >
        Welcome to{" "}
        <span style={{ color: PALETTE_COLORS.orange["1"] }}>Karetsaka</span>,
        You can buy your car here
      </Typography>
      <Typography sx={{ fontSize: "16px", color: "white", opacity: 0.8 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elitrchitecto
        necessitatibus
      </Typography>
      <SearchComponent />
    </FlexBox>
  );
};
