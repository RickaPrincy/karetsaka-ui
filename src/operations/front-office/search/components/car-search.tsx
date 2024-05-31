"use client";
import { useState } from "react";
import { TextField, Container, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function CarSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const performSearch = () => {
    console.log("Search triggered with:", { searchTerm });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <TextField
        label="Search by Car Brand or Model"
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          "borderRadius": "25px",
          "& .MuiOutlinedInput-root": { borderRadius: "25px" },
        }}
      />
    </Container>
  );
}
