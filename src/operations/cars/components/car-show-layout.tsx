import { FC } from "react";
import { Typography, Box } from "@mui/material";
import { Check } from "@mui/icons-material";
import Image from "next/image";
import { FlexBox } from "@/common/components/box";
import { Car } from "@/gen/client";
import golf from "@/assets/images/golf.png";
import { CarBrandC } from "@/operations/car-brands/components";
import { useToggle } from "@/common/hooks";
import { Carousel } from "@/common/components/box";

export const InfoField = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <>
    <span style={{ fontWeight: "bold" }}>{label}</span>: {value}
  </>
);

export const CarShowLayout: FC<{ car: Car }> = ({ car }) => {
  const { value, toggleValue } = useToggle();
  const showImage = car.images.length > 0 ? car.images[0].url : golf;

  return (
    <FlexBox sx={{ gap: 2, minHeight: "100vh" }}>
      <Box onClick={toggleValue} sx={{ cursor: "pointer" }}>
        <Image src={showImage} height={400} width={400} alt={car.name} />
      </Box>
      <Box sx={{ width: "350px" }}>
        <FlexBox sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "1rem", color: "white" }}>
            {car.name}
          </Typography>
          <Typography
            sx={{
              color: "white",
              bgcolor: "#388017",
              fontWeight: "bold",
              opacity: 0.7,
              px: 2,
              py: 0.5,
            }}
          >
            <Check />
            In Stock
          </Typography>
        </FlexBox>
        <FlexBox sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "1rem", color: "white" }}>
            <InfoField label="Model" value={car!.model!} />
            <br />
            <InfoField label="Type" value={car!.type!} />
          </Typography>
          <CarBrandC brand={car.brand} sx={{ color: "white" }} />
        </FlexBox>
        <Typography sx={{ color: "white", my: 2 }}>
          <strong>Color: </strong>
          <span
            style={{
              marginLeft: 5,
              padding: "3px 30px",
              borderRadius: "5px",
              backgroundColor: car.color[0],
            }}
          ></span>
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "white", opacity: 0.9 }}>
          {car.description}
        </Typography>
        <Carousel
          images={car.images.map((el) => el.url)}
          open={value}
          onClose={toggleValue}
        />
      </Box>
    </FlexBox>
  );
};
