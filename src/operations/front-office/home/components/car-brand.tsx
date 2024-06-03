"use client";
import { Typography, Box, Grid } from "@mui/material";
import { useQuery } from "react-query";
import Image from "next/image";
import { carBrandProvider } from "@/providers/car-brand-provider";

export function CarBrand() {
  const { data: carBrands = [] } = useQuery({
    queryFn: () => carBrandProvider.getList(1, 6, {}, undefined, undefined),
    queryKey: ["carBrands"],
  });

  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Car Brands
        </Typography>
        <Typography sx={{ mb: 2, fontSize: "1rem", color: "gray" }}>
          Explore our brands cars you might like
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {carBrands.map((brand) => (
          <Grid item xs={12} sm={6} md={4} key={brand.id}>
            <Box
              sx={{
                "display": "flex",
                "flexDirection": "row",
                "alignItems": "center",
                "padding": 2,
                "border": "1px solid #e0e0e0",
                "borderRadius": 1,
                "transition": "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: 3,
                },
              }}
            >
              <Box sx={{ flexShrink: 0 }}>
                <Image
                  src={brand.picture!}
                  alt={brand.name}
                  width={50}
                  height={50}
                />
              </Box>
              <Box sx={{ ml: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {brand.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
