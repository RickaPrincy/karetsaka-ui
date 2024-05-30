import Image from "next/image";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;
  imageUrl: string;
};

type CarImageListProps = {
  cars: Car[];
};

export function CarImageList({ cars }: CarImageListProps) {
  return (
    <ImageList sx={{ width: "100%", height: "auto", mx: "auto" }} cols={3}>
      {cars.map((car: Car) => (
        <ImageListItem
          key={car.id}
          sx={{
            "transition": "0.3s",
            "&:hover": {
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)",
            },
            "margin": "6px",
          }}
        >
          <Image
            src={car.imageUrl}
            alt={car.model}
            width={400}
            height={300}
            layout="responsive"
            quality={100}
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
  );
}
