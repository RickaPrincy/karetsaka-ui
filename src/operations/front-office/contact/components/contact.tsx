import { useState } from "react";
import {
  TextField,
  Snackbar,
  SxProps,
  Button,
  Typography,
  Alert,
  Box,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { FlexBox } from "@/common/components/box";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { EmailType, emailProvider } from "@/providers/email-provider";
import { dumbLoading } from "@/common/utils/dumb-loading";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const FORM_SX: SxProps = {
  "mb": 2,
  "& .MuiInputLabel-root": { color: "white" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "white" },
    "&:hover fieldset": { borderColor: "white" },
    "&.Mui-focused fieldset": { borderColor: "white" },
  },
  "& .MuiInputBase-input": { color: "white" },
};

type LoadingStateType = "NONE" | "PENDING" | "SENDED" | "ERROR";

const getMessageConfig = (type: LoadingStateType) => {
  switch (type) {
    case "ERROR":
      return "Oops an error occured !!";
    case "PENDING":
      return "Your message will be sent !!";
    case "SENDED":
      return "Message sended with success";
    default:
      return "";
  }
};

export const ContactForm = () => {
  const [loadingState, setLoadingState] = useState<LoadingStateType>("NONE");

  const { handleSubmit, register, reset } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = async (data: FormData) => {
    setLoadingState("PENDING");
    emailProvider
      .send({
        type: EmailType.CONTACT_US,
        data,
      })
      .then(() => {
        setLoadingState("SENDED");
        reset();
      })
      .catch((error) => {
        console.log(error);
        setLoadingState("ERROR");
      })
      .finally(() => {
        dumbLoading(() => {
          setLoadingState("NONE");
        }, 2000);
      });
  };

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          mt: 5,
          mb: 2,
          fontSize: "2rem",
          color: "white",
          textAlign: "center",
        }}
      >
        Contact us
      </Typography>
      <FlexBox
        sx={{
          gap: 5,
          width: "calc(100% - 100px)",
          mx: "auto",
          alignItems: "start",
        }}
      >
        <Box sx={{ flex: 1 }}>
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
          <form onSubmit={handleSubmit(sendEmail)}>
            <TextField
              required
              sx={FORM_SX}
              color="warning"
              label="Your Name"
              {...register("name")}
              {...COMMON_INPUT_PROPS}
            />
            <TextField
              required
              sx={FORM_SX}
              type="email"
              color="warning"
              label="Your Email"
              {...register("email")}
              {...COMMON_INPUT_PROPS}
            />
            <TextField
              multiline
              sx={FORM_SX}
              color="warning"
              label="Your Message"
              {...register("message")}
              {...COMMON_INPUT_PROPS}
            />
            <Button
              sx={{ ml: "auto", display: "block" }}
              variant="contained"
              type="submit"
              color="warning"
            >
              Send Message
            </Button>
          </form>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            Contact information
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <PhoneIcon sx={{ mr: 1, color: "white" }} />
            <Typography variant="body1" sx={{ color: "white" }}>
              +261346251431
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <EmailIcon sx={{ mr: 1, color: "white" }} />
            <Typography variant="body1" sx={{ color: "white" }}>
              <Link href="mailto:rckprincy@gmail.com">
                rckprincy@example.com
              </Link>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ mr: 1, color: "white" }} />
            <Typography variant="body1" sx={{ color: "white" }}>
              Madagascar, Antananarivo
            </Typography>
          </Box>
        </Box>
      </FlexBox>
      <Snackbar open={loadingState !== "NONE"}>
        <Alert
          variant="filled"
          severity={
            loadingState == "PENDING"
              ? "info"
              : loadingState == "ERROR"
                ? "error"
                : "success"
          }
        >
          {getMessageConfig(loadingState)}
        </Alert>
      </Snackbar>
    </Box>
  );
};
