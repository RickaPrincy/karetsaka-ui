"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  TextField,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Typography,
  CardContent,
  Grid,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { z } from "zod";

type FormData = {
  CarId: string;
  Name: string;
  FirstName: string;
  Email: string;
  Message: string;
  Contact: string;
  AppointmentDate: string;
  Status: "pending" | "validated" | "rejected" | "archived";
};

const schema = z.object({
  CarId: z.string().nonempty(),
  Name: z.string().nonempty(),
  FirstName: z.string().nonempty(),
  Email: z.string().email(),
  Message: z.string(),
  Contact: z.string().min(10),
  AppointmentDate: z.string(),
  Status: z.enum(["pending", "validated", "rejected", "archived"]),
});
//TODO: make this like a pop up and post data appointmentProvider
export const AppointmentForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="sm">
        <Card sx={{ backgroundColor: "#e3f2fd" }} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Appointment
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                spacing={2}
                sx={{ marginLeft: -1, marginRight: -1 }}
              >
                <Grid item xs={6}>
                  <Controller
                    name="CarId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Car ID"
                        error={!!errors.CarId}
                        helperText={errors.CarId ? errors.CarId.message : null}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="Name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Name"
                        error={!!errors.Name}
                        helperText={errors.Name ? errors.Name.message : null}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="FirstName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="First Name"
                        error={!!errors.FirstName}
                        helperText={
                          errors.FirstName ? errors.FirstName.message : null
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="Email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Email"
                        error={!!errors.Email}
                        helperText={errors.Email ? errors.Email.message : null}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="Message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField {...field} label="Message" />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="Contact"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Contact"
                        error={!!errors.Contact}
                        helperText={
                          errors.Contact ? errors.Contact.message : null
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="AppointmentDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <DatePicker label="Date" {...field} />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="Status"
                    control={control}
                    defaultValue="pending"
                    render={({ field }) => (
                      <FormControl>
                        <InputLabel>Status</InputLabel>
                        <Select {...field}>
                          <MenuItem value="pending">Pending</MenuItem>
                          <MenuItem value="validated">Validated</MenuItem>
                          <MenuItem value="rejected">Rejected</MenuItem>
                          <MenuItem value="archived">Archived</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button variant="contained" type="submit">
                    Validate
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </LocalizationProvider>
  );
};
