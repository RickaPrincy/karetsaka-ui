import React from "react";
import Slider from "react-slick";
import { DialogContent, Dialog } from "@mui/material";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Carousel = ({
  images,
  open,
  onClose,
}: {
  images: string[];
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={onClose}>
      <DialogContent sx={{ width: "100%" }}>
        <Slider {...SETTINGS}>
          {images.map((img, index) => (
            <div style={{ width: "100%", height: "700px" }}>
              <Image
                key={index}
                src={img}
                alt={`slide-${index}`}
                width={500}
                height={500}
              />
            </div>
          ))}
        </Slider>
      </DialogContent>
    </Dialog>
  );
};
