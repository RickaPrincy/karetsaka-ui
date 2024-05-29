"use client";
import { useState } from "react";
import Image from "next/image";
import { Typography, Box, Grid } from "@mui/material";

type CarBrandType = {
  id: string;
  logo: string;
  name: string;
};

const staticBrands: CarBrandType[] = [
  {
    id: "1",
    logo: "/blob.png",
    name: "Brand One",
  },
  {
    id: "2",
    logo: "/blob.png",
    name: "Brand Two",
  },
  {
    id: "3",
    logo: "/blob.png",
    name: "Brand Three",
  },
];

export function CarBrand() {
  const [brands] = useState<CarBrandType[]>(staticBrands);

  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Car Brands
        </Typography>
        <Typography sx={{ mb: 2, fontSize: "1rem", color: "gray" }}>
          Explore our brands cars you might like
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {brands.map((brand) => (
          <Grid item xs={12} sm={6} md={4} key={brand.id}>
            <Box
              sx={{
                "display": "flex",
                "flexDirection": "row",
                "alignItems": "center",
                "padding": 2,
                "border": "1px solid #e0e0e0",
                "borderRadius": 1,
                "transition": "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: 3,
                },
              }}
            >
              <Box sx={{ flexShrink: 0 }}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={50}
                  height={50}
                />
              </Box>
              <Box sx={{ ml: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {brand.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
