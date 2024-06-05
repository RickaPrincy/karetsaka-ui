import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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

type AppointmentFormProps = {
  open: boolean;
  onClose: () => void;
};

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  open,
  onClose,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    onClose(); // Fermer le dialogue après la soumission du formulaire
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>Appointment</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
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
                  render={({ field }) => <DatePicker label="Date" {...field} />}
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
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)} variant="contained">
            Validate
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};
