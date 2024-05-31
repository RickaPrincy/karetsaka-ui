import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { CarImageList } from "../../home/components";
import golfImage from "@/assets/images/golf.png";

type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;
  imageUrl: string;
};

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

export function CarModel() {
  return (
    <Box sx={{ maxWidth: "1420px", margin: "0 auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontSize: "20px" }}>
          Showing 27 new BMW models. Select a model for pricing details.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src={golfImage} alt="BMW Logo" width={100} />
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: "18px", marginLeft: "16px" }}
          >
            BMW Models
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mx: "auto", width: "100%" }}>
        <CarImageList cars={cars} />
      </Box>
    </Box>
  );
}
