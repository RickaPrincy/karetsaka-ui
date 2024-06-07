"use client";
import * as React from "react";
import { useState } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Slider,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const cars = [
  {
    id: "1",
    name: "Toyota Corolla",
    description: "A reliable sedan",
    brand: "Toyota",
    model: "Corolla",
    price: 20000,
    color: "Silver",
    motorType: "Essence",
    power: "100cv",
    placeNumber: 5,
    status: "Pinned",
    type: "Sedan",
    imageUrl:
      "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
  {
    id: "2",
    name: "Ford Focus",
    description: "A fun hatchback",
    brand: "Ford",
    model: "Focus",
    price: 25000,
    color: "Red",
    motorType: "Diesel",
    power: "150cv",
    placeNumber: 5,
    status: "Pinned",
    type: "Hatchback",
    imageUrl:
      "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
  {
    id: "3",
    name: "Tesla Model 3",
    description: "An electric sedan",
    brand: "Tesla",
    model: "Model 3",
    price: 35000,
    color: "Black",
    motorType: "Electric",
    power: "200cv",
    placeNumber: 5,
    status: "Pinned",
    type: "Sedan",
    imageUrl:
      "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
];

type Car = {
  id: string;
  name: string;
  description: string;
  brand: string;
  model: string;
  price: number;
  color: string;
  motorType: string;
  power: string;
  placeNumber: number;
  status: string;
  type: string;
};

export const CarFinder: React.FC = () => {
  const [type, setType] = useState("");
  const [motorType, setMotorType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50000]);

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    setType(event.target.value);
  };

  const handleMotorTypeChange = (event: SelectChangeEvent<string>) => {
    setMotorType(event.target.value);
  };

  const filteredCars = cars.filter((car) => {
    // Filter by type
    if (type && car.type !== type) {
      return false;
    }

    // Filter by motor type
    if (motorType && car.motorType !== motorType) {
      return false;
    }

    // Filter by price range
    if (car.price < priceRange[0] || car.price > priceRange[1]) {
      return false;
    }

    return true;
  });

  const sortedCars = filteredCars.sort((a, b) => {
    if (priceRange[0] === 0) {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <Box sx={{ flexGrow: 1, mx: 5 }}>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={3} sx={{ backgroundColor: "#DCDCDC", padding: 20 }}>
          <Typography variant="h6">Find a Car</Typography>
          <Typography variant="body2">{sortedCars.length} Cars</Typography>

          <List>
            <ListItem button>
              <ListItemText primary="Type" />
              <Select
                value={type}
                onChange={handleTypeChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="Hatchback">Hatchback</MenuItem>
                <MenuItem value="SUV">SUV</MenuItem>
              </Select>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Motor Type" />
              <Select
                value={motorType}
                onChange={handleMotorTypeChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="Essence">Essence</MenuItem>
                <MenuItem value="Diesel">Diesel</MenuItem>
                <MenuItem value="Electric">Electric</MenuItem>
              </Select>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Price Range" />
              <Slider
                value={priceRange}
                onChange={(event, newValue) =>
                  setPriceRange(newValue as [number, number])
                }
                valueLabelDisplay="auto"
                min={0}
                max={50000}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">Results</Typography>
          <Grid container spacing={2}>
            {sortedCars.map((car) => (
              <Grid item xs={4} key={car.id}>
                <Item>
                  <Link href={`client/info/${car.id}`} passHref>
                    <img src={car.imageUrl} alt={car.name} width="100%" />
                  </Link>
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {car.name}
                  </Typography>
                  <Typography variant="body2">{car.description}</Typography>
                  <Typography variant="body2">{car.price}€</Typography>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
