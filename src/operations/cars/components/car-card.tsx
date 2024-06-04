import { FC } from "react";
import {
  Button,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";
import { Car } from "@/gen/client";
import { useRedirect } from "react-admin";
import Image from "next/image";

//TODO: fix image on car
//TODO: change this
export const CarCard: FC<{ car: Car }> = ({ car }) => {
  const redirect = useRedirect();

  return (
    <Button
      onClick={() => {
        redirect("show", "cars", car.id);
      }}
    >
      <ImageListItem
        key={car.id}
        sx={{
          "transition": "0.3s",
          "&:hover": {
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)",
          },
          "margin": "6px",
          "maxWidth": "350px",
        }}
      >
        <Image
          src={
            "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg"
          }
          alt={car.model}
          width={400}
          height={300}
          layout="responsive"
          quality={100}
        />
        <ImageListItemBar
          title={`${"brand here"} ${car.model}`}
          subtitle={`Year: 500`}
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
    </Button>
  );
};
