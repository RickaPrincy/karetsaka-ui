"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { Box, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";

import { ResponsiveAppBar } from "@/operations/front-office/components";
import { FlexBox } from "@/common/components/box";
import { PALETTE_COLORS } from "@/common/utils/palette-colors";

const queryClient = new QueryClient();

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#0b0c40",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ResponsiveAppBar />
        {children}
        <FlexBox sx={{ width: "100%", p: 5, bgcolor: "#06022e", mt: 5 }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h1"
              sx={{ fontSize: "25px", color: "white", textAlign: "center" }}
            >
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
            <Typography sx={{ color: "white", textAlign: "center" }}>
              Made by <Favorite color="warning" />{" "}
              <span style={{ fontWeight: "bold" }}>Karetsaka team</span>
            </Typography>
          </Box>
        </FlexBox>
      </QueryClientProvider>
    </div>
  );
}
