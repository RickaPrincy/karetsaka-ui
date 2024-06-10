"use client";

import * as React from "react";
import Link from "next/link";
import { AppBar, Typography, Button } from "@mui/material";
import { PALETTE_COLORS } from "@/common/utils/palette-colors";
import { FlexBox } from "@/common/components/box";

export function ResponsiveAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "none",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        px: 4,
        py: 2,
        backgroundColor: "#0b0c40",
        zIndex: 999,
        boxShadow: "none",
        justifyContent: "space-between",
      }}
    >
      <Link href="#">
        <Typography variant="h1" sx={{ fontSize: "25px" }}>
          <span
            style={{
              color: PALETTE_COLORS.orange["1"],
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            K
          </span>
          aretsaka
        </Typography>
      </Link>
      <FlexBox
        sx={{
          "gap": 4,
          "a:hover": {
            color: PALETTE_COLORS.orange["1"],
          },
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/cars">Cars</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/about">About</Link>
      </FlexBox>
      <Button href="/admin" variant="contained" color="warning">
        Login
      </Button>
    </AppBar>
  );
}
