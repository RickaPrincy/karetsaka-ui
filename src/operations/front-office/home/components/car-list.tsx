import * as React from "react";
import { Typography, Box } from "@mui/material";

import { CarImageList } from "./car-image-list";
interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  imageUrl: string;
}

const cars: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    imageUrl:
      "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2019,
    imageUrl:
      "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
  {
    id: 3,
    brand: "Ford",
    model: "Focus",
    year: 2018,
    imageUrl:
      "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
  {
    id: 4,
    brand: "Ford",
    model: "Focus",
    year: 2018,
    imageUrl:
      "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
  {
    id: 5,
    brand: "Ford",
    model: "Focus",
    year: 2018,
    imageUrl:
      "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
];

export function CarList() {
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
          Car Lists
        </Typography>
        <Typography sx={{ mb: 2, fontSize: "1rem", color: "gray" }}>
          Explore our brands cars you might like
        </Typography>
      </Box>
      <CarImageList cars={cars} />
    </Box>
  );
}
