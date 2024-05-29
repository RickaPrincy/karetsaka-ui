import * as React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

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
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        Car List
      </Typography>
      <Typography sx={{ mb: 2, fontSize: "15px", color: "gray" }}>
        Explore our cars you might like
      </Typography>
      <ImageList sx={{ width: "100%", height: "auto", mx: "auto" }} cols={3}>
        {cars.map((car: Car) => (
          <ImageListItem key={car.id}>
            <img
              srcSet={`${car.imageUrl}?w=100&fit=crop&auto=format&dpr=2 2x`}
              src={`${car.imageUrl}?w=100&fit=crop&auto=format`}
              alt={car.model}
              loading="lazy"
            />
            <ImageListItemBar
              title={`${car.brand} ${car.model}`}
              subtitle={`Year: ${car.year}`}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${car.brand} ${car.model}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
