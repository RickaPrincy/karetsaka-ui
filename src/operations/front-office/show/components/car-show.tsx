"use client";
import { useState } from "react";
import { CircularProgress, Typography, Box, Button } from "@mui/material";
import { Check } from "@mui/icons-material";
import Image from "next/image";
import { FlexBox } from "@/common/components/box";
import { useQuery } from "react-query";
import { carProvider } from "@/providers/car-provider";
import golf from "@/assets/images/golf.png";
import { AppointmentForm } from "../../appointment/components";
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

export const CarShow = ({ id }: { id: string }) => {
  const { data: car, isLoading } = useQuery({
    queryFn: () => carProvider.getOne(id, {}),
    queryKey: ["cars"],
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) {
    return <CircularProgress color="warning" />;
  }

  return (
    <FlexBox sx={{ gap: 2, minHeight: "100vh" }}>
      <Image src={golf} width={400} alt="golf" />
      <Box sx={{ width: "350px" }}>
        <FlexBox sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            BMW
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
        <Typography sx={{ fontSize: "1rem", color: "white" }}>
          <InfoField label="Name" value={car!.name!} />
          <br />
          <InfoField label="Model" value={car!.model!} />
          <br />
          <InfoField label="Type" value={car!.type!} />
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "white", opacity: 0.9 }}>
          {car!.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button variant="contained" onClick={handleClickOpen}>
            Appointment
          </Button>
        </Box>
      </Box>
      <AppointmentForm open={open} onClose={handleClose} />
    </FlexBox>
  );
};
