"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button, Typography, Grid, Box } from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";

export const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
            color: "white",
          }}
        >
          Contact us
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        sx={{ ml: { xs: 0, md: 4 } }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "white",
            }}
            gutterBottom
          >
            Send us a message
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={handleNameChange}
              sx={{
                "mb": 2,
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputBase-input": { color: "white" },
              }}
            />

            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
              sx={{
                "mb": 2,
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputBase-input": { color: "white" },
              }}
            />

            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              value={message}
              onChange={handleMessageChange}
              sx={{
                "mb": 2,
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputBase-input": { color: "white" },
              }}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" type="submit" color="warning">
                Send Message
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "white",
            }}
            gutterBottom
          >
            Contact information
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <PhoneIcon sx={{ mr: 1, color: "white" }} />
            <Typography variant="body1" sx={{ color: "white" }}>
              +1 123 456 789
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={2}>
            <EmailIcon sx={{ mr: 1, color: "white" }} />
            <Typography variant="body1" sx={{ color: "white" }}>
              admin@example.com
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ mr: 1, color: "white" }} />
            <Typography variant="body1" sx={{ color: "white" }}>
              Mada, City, Country
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
