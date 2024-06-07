import * as React from "react";
import { Container, Box, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 4,
        backgroundColor: "#4DBCE7",
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            mt: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/" passHref>
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </Link>
          </Box>
          <Typography variant="body1" align="right">
            &copy; 2024 Karetsaka. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
