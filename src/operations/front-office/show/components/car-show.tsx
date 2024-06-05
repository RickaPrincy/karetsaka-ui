"use client";
import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Rating,
  Divider,
  Chip,
} from "@mui/material";
import { useQuery } from "react-query";
import {
  CheckCircle as CheckCircleIcon,
  ShoppingCart as ShoppingCartIcon,
  Payment as PaymentIcon,
  LocalOffer as LocalOfferIcon,
  CurrencyRupee as CurrencyRupeeIcon,
  Description as DescriptionIcon,
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";
import Image from "next/image";
import golfImage from "@/assets/images/golf.png";
import login from "@/assets/images/login-illustration.png";
import { carProvider } from "@/providers/car-provider";
import { AppointmentForm } from "../../appointment/components";

const images = [golfImage, login];

export const CarShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAppointmentFormOpen, setAppointmentFormOpen] = useState(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleOpenAppointmentForm = () => {
    setAppointmentFormOpen(true);
  };

  const handleCloseAppointmentForm = () => {
    setAppointmentFormOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "250px",
              position: "relative",
              marginTop: "100px",
            }}
          >
            <Button
              onClick={handlePrevImage}
              sx={{ position: "absolute", left: 0 }}
            >
              <ArrowBackIosIcon />
            </Button>
            <Image
              src={images[currentImageIndex]}
              alt="Product Image"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
            <Button
              onClick={handleNextImage}
              sx={{ position: "absolute", right: 0 }}
            >
              <ArrowForwardIosIcon />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            CORSAIR VENGEANCE RGB PRO SL 16GB (2x8GB) DDR4 3200 (PC4-25600) C16
            1.35V Desktop Memory - White
          </Typography>
          <Typography variant="body1" gutterBottom>
            QuickFind 1276 | Mfr part code MCG
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <Rating name="read-only" value={4} readOnly />
            <span style={{ marginLeft: "8px" }}>123 reviews</span>
          </Typography>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Typography variant="h5">£96.99</Typography>
            <Chip
              icon={<CheckCircleIcon />}
              label="In Stock"
              color="success"
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Typography variant="body1" gutterBottom>
              Order within 7 hours for delivery on Tuesday 29th June
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  onClick={handleOpenAppointmentForm}
                >
                  Appointment
                </Button>
              </Box>
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" gutterBottom>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="subtitle2">Capacity:</Typography>
                <Typography variant="subtitle2">64GB</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="subtitle2">Colour:</Typography>
                <Typography variant="subtitle2">Green</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="subtitle2">Display:</Typography>
                <Typography variant="subtitle2">6.17"</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="subtitle2">
                  Dual 12MP rear camera
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="subtitle2">SIM Card: Dual SIM</Typography>
              </Box>
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              startIcon={<CurrencyRupeeIcon />}
              sx={{ mr: 2 }}
            >
              Finance options
            </Button>
            <Button
              variant="outlined"
              startIcon={<LocalOfferIcon />}
              sx={{ mr: 2 }}
            >
              Finance options
            </Button>
            <Button
              variant="outlined"
              startIcon={<DescriptionIcon />}
              sx={{ mr: 2 }}
            >
              View our returns policy
            </Button>
          </Box>
        </Grid>
      </Grid>

      <AppointmentForm
        open={isAppointmentFormOpen}
        onClose={handleCloseAppointmentForm}
      />
    </Box>
  );
};
