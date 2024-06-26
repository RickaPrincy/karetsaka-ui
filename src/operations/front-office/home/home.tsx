"use client";

import { FC } from "react";
import { Typography, CircularProgress, Box } from "@mui/material";
import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";

import { FlexBox } from "@/common/components/box";
import { CarList, SearchComponent } from "./components";
import { CarBrandC } from "@/operations/car-brands/components";
import { ContactForm } from "../contact/components";
import { PALETTE_COLORS } from "@/common/utils/palette-colors";
import { carBrandProvider } from "@/providers/car-brand-provider";
import golf from "@/assets/images/golf.png";

export const HomePage: FC = () => {
  const { data: carBrands = [], isLoading: brandsLoading } = useQuery({
    queryFn: () => carBrandProvider.getList(1, 6, {}, {}, {}),
    queryKey: ["carBrands"],
  });

  return (
    <>
      <FlexBox
        sx={{
          width: "100%",
          minHeight: "80vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "3.5rem",
            color: "white",
            fontWeight: "bold",
            maxWidth: "850px",
            textAlign: "center",
          }}
        >
          Welcome to{" "}
          <span style={{ color: PALETTE_COLORS.orange["1"] }}>Karetsaka</span>,
          You can buy your car here
        </Typography>
        <Typography sx={{ fontSize: "16px", color: "white", opacity: 0.8 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elitrchitecto
          necessitatibus
        </Typography>
        <SearchComponent />
      </FlexBox>
      <FlexBox>
        <Image src={golf} width={400} alt="golf" />
        <Box>
          <Typography
            sx={{
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Brands populars
          </Typography>
          <FlexBox sx={{ color: "white", maxWidth: "400px" }}>
            {brandsLoading ? (
              <CircularProgress color="warning" />
            ) : (
              carBrands.map((el) => (
                <Link key={el.id} href={`/search`}>
                  <CarBrandC
                    sx={{
                      "display": "flex",
                      "gap": 2,
                      "m": 2,
                      "boxShadow": "none",
                      "transition": "all linear 0.5s",
                      "cursor": "pointer",
                      "p": 2,
                      "&:hover": {
                        boxShadow: "0px 0px 1px white",
                      },
                    }}
                    brand={el}
                  />
                </Link>
              ))
            )}
          </FlexBox>
        </Box>
      </FlexBox>
      <Typography
        sx={{
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Most popular cars
      </Typography>
      <CarList />
      <ContactForm />
    </>
  );
};
