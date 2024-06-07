"use client";
import * as React from "react";
import { AppBar, Container, Box, Toolbar, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const pages = [
  { label: "Brand", href: "/brand" },
  { label: "Car", href: "/car" },
  { label: "Appointment", href: "/appointment" },
];

export function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#4DBCE7" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link key={page.label} href={page.href} passHref>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Link href="/admin" passHref>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
